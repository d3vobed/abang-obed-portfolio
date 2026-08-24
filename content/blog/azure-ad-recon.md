---
title: Azure AD Recon
date: 2024-01-22
tag: Security
excerpt: Reconnaissance tooling and technique notes against Azure AD.
image: /images/screenshot-4.png
---

Reconnaissance against Azure AD is less about a single tool and more about understanding the identity graph.

## What I map first

- Tenant id and named locations
- Guest vs member accounts
- Conditional access gaps
- Service principals with credentials

## Tooling

`Get-TenantInfo`, `Get-AzureADUser`, and careful manual review of app registrations. The goal is to find where the trust boundary is thinnest before any active step.

## Note

This is a notes-style post carried over from my earlier [writeups](https://d3vobed.github.io). More detailed, current research lives on the main site under Security Disclosures.
