---
layout: post
title: "The Birth of vimOS"
date: 2026-02-12
---

## Why I Left botatOS Behind

botatOS started as a broad hobby operating system: learn bootstrapping, understand kernels, and document progress. That phase was useful, but it stayed too generic. I was implementing known patterns without a clear interaction thesis.

I did not want to keep adding components just to mirror conventional systems. I wanted a core idea strong enough to shape every subsystem.

## From Hobby Build to Research Direction

vimOS is the result of that shift. The project is no longer "an OS from scratch" in the usual sense. It is now a research-oriented experiment in interaction design: can we build an operating system where modal semantics are the foundation rather than an application-level convenience?

This means the architecture is guided by interaction theory first, then implementation.

## Modal Interaction as the System Primitive

Vim proved that modal workflows can reduce friction when commands are composable and intention is explicit. vimOS applies that model to operating system behavior.

Instead of centering interaction around event callbacks and ad-hoc shells, the system is organized around explicit modes, semantic objects, and composable commands.

## Composable Commands Over System Objects

The central goal is to redefine system interaction through composable operations. Commands should be small, deterministic units that can be chained safely and inspected clearly.

In practice, this requires:

- Explicit command grammar
- Stable object addressing
- Deterministic execution rules
- Minimal hidden state transitions

## Long-Term Vision

The long-term target is a fully usable modal-native operating system: daily interaction performed through modal semantics, with consistent behavior from low-level control to user workflows.

## Short-Term Goal

The current short-term milestone is a minimal theoretical implementation on RISC-V. The objective is to validate semantics and control flow, not to ship features quickly.

## Closing

vimOS is not just a renamed hobby OS. It is a deliberate change in direction toward a focused research program: exploring how operating systems can be designed around intention, composition, and modal control from first principles.
