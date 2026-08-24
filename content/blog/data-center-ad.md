---
title: Setting up a full-scale data center with Active Directory
date: 2024-02-10
tag: Engineering
excerpt: Building out an AD environment at data-center scale.
image: /images/screenshot-5.png
---

A practical account of standing up an Active Directory environment large enough to resemble a real enterprise, for lab and detection-engineering work.

## Topology

- Dedicated domain controllers with segmented subnets
- Member servers for file, identity, and monitoring
- A SIEM collector receiving forwarded logs

## Why

Detection engineering needs a realistic target. You cannot tune detections against a toy domain and expect them to hold in production.

## Takeaway

Start small, then scale the trust relationships, the GPO surface, and the log volume until it feels uncomfortably real.
