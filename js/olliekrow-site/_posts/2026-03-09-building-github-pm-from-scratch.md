---
title: Building a GitHub PM System From Scratch
date: 2026-03-09 12:00:00 -0800
categories: [Project Management, GitHub]
tags: [github, projects, workflows, automation]
---

Most teams I've seen inherit GitHub in a state of chaos — repo-level projects everywhere, no consistent labeling, no cross-repo visibility, and workflows that either don't exist or nobody follows.

This is a write-up of how I'm rebuilding that from scratch, using only native GitHub features.

## The Problem With Repo-Level Projects

The first thing to fix is scope. Repo-level projects can only surface issues from their own repo. The moment your work spans more than one repo — which it almost always does — you lose visibility.

The fix is simple: **move everything to org-level projects.** GitHub's Projects v2 at the org level can pull in issues from any repo in the org. That's the foundation everything else builds on.

## Three Projects Instead of Seventeen

The org I inherited had 17 projects. Roughly half were active, half were stale. Nobody knew which was which.

The new architecture has three:

- **Roadmap** — Epics on a timeline, grouped by milestone
- **Team Planning** — Sprint Kanban with iterations
- **Bug Tracker** — Dedicated bug triage

That's it. Three projects, clear purposes, no overlap.

## Labels Over Issue Types

GitHub has a native "issue types" feature, but it doesn't filter reliably in Projects v2 views. After running into this repeatedly, I switched to label-based filtering — filtering the Roadmap view by the `epic` label, for example.

It's a workaround, but it's dependable. And dependable beats elegant every time in a team tool.

## Size as Estimation Proxy

Rather than adding a separate Story Points field, I use a **Size** field (XS → XL) mapped to Fibonacci values:

| Size | Points |
|---|---|
| XS | 1 |
| S | 2 |
| M | 3 |
| L | 5 |
| XL | 8 |

One field, same information, less overhead.

## What's Next

The last piece is automating date fields — setting Start Date when an issue moves to In Progress, and End Date when it moves to Done. This requires a GitHub Action and some GraphQL queries to get the field IDs. I'll write that up once it's complete.

The full demo lives at [olliekrow/project-hub-2](https://github.com/olliekrow/project-hub-2).
