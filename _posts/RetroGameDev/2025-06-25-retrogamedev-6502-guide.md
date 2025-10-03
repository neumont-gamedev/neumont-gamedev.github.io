---
title: 6502 Assembly Guide
date: 2025-06-25 12:00:00 +/-TTTT
categories: [GameDev,Retro]
tags: [gamedev,retro]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/retro/6502
---
# 6502 Assembly Programming Guide

This guide covers the fundamentals of programming the **6502 CPU**, commonly found in the NES, Commodore 64, Apple II, and other retro hardware. It includes information on registers, flags, memory addressing, arithmetic, comparisons, branching, subroutines, labels, and more.

---

## Registers

| Register | Description                          |
|----------|---------------------------------------|
| **A**    | Accumulator — for arithmetic, logic, and data transfer. |
| **X**    | Index register — for loops, offsets, and memory indexing. |
| **Y**    | Index register — similar to X, with some different addressing modes. |
| **SP**   | Stack Pointer — points to stack in page `$0100`. |
| **PC**   | Program Counter — current instruction location. |
| **P**    | Processor Status — 8-bit flag register (see below). |

---

## Status Flags (Processor Status Register)

| Flag | Bit | Name       | Meaning                         |
|------|-----|------------|---------------------------------|
| N    | 7   | Negative   | Set if bit 7 of the result is 1 (signed negative). |
| V    | 6   | Overflow   | Set if signed overflow occurs. |
| —    | 5   | (Unused)   | Always set to 1.               |
| B    | 4   | Break      | Set when BRK instruction runs. |
| D    | 3   | Decimal    | Not used on NES. (Decimal mode.) |
| I    | 2   | Interrupt  | Disable (1) or enable (0) IRQ. |
| Z    | 1   | Zero       | Set if result is zero.         |
| C    | 0   | Carry      | Set if carry/borrow occurs in math. |

<div align="left">
<img src="6502layout.png" alt="Layout" width="100%"/>
</div>

---

## Memory Addressing Modes

| Mode           | Example        | Description                                |
|----------------|----------------|--------------------------------------------|
| Immediate      | `LDA #$10`     | Load constant value `$10`.                |
| Zero Page      | `LDA $00`      | Access memory in page 0 (`$0000-$00FF`).  |
| Zero Page,X    | `LDA $00,X`    | Zero page plus X offset.                  |
| Absolute       | `LDA $1234`    | Load from full 16-bit address.            |
| Absolute,X     | `LDA $1234,X`  | Address + X offset.                      |
| Absolute,Y     | `LDA $1234,Y`  | Address + Y offset.                      |
| Indirect       | `JMP ($1234)`  | Jump to address stored at $1234/$1235.   |
| Indexed Indirect (X) | `LDA ($20,X)` | Pointer = $20 + X, then fetch.         |
| Indirect Indexed (Y) | `LDA ($20),Y` | Fetch pointer from $20, then add Y.     |
| Relative       | `BEQ Label`    | Branch relative to PC (for conditionals). |

---

## Arithmetic and Logic

### **Load and Store**
```asm
LDA #$10     ; Load 16 into A
LDX #$00     ; Load 0 into X
LDY $00      ; Load value from memory $00 into Y
STA $0200    ; Store A into memory address $0200
```

### **Math**
```asm
LDA #$05     ; A = 5
ADC #$03     ; A = A + 3 + Carry (use CLC beforehand if needed)

SEC          ; Set carry for subtraction
LDA #$08     ; A = 8
SBC #$02     ; A = A - 2 - (1 - Carry) = 6
```

### **Increment/Decrement**
```asm
INX          ; X = X + 1
INY          ; Y = Y + 1
DEX          ; X = X - 1
DEY          ; Y = Y - 1
```

### **Bitwise Logic**
```asm
LDA #%10101010 ; A = 170
AND #%11001100 ; A = A AND 204 → Result is #%10001000

ORA #%00001111 ; A = A OR 15

EOR #%11111111 ; A = A XOR 255 (bit flip)
```

---

## Comparisons and Branching

### **Compare Registers**
```asm
LDA #$05
CMP #$05     ; Compare A with 5 → Sets Z flag if equal

LDX #$03
CPX #$04     ; Compare X with 4

LDY #$08
CPY #$07     ; Compare Y with 7
```

### **Branch Instructions**

| Instruction | Description     |
|--------------|-----------------|
| **BEQ**      | Branch if Equal (Z=1) |
| **BNE**      | Branch if Not Equal (Z=0) |
| **BCS**      | Branch if Carry Set (C=1) |
| **BCC**      | Branch if Carry Clear (C=0) |
| **BMI**      | Branch if Minus (N=1) |
| **BPL**      | Branch if Positive (N=0) |
| **BVS**      | Branch if Overflow Set (V=1) |
| **BVC**      | Branch if Overflow Clear (V=0) |

### **Example Loop:**
```asm
LDX #$05      ; X = 5

Loop:
    DEX        ; X = X - 1
    BNE Loop   ; If X ≠ 0, loop back
```

---

## Subroutines and Labels

### **Define Labels:**
```asm
Start:
    LDA #$01
    STA $0200
    JMP Start  ; Infinite loop
```

### **Subroutines:**
```asm
JSR MySub     ; Jump to subroutine

; ...do other stuff...

MySub:
    LDA #$FF
    STA $00
    RTS        ; Return from subroutine
```

---

## Stack Operations

| Instruction | Description                  |
|--------------|------------------------------|
| **PHA**      | Push A onto stack            |
| **PLA**      | Pull A from stack            |
| **PHP**      | Push Processor Status        |
| **PLP**      | Pull Processor Status        |
| **JSR**      | Jump to subroutine (Push return address) |
| **RTS**      | Return from subroutine       |
| **BRK**      | Force interrupt (Push PC+2 and status) |
| **RTI**      | Return from interrupt        |

### **Example: Save and Restore Registers**
```asm
    PHA         ; Save A
    TXA
    PHA         ; Save X
    TYA
    PHA         ; Save Y

    ; Subroutine logic here

    PLA         ; Restore Y
    TAY
    PLA         ; Restore X
    TAX
    PLA         ; Restore A
    RTS
```

---

## Miscellaneous Instructions

- **NOP** — No operation (does nothing; placeholder).
- **CLC / SEC** — Clear/Set Carry flag.
- **CLD / SED** — Clear/Set Decimal flag (not used on NES).
- **CLI / SEI** — Clear/Set Interrupt Disable.
- **CLV** — Clear Overflow flag.

---

## Example Program: Fill Memory with a Value

```asm
LDX #$00          ; Start index at 0
LDA #$FF          ; Value to write

Loop:
    STA $0200,X   ; Store value at $0200 + X
    INX           ; Increment index
    CPX #$10      ; Compare X to 16
    BNE Loop      ; If X ≠ 16, continue looping

BRK                ; End (break)
```
## Resources

<div align="left">
<img src="6502opcodes.png" alt="Layout" width="100%"/>
</div>

**6502 Instruction Set Guide (.pdf)**: [https://forums.atariage.com/applications/core/interface/file/attachment.php?id=888275](https://forums.atariage.com/applications/core/interface/file/attachment.php?id=888275)
