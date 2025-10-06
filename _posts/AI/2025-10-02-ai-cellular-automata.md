---
title: AI - Cellular Automata
date: 2025-10-02 12:45:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---

## Automaton

An **automaton** is a machine or abstract model designed to follow a predetermined sequence of operations automatically, without continuous human input. The term itself comes from the Greek word *automatos*, meaning "self-acting," which perfectly captures the essence of these self-operating systems. When referring to a single one of these models, the word is **automaton**, while the plural form used when discussing more than one is **automata**. 

## Cellular Automata

A **cellular automaton** (CA) is a model of a system that consists of a grid of cells, where each cell can be in one of a finite number of states. The grid can be one-dimensional, two-dimensional (like a checkerboard), or even higher-dimensional. The key idea is that the state of each cell changes over time based on a set of simple, predetermined rules. These rules depend only on the state of the cell itself and the states of its neighboring cells.

Even though the rules for each cell are simple, the collective behavior of all the cells can lead to incredibly complex and fascinating patterns. This is a great example of **emergent behavior**, where a complex system arises from simple interactions.

The main components of any cellular automaton are:
* **The Grid**: The space where the cells live.
* **Cell States**: The possible conditions a cell can be in (e.g., on/off, black/white, alive/dead).
* **The Neighborhood**: The set of adjacent cells that influence a given cell's next state.
* **The Rules**: The logic that determines a cell's next state based on its current state and the states of its neighbors.

---

## Conway's Game of Life

The most famous example of a two-dimensional cellular automaton is **Conway's Game of Life**, created by the British mathematician John Horton Conway in 1970. It's not a "game" in the traditional sense—it's a zero-player game, meaning its evolution is determined entirely by its initial state. Once you set it up, you just watch it unfold.

In the Game of Life, each cell on the grid has two possible states: **alive** or **dead**. The "neighborhood" of a cell consists of the eight cells directly surrounding it (horizontally, vertically, and diagonally).

### The Rules of Life

The evolution from one generation to the next is governed by four simple rules:

1.  **Underpopulation**: Any live cell with fewer than two live neighbors dies.
2.  **Survival**: Any live cell with two or three live neighbors lives on to the next generation.
3.  **Overpopulation**: Any live cell with more than three live neighbors dies.
4.  **Reproduction**: Any dead cell with exactly three live neighbors becomes a live cell.

### Emergent Patterns

From these basic rules, an amazing variety of patterns can emerge. These patterns are generally classified into a few main types:

* **Still Lifes**: These are stable patterns that do not change from one generation to the next unless they are disturbed. A common example is the "block."
* **Oscillators**: These patterns repeat themselves over a fixed number of generations. The "blinker" (which flips back and forth over two generations) and the "toad" are simple oscillators.
* **Spaceships**: These are patterns that move across the grid over time. The most famous spaceship is the "glider," a five-cell pattern that travels diagonally.

### Cellular Automata Demostration ###

<div style="width:100%; overflow:hidden;">
  <iframe src="{{ site.baseurl }}/assets/pages/ai-cellular-automata.html"
          style="width:180%; height:1050px; border:none; transform:scale(0.55); transform-origin:0 0;">
  </iframe>
</div>



