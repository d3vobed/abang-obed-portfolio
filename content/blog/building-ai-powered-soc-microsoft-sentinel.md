---
title: 'Building an AI-Powered SOC with Microsoft Sentinel on Azure'
date: '2026-09-01'
author: 'Abang Obed'
image: '/images/screenshot-1.png'
tags: ['sentinel', 'azure', 'ai', 'siem', 'kql', 'security-operations']
---

A step-by-step walkthrough of deploying Microsoft Sentinel as your cloud-native SIEM, wiring up data sources, writing detection rules in KQL, and layering an AI-powered enrichment pipeline using Azure OpenAI to triage incidents automatically.

---

## Why Microsoft Sentinel

Traditional on-prem SIEMs require hardware procurement, capacity planning, and manual scaling. Sentinel runs on Azure — you pay for what you ingest and query. The built-in AI and automation features mean you can move from alert to response in minutes, not hours.

In this guide we will:

1. Stand up a Log Analytics Workspace and enable Sentinel
2. Connect Azure AD sign-in and audit logs
3. Forward Linux syslog from a public EC2 instance
4. Build KQL analytics rules for brute-force, impossible travel, and malware detection
5. Create a workbook dashboard
6. Integrate Azure OpenAI for automated incident enrichment
7. Automate response with Logic Apps
8. Simulate attacks and watch the detections fire

All code and ARM templates are included.

---

## Architecture Overview

```
Azure AD  ─┐
           ├─→ Log Analytics Workspace ─→ Microsoft Sentinel ─→ Workbook (visuals)
Linux EC2 ─┘              │                       │
                          │                  AI Enrichment
                          │              (Azure OpenAI GPT-4)
                          │                       │
                          │                  Logic App
                          │              (auto-triage + notify)
                          │
                    Azure Monitor Agent
```

- **Azure AD** provides identity signals (sign-in, audit, non-interactive sign-in).
- **Linux EC2** forwards syslog (SSH, sudo, auth) via Azure Monitor Agent.
- **Sentinel** ingests both, applies KQL analytics rules, and surfaces incidents.
- **Azure OpenAI** enriches each incident with an AI-generated risk assessment.
- **Logic App** posts the enriched summary to a Slack or Teams webhook.

---

## Step 1 — Create the Log Analytics Workspace

```bash
az group create --name rg-sentinel-soc --location eastus

az monitor log-analytics workspace create \
  --resource-group rg-sentinel-soc \
  --workspace-name sentinel-workspace \
  --location eastus \
  --sku PerGB2018
```

Or via ARM template (`deploy-workspace.json`):

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "workspaceName": { "type": "string", "defaultValue": "sentinel-workspace" },
    "location": { "type": "string", "defaultValue": "[resourceGroup().location]" }
  },
  "resources": [
    {
      "type": "Microsoft.OperationalInsights/workspaces",
      "apiVersion": "2022-10-01",
      "name": "[parameters('workspaceName')]",
      "location": "[parameters('location')]",
      "properties": {
        "sku": { "name": "PerGB2018" },
        "retentionInDays": 90
      }
    }
  ]
}
```

Deploy:

```bash
az deployment group create \
  --resource-group rg-sentinel-soc \
  --template-file deploy-workspace.json
```

---

## Step 2 — Enable Microsoft Sentinel

![Azure Monitor Log Analytics workspace creation in the portal](/images/screenshot-2.png)

Once the workspace exists, add Sentinel through the Azure portal or CLI:

```bash
az security workspace-setting create \
  --name default \
  --target-workspace "/subscriptions/<SUB_ID>/resourceGroups/rg-sentinel-soc/providers/Microsoft.OperationalInsights/workspaces/sentinel-workspace"
```

In the portal: Security → Microsoft Sentinel → Add → select `sentinel-workspace`.

---

## Step 3 — Connect Azure AD Logs

Sentinel has a built-in Azure AD connector.

**Portal path**: Sentinel → Data connectors → Azure Active Directory → Open connector page → Enable.

Once connected, these tables populate within ~15 minutes:

![Azure AD Sign-in Logs data connector in Sentinel](/images/screenshot-3.png)

- `SigninLogs` — interactive sign-ins
- `AADNonInteractiveUserSignInLogs` — service principals, managed identities
- `AuditLogs` — directory changes (role assignments, group modifications)

Verify:

```kql
SigninLogs
| summarize count() by ResultType
| render piechart
```

---

## Step 4 — Forward Linux Syslog (EC2)

On the EC2 instance (Ubuntu 22.04), install the Azure Monitor Agent:

```bash
# Import Microsoft GPG key
curl -sSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-prod.gpg > /dev/null

