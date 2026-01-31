---
layout: post
title: "Getting Started with the Bootloader"
date: 2025-01-30
---

This is an example post showing how to document OS development progress.

## The Challenge

Writing a bootloader requires understanding BIOS interrupts and real mode assembly. The bootloader needs to:

- Load into memory at address 0x7C00
- Switch from 16-bit real mode to 32-bit protected mode
- Load the kernel from disk
- Transfer control to the kernel

## Implementation Notes

The bootloader is written in x86 assembly and must fit within 512 bytes (boot sector size).

```asm
; Example bootloader snippet
mov ax, 0x07C0
mov ds, ax
mov si, msg
call print_string
```

## Next Steps

- Implement protected mode switching
- Set up the Global Descriptor Table (GDT)
- Load kernel binary from disk
