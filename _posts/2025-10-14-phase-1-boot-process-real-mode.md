---
layout: post
title: "Phase 1 — Boot Process & Real Mode Foundations"
date: 2025-10-14
---

## Context & Re-study

After re-studying the entire boot process and reading multiple references, I started to understand how the structure *should* actually work—not just theoretically, but practically.

This phase represents my first real step into the OS development journey. It may look small in terms of code, but conceptually, it required a lot of thinking and re-reading to truly understand what is happening under the hood.

## Phase One — What Really Happens Before the Kernel

When the user presses the power button, the process does **not** start with our code directly. Instead, a well-defined hardware-controlled sequence begins.

### CPU Reset & BIOS Execution

1. The **CPU** receives power and immediately jumps to a predefined address known as the **Reset Vector** `0xFFFF0`
2. This address resides in **ROM**, not RAM
3. From there, the CPU executes hardcoded instructions that transfer control to the **BIOS**
4. The BIOS starts the **POST (Power-On Self Test)** process:
   - Checks memory
   - Initializes hardware components
   - Verifies system integrity
5. After POST completes, the BIOS searches for a **bootable device**

## Boot Sector & Bootloader Loading

Once a bootable device is found:

- The BIOS reads the **first sector (512 bytes)** from that device
- This sector is loaded into memory at **`0x7C00`**
- The CPU then jumps to this address and starts executing the bootloader code

From this point on, **everything that happens depends entirely on the bootloader**.

## Real Mode Constraints

At this stage, the CPU is still running in **Real Mode**:

- 16-bit execution
- Direct BIOS interrupt access
- Limited memory addressing
- Interrupts rely on the **IVT (Interrupt Vector Table)**

This mode is perfect for early setup, but **not suitable for running a kernel**. To build a real operating system, we must eventually switch to **Protected Mode**.

```
[BIOS]
   ↓
Loads boot sector → 0x7C00 (Real Mode)
   ↓
[Bootloader]
   ↓
Print → Load kernel via int 0x13 (BIOS)
   ↓
Disable interrupts
   ↓
Setup GDT
   ↓
Enable Protected Mode (CR0)
   ↓
Far Jump to 32-bit mode
   ↓
[Kernel Entry Point]

```

*Simple graph for the whole process from the BIOS to the Kernel*

### Random Study Gems

![Study Board Diagram]({{ '/assets/images/board.webp' | relative_url }})

## Bootloader Mission

The mission of the bootloader is **not** to implement complex logic. Its responsibility is to **prepare the environment for the kernel**.

To make this clearer, instead of diving into abstract theory, it is more efficient to define the **bootloader structure**.

### Bootloader File Structure

```text
bootloader.asm
├── [1] Bootloader header (boot signature + origin)
├── [2] Setup stage (environment setup)
├── [3] Display / Debug messages (optional)
├── [4] Load kernel (using BIOS interrupts)
├── [5] Enable A20 line
├── [6] Setup GDT (for Protected Mode)
├── [7] Switch to Protected Mode
├── [8] Jump to Kernel
└── [9] Boot signature (0xAA55)
```

> **Note:**
> I will explain each part in detail *after* finishing the full bootloader implementation. The goal is to understand every step practically, not just theoretically.

## First Working Bootloader Code

At this point, I finally wrote a minimal bootloader that actually **does something**.

Yes—it's simple. But getting here required a lot of theoretical understanding.

```nasm
; bootloader.asm - Boot sector header + minimal init
[org 0x7C00]
bits 16

start:
    cli
    xor ax, ax
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7C00
    sti

    mov si, msg
.print_char:
    lodsb
    or al, al
    jz .done_print
    mov ah, 0x0E
    int 0x10
    jmp .print_char
.done_print:

hang:
    hlt
    jmp hang

msg db "Embryos boot", 0

times 510 - ($ - $$) db 0
dw 0xAA55
```

## Understanding the Code (High-Level)

### Comments

```nasm
; bootloader.asm - Boot sector header + minimal init
```

> **Note:**
> Anything starting with `;` is a comment. This line summarizes the purpose of the file: early boot initialization.

### Origin Address

```nasm
[org 0x7C00]
```

This tells the assembler that the code is expected to be loaded at memory address `0x7C00`, which matches the BIOS behavior.

### Real Mode Execution

```nasm
bits 16
```

This tells the assembler to generate 16-bit code, as the CPU starts in Real Mode during boot.

### Entry Label

```nasm
start:
```

Labels define jump targets. This label represents the logical entry point of the bootloader.

### Register & Stack Initialization

```nasm
cli
xor ax, ax
mov ds, ax
mov es, ax
mov ss, ax
mov sp, 0x7C00
sti
```

- `cli` disables interrupts temporarily
- Segment registers are cleared to avoid undefined behavior
- A temporary stack is initialized
- `sti` re-enables interrupts after setup

> **Important:**
> Interrupts are disabled here to ensure a clean environment while registers are being configured.

### Output Code

From:

```nasm
mov si, msg
```

To the printing loop, the code simply prints a string using BIOS interrupt `INT 0x10`.

This part is intentionally kept simple and is not deeply explained here.

### Building & Testing the Bootloader

**Step 1: Assemble the Bootloader**

```bash
nasm -f bin bootloader.asm -o boot.bin
```

**Step 2: Verify Boot Sector Size**

```bash
stat -c "%s bytes" boot.bin
```

The output must be exactly **512 bytes**.

**Step 3: Create a Bootable Image**

```bash
dd if=boot.bin of=os.img bs=512 count=1 conv=notrunc
```

**Step 4: Boot Using QEMU**

```bash
qemu-system-x86_64 -drive format=raw,file=os.img -display gtk
```

> I usually prefer SDL as well, but GTK works fine for now.

**Aaaaaand here it is:**

![First Bootloader Running]({{ '/assets/images/boot.webp' | relative_url }})
