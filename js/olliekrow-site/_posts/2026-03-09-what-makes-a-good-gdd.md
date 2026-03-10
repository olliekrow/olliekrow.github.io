---
title: What Makes a Good Game Design Document
date: 2026-03-09 14:00:00 -0800
categories: [Game Design]
tags: [gdd, game-design, documentation, kids-games]
---

A game design document is not a spec. It's not a contract. It's a thinking tool — a way of forcing decisions that would otherwise get deferred until they become expensive problems mid-development.

Here's what I've learned about what makes one actually useful.

## The Persona Problem

Most GDDs I've seen handle personas badly. They put them in side-by-side tables — two columns, cramped text, impossible to read on a laptop — or they skip them entirely in favor of vague age range descriptions.

The format matters. Card-style persona blocks — one per section, full width, clear hierarchy — are dramatically easier to read and reference. When a designer asks "would our player enjoy this mechanic?", they need to be able to find and read the persona in under ten seconds.

## Gender-Neutral by Default

This should be obvious by now but it still isn't in a lot of GDDs: use they/them for all personas and fictional characters unless gender is specifically a design element. Descriptive names, not gendered ones.

Kids' games especially — the player base is mixed, and nothing dates a document faster than baked-in assumptions about who's playing.

## Design Pillars Are a Decision Filter

Three to five short statements that define what the game must always feel like. Not goals. Not features. Feelings.

Good design pillars sound like:
- "Every action should feel satisfying even if the player fails."
- "The world should feel alive even when the player isn't interacting."

Bad design pillars sound like:
- "The game should be fun and engaging."

The test for a good pillar: can you use it to say no to a feature idea? If not, it's too vague to be useful.

## Open Questions as First-Class Citizens

The most valuable section in a GDD is often the one nobody reads: Open Questions and Risks. Unresolved design decisions, known technical risks, things that sound good in theory but haven't been playtested.

Keeping this section current and honest is what separates a living document from a document that gets ignored after week two.

---

I'm building a GDD template for kids' mobile games based on these principles. More on that soon.