# Add repo
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/22.04/prod jammy main" | sudo tee /etc/apt/sources.list.d/microsoft-prod.list

sudo apt update && sudo apt install -y azmonitoragent
```

Associate the agent with your workspace:

```bash
az vm extension set \
  --resource-group rg-sentinel-soc \
  --vm-name ec2-linux-sentinel \
  --name AzureMonitorLinuxAgent \
  --publisher Microsoft.Azure.Management
```

Configure syslog collection in `/etc/rsyslog.d/95-azure-monitor-agent.conf`:

```
# Forward auth, sshd, sudo logs
auth,authpriv.*     @@127.0.0.1:25324
```

Restart rsyslog:

```bash
sudo systemctl restart rsyslog
```

In the Sentinel portal, add the **Syslog** data connector and select the `auth`, `authpriv`, `daemon`, and `user` facilities.

---

## Step 5 — KQL Detection Rules

### Brute Force Detection

```kql
SigninLogs
| where ResultType != 0
| summarize Attempts = count(), 
    TargetAccount = any(AccountDisplayName),
    TargetUPN = any(AccountUserPrincipalName),
    IP = any(IPAddress) 
    by AccountUserPrincipalName, bin(TimeGenerated, 15m)
| where Attempts > 10
| sort by Attempts desc
```

![KQL query results showing failed sign-ins by account](/images/screenshot-4.png)

Create an **Analytics Rule** from this query:

1. Sentinel → Analytics → New rule query
2. Set schedule: run every 5 minutes
3. Set threshold: 10 failed attempts in 15 minutes
4. Severity: Medium
5. Entity mapping: `AccountUserPrincipalName` → Account, `IPAddress` → IP

### Impossible Travel

```kql
SigninLogs
| where ResultType == 0
| extend Location = parse_json(LocationDetails)
| extend City = tostring(Location.city),
         Country = tostring(Location.countryOrRegion)
| summarize arg_max(TimeGenerated, City, Country, IPAddress) 
    by AccountUserPrincipalName
| order by TimeGenerated desc
| serialize
| extend PrevCity = prev(City), PrevCountry = prev(Country),
         PrevTime = prev(TimeGenerated)
| where City != PrevCity and Country != PrevCountry
| extend TimeDiffMinutes = datetime_diff('minute', TimeGenerated, PrevTime)
| where TimeDiffMinutes < 60 and TimeDiffMinutes > 0
| extend ApproxDistance = geo_distance_points(
    longitude_of(City), latitude_of(City),
    longitude_of(PrevCity), latitude_of(PrevCity)
  )
| where ApproxDistance > 1000
| project AccountUserPrincipalName, TimeGenerated, City, PrevCity, 
    Country, PrevCountry, TimeDiffMinutes, IPAddress
```

### Suspicious Service Principal Activity

```kql
AADServicePrincipalSignInLogs
| where ResultType == 0
| summarize Count = count(), 
    IPs = make_set(IPAddress),
    Resources = make_set(ResourceDisplayName)
    by AppDisplayName, bin(TimeGenerated, 1h)
