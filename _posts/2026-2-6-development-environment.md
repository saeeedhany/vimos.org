---
layout: post
title: "Development Environment"
date: 2026-02-06
---

# Development Environment Overview

In this post, I will explain the development environment used for building this operating system, including the required tools, technologies, and the reasons behind choosing each of them.

The goal is to make it easy for anyone who wants to follow the same path or contribute to the project to set up everything properly.

## Operating System

I use a Linux-based system as the main development environment.

Linux provides powerful tools, better low-level control, and a natural workflow for system programming and kernel development. It also integrates well with compilers, debuggers, and emulators required for OS development.

## Toolchain

To build and compile the operating system, the following tools are required:

### GCC Cross Compiler

A cross-compiler is used to compile code specifically for the target architecture (x86) without relying on the host system libraries.

This ensures full control over the binary output and avoids unexpected dependencies.

### NASM (Assembler)

NASM is used to write low-level assembly code, especially for:

- Bootloader development
- CPU initialization
- Switching between real mode and protected mode

Assembly is essential for interacting directly with hardware at early boot stages.

### GNU Make

Make is used to automate the build process.

It helps organize compilation steps, manage dependencies, and rebuild only the necessary parts when changes are made.

## Emulator & Debugging

### QEMU

QEMU is used to emulate the hardware environment and run the operating system safely without needing real hardware.

It allows fast testing, debugging, and inspection of low-level behavior.

### GDB

GDB is used for low-level debugging to:

- Inspect memory and registers
- Trace execution flow
- Debug crashes and kernel panics

This is critical when working with bare-metal code.

## Programming Languages

The main stack used in this project includes:

- **Assembly (x86)** – for bootloader and early hardware control
- **C** – for kernel core logic and system components

Assembly provides precise control, while C offers better structure and maintainability.

## Project Structure

The project is organized in a modular way to keep things clean and scalable:

- Bootloader code
- Kernel core
- Drivers
- Memory management
- Build scripts

This structure makes it easier to expand the system over time without major refactoring.

## Why This Setup?

This environment was chosen to:

- Follow standard OS development practices
- Maintain full control over the system
- Learn low-level concepts deeply
- Avoid abstractions that hide important details

Every tool and technology plays a role in understanding how operating systems truly work under the hood.

## Getting Started

To start developing or experimenting with this project, you should have:

- A Linux system
- GCC cross compiler for x86
- NASM
- Make
- QEMU
- GDB

Once these are installed, you can clone the repository and follow the build instructions provided in the main README.
