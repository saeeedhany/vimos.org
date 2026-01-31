---
layout: post
title: "Setting Up the Development Environment"
date: 2025-10-18
---

Before diving into OS development, you need a proper development environment.

## Required Tools

The essential toolkit includes:

- **Cross-compiler**: GCC configured for your target architecture
- **Assembler**: NASM or GAS for assembly code
- **Emulator**: QEMU for testing without real hardware
- **Debugger**: GDB for debugging the kernel

## Build System

Using Make to automate the build process. The Makefile handles:

- Compiling C and assembly sources
- Linking the kernel binary
- Creating bootable images
- Running in QEMU for testing

```makefile
# Basic Makefile structure
CC = i686-elf-gcc
AS = nasm
LD = i686-elf-ld

kernel.bin: boot.o kernel.o
	$(LD) -o $@ -Ttext 0x1000 $^
```

## Testing Workflow

1. Write code
2. Compile with `make`
3. Run in QEMU with `make run`
4. Debug with `make debug`

This setup allows rapid iteration without risking real hardware.