| where Count > 50
| extend RiskSignal = "High-volume service principal activity"
```

### SSH Brute Force (Syslog)

```kql
Syslog
| where Facility == "auth" or Facility == "authpriv"
| where ProcessName == "sshd"
| where SyslogMessage has "Failed password"
| extend SourceIP = extract(@"from\s+(\d+\.\d+\.\d+\.\d+)", 1, SyslogMessage)
| extend Username = extract(@"for\s+(\S+)", 1, SyslogMessage)
| summarize Attempts = count() by SourceIP, Username, bin(TimeGenerated, 10m)
| where Attempts > 5
| sort by Attempts desc
```

---

## Step 6 — Workbook Dashboard

Sentinel workbooks let you build rich visualizations.

```kql
// Workbook: Incident Summary
SecurityIncident
| summarize arg_max(TimeGenerated, *) by IncidentNumber
| summarize TotalIncidents = count() by Severity
| render columnchart
```

```kql
// Workbook: Top Attack Vectors
SecurityAlert
| extend AlertName = tostring(AlertName)
| summarize Count = count() by AlertName
| top 10 by Count desc
| render barchart
```

```kql
// Workbook: Geographic Attack Map
SigninLogs
| where ResultType != 0
| extend Location = parse_json(LocationDetails)
| extend Country = tostring(Location.countryOrRegion)
| summarize FailedLogins = count() by Country
| render mapchart with (kind=location map="world")
```

To create: Sentinel → Workbooks → New → add query tiles → save.

---

## Step 7 — AI Enrichment with Azure OpenAI

![Sentinel Workbook dashboard visualizations](/images/screenshot-1.png)

This is where it gets interesting. We use Azure OpenAI to automatically assess each incident.

### Deploy Azure OpenAI

```bash
az cognitiveservices account create \
  --name openai-sentinel \
  --resource-group rg-sentinel-soc \
  --location eastus \
  --kind OpenAI \
  --sku S0

az cognitiveservices account deployment create \
  --name openai-sentinel \
  --resource-group rg-sentinel-soc \
  --deployment-name gpt-4-deployment \
  --model-name gpt-4 \
  --model-version "0613" \
  --model-format OpenAI \
  --sku-capacity 10 \
  --sku-name Standard
```

### Enrichment Script (Python)

```python
import json
import os
import requests

OPENAI_ENDPOINT = os.environ["OPENAI_ENDPOINT"]
OPENAI_KEY = os.environ["OPENAI_KEY"]
DEPLOYMENT = "gpt-4-deployment"

