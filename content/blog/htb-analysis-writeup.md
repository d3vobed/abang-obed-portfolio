---
title: "{HTB} Analysis Writeup"
date: 2024-03-18
tag: Security
excerpt: Full Active Directory compromise — LDAP injection with blind enumeration, credential recovery, and a Snort DLL hijack to SYSTEM.
image: /images/screenshot-6.png
---

This writeup walks through a full Active Directory compromise on a HackTheBox-like environment, chaining several weaknesses into a complete domain takeover.

## LDAP injection with blind enumeration

The web app forwarded user input directly into an LDAP filter. By observing differential responses, I enumerated valid usernames and group memberships without explicit errors.

## Credential recovery

Recovered service-account credentials from a misconfigured share, then used them to authenticate to the domain join endpoint.

## Snort DLL hijack to SYSTEM

A signed service loaded a DLL from a writable path. Dropping a crafted library yielded code execution as SYSTEM.

## Lessons

- Never reflect user input into directory queries.
- Service accounts need constrained paths and integrity checks.
- Watch for signed binaries loading libraries from writable locations.

Full machine writeups and more are on my [Medium](https://medium.com/@obx03).