def enrich_incident(incident: dict) -> str:
    """Send incident details to GPT-4 for risk assessment."""
    
    prompt = f"""You are a SOC analyst AI assistant. Assess this security incident 
and provide:
1. Risk level (Critical/High/Medium/Low)
2. Likely attack technique (MITRE ATT&CK)
3. Recommended immediate actions
4. Whether this could be a false positive

Incident:
- Title: {incident.get('title', 'N/A')}
- Severity: {incident.get('severity', 'N/A')}
- Alert type: {incident.get('alert_type', 'N/A')}
- Affected account: {incident.get('account', 'N/A')}
- Source IP: {incident.get('source_ip', 'N/A')}
- Timestamp: {incident.get('timestamp', 'N/A')}
- KQL summary: {incident.get('kql_result', 'N/A')}

Respond in JSON format:
{{"risk_level": "...", "mitre_technique": "...", "actions": ["..."], "false_positive_likelihood": "..."}}
"""
    
    headers = {
        "Content-Type": "application/json",
        "api-key": OPENAI_KEY,
    }
    
    payload = {
        "messages": [
            {"role": "system", "content": "You are an expert SOC analyst AI."},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 500,
        "temperature": 0.2,
    }
    
    resp = requests.post(
        f"{OPENAI_ENDPOINT}/openai/deployments/{DEPLOYMENT}/chat/completions?api-version=2024-02-01",
        headers=headers,
        json=payload,
        timeout=30
    )
    resp.raise_for_status()
    
    content = resp.json()["choices"][0]["message"]["content"]
    # Extract JSON from response
    start = content.find("{")
    end = content.rfind("}") + 1
    return json.loads(content[start:end])


# Example usage with Sentinel API
def fetch_sentinel_incidents(workspace_id: str, token: str):
    """Fetch recent incidents from Sentinel via REST API."""
    url = f"https://management.azure.com{workspace_id}/providers/Microsoft.SecurityInsights/incidents"
    params = {"api-version": "2023-04-01-preview", "$filter": "properties/status eq 'New'"}
    headers = {"Authorization": f"Bearer {token}"}
    
    resp = requests.get(url, headers=headers, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json().get("value", [])


def process_incidents():
    workspace_id = os.environ["SENTINEL_WORKSPACE_ID"]
    token = os.environ["AZURE_TOKEN"]
    
    incidents = fetch_sentinel_incidents(workspace_id, token)
    
    for inc in incidents:
        props = inc.get("properties", {})
        incident_data = {
            "title": props.get("title"),
            "severity": props.get("severity"),
            "alert_type": props.get("alertsData", {}).get("alerts", [{}])[0].get("alertType"),
            "account": props.get("owner", {}).get("email", "unassigned"),
            "source_ip": props.get("additionalData", {}).get("alerts", [{}])[0].get("extendedLinks", [{}])[0].get("ipAddress"),
            "timestamp": props.get("createdTimeUtc"),
        }
        
        assessment = enrich_incident(incident_data)
        print(f"\n=== {incident_data['title']} ===")
        print(json.dumps(assessment, indent=2))
        
        # Update incident with AI assessment
        update_url = f"https://management.azure.com{workspace_id}/providers/Microsoft.SecurityInsights/incidents/{inc['name']}"
        update_payload = {
            "properties": {
                "description": f"AI Assessment:\nRisk: {assessment['risk_level']}\nMITRE: {assessment['mitre_technique']}\nActions: {', '.join(assessment['actions'])}\nFP Likelihood: {assessment['false_positive_likelihood']}"
            }
        }
        requests.patch(update_url, headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"}, json=update_payload)


if __name__ == "__main__":
    process_incidents()
```

---

## Step 8 — Logic App Automation

For production, wrap the enrichment in a Logic App triggered by new Sentinel incidents.

![Logic App automation designer showing the incident trigger and enrichment flow](/images/screenshot-5.png)

**ARM template for the Logic App** (`deploy-logicapp.json`):

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "workspaceName": { "type": "string" },
    "openaiEndpoint": { "type": "string" },
    "openaiKey": { "type": "securestring" },
    "slackWebhookUrl": { "type": "securestring" }
  },
  "variables": {
    "logicAppName": "sentinel-ai-enrichment"
  },
  "resources": [
    {
      "type": "Microsoft.Logic/workflows",
      "apiVersion": "2017-07-01",
      "name": "[variables('logicAppName')]",
      "location": "[resourceGroup().location]",
      "definition": {
        "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
        "contentVersion": "1.0.0.0",
        "triggers": {
          "When_a_response_to_an_Azure_Sentinel_query_is_received": {
            "type": "ApiConnection",
            "inputs": {
              "host": { "connection": { "name": "@parameters('$connections')['azuresentinel']['connectionId']" } },
              "method": "post",
              "path": "/triggerRuleFired"
            },
            "recurrence": { "frequency": "Minute", "interval": 5 }
          }
        },
        "actions": {
          "Get_Incident_Details": {
            "type": "ApiConnection",
            "inputs": {
              "host": { "connection": { "name": "@parameters('$connections')['azuresentinel']['connectionId']" } },
              "method": "get",
              "path": "/incidents/@{triggerBody()?['WorkspaceId']}/incidents/@{triggerBody()?['IncidentNumber']}"
            }
          },
          "Call_Azure_OpenAI": {
            "type": "Http",
            "inputs": {
              "method": "post",
              "uri": "@{parameters('openaiEndpoint')}/openai/deployments/gpt-4-deployment/chat/completions?api-version=2024-02-01",
              "headers": { "api-key": "@{parameters('openaiKey')}" },
              "body": {
                "messages": [
                  { "role": "system", "content": "You are a SOC analyst AI. Assess this Sentinel incident." },
                  { "role": "user", "content": "Incident: @{body('Get_Incident_Details')?['properties']?['title']}\nSeverity: @{body('Get_Incident_Details')?['properties']?['severity']}\nProvide risk level, MITRE technique, recommended actions, and false positive likelihood." }
                ],
                "max_tokens": 400,
                "temperature": 0.2
              }
            }
          },
          "Post_to_Slack": {
            "type": "Http",
            "inputs": {
              "method": "post",
              "uri": "@{parameters('slackWebhookUrl')}",
              "body": {
                "text": ":rotating_light: *Sentinel AI Alert*\n\n*Incident:* @{body('Get_Incident_Details')?['properties']?['title']}\n*Severity:* @{body('Get_Incident_Details')?['properties']?['severity']}\n*AI Assessment:* @{body('Call_Azure_OpenAI')?['choices']?[0]?['message']?['content']}"
              }
            }
          }
        }
      }
    }
  ]
}
```

Deploy:

```bash
az deployment group create \
  --resource-group rg-sentinel-soc \
  --template-file deploy-logicapp.json \
  --parameters \
    workspaceName=sentinel-workspace \
    openaiEndpoint=https://openai-sentinel.openai.azure.com \
    openaiKey=$OPENAI_KEY \
    slackWebhookUrl=$SLACK_WEBHOOK
```

---

## Step 9 — Attack Simulation

### Simulate SSH Brute Force

```bash
# On a separate attack machine
for i in $(seq 1 20); do
  ssh -o ConnectTimeout=3 root@<EC2_PUBLIC_IP> "echo test" 2>/dev/null &
done
wait
```

### Simulate Impossible Travel

Use a VPN to connect from a different country and sign in to Azure AD within minutes of a local login. Sentinel will flag the geographic anomaly.

### Simulate Malicious OAuth App

```powershell
# PowerShell — register a suspicious app and attempt consent
Connect-AzureAD
New-AzureADApplication -DisplayName "TotallyLegitApp" -ReplyURLs "http://evil.com/callback"
$servicePrincipal = New-AzureADServicePrincipal -AppId $app.AppId
# In a real attack, the attacker would phishing for consent here
```

### Verify Detections

After simulation, check:

```kql
SecurityAlert
| where TimeGenerated > ago(1h)
| project AlertName, Severity, TimeGenerated
| order by TimeGenerated desc
```

```kql
SecurityIncident
| where TimeGenerated > ago(1h)
| project IncidentNumber, Title, Severity, Status
| order by TimeGenerated desc
```

You should see new incidents matching the simulated attacks.

---

## Step 10 — Incident Response Playbook (Summary)

| Severity | AI Assessment | Auto Action |
|----------|--------------|-------------|
| Critical | Likely ransomware or data exfiltration | Isolate account, disable sign-in, page on-call |
| High | Brute force or privilege escalation | Force password reset, block source IP, create ticket |
| Medium | Suspicious service principal or OAuth consent | Notify security team, require MFA step-up |
| Low | Policy violation or misconfiguration | Log for weekly review |

---

## Cost Considerations

| Component | Pricing Model | Estimated Monthly Cost |
|-----------|--------------|----------------------|
| Log Analytics | $2.46/GB ingested (after 5GB free) | ~$50–150 (10–50 GB/day) |
| Sentinel | Included with workspace | — |
| Azure OpenAI (GPT-4) | $0.03/1K input, $0.06/1K output tokens | ~$20–80 (depending on volume) |
| Logic Apps | $0.000025/action | ~$5–15 |
| **Total** | | **~$75–245/month** |

---

## Best Practices

1. **Least-privilege RBAC**: Use the `Microsoft Sentinel Responder` role only for analysts who need to modify incidents. Use `Microsoft Sentinel Reader` for dashboards.

2. **Data retention**: Set hot retention to 30 days and archive to cold for 90+ days to manage costs.

3. **Tune your rules**: Start with broad KQL queries and tighten thresholds based on your environment's noise level. Use exclusion lists for known-good IPs and service accounts.

4. **AI guardrails**: The OpenAI enrichment is advisory — never let it auto-remediate without human review. Set Logic App conditions to only auto-respond for Critical/High severity.

5. **Table-level RBAC**: Use `Microsoft.OperationalInsights/workspaces/tables/read` permissions to restrict which data sources analysts can query.

6. **Continuous improvement**: Review false positives weekly, update KQL rules, and retrain the AI prompt based on your SOC's feedback loop.

---

## Conclusion

Microsoft Sentinel gives you a cloud-native SIEM without the infrastructure burden. By layering Azure OpenAI on top, you get automated incident triage that surfaces what matters and reduces alert fatigue. The entire stack — workspace, detections, AI enrichment, and automation — can be deployed with the ARM templates provided above in under an hour.

This setup scales with your data: whether you're monitoring a single Azure AD tenant or forwarding syslog from hundreds of EC2 instances, the KQL analytics engine and the OpenAI enrichment pipeline adapt to your volume. Start with the detections in this post, tune them to your environment, and build outward from there.

The scripts and templates from this walkthrough are available on [GitHub](https://github.com/d3vobed/sentinel-soc-lab).
