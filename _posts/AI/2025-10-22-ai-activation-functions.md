---
title: AI - Activation Functions
date: 2025-11-04 12:30:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---

_**Activation functions** are one of the most critical components of neural networks. They are mathematical functions applied to the output of each neuron that determine whether and to what extent that neuron should be activated. Without activation functions, neural networks would be limited to learning only linear relationships, making them no more powerful than simple linear regression models._

## The Non-Linearity Problem

### Why Neural Networks Need Non-Linearity

At its core, a single neuron performs a simple linear operation: it takes inputs, multiplies them by weights, adds a bias term, and produces an output. Mathematically, this looks like:
```
z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b
```

This is just a linear equation! If we stack multiple layers of neurons that only perform linear operations, something interesting (but problematic) happens: **no matter how many layers we add, the entire network can still be reduced to a single linear equation**.

### A Simple Example

Consider a two-layer network without activation functions:
- **Layer 1**: `z₁ = w₁x + b₁`
- **Layer 2**: `z₂ = w₂z₁ + b₂`

Substituting Layer 1 into Layer 2:
```
z₂ = w₂(w₁x + b₁) + b₂
z₂ = (w₂w₁)x + (w₂b₁ + b₂)
z₂ = Wx + B  (where W = w₂w₁ and B = w₂b₁ + b₂)
```

We end up with another linear equation! Adding more layers doesn't help—we can always collapse them into a single linear transformation.

## How Activation Functions Introduce Non-Linearity

Activation functions break this linear chain by introducing **non-linear transformations** between layers. Instead of:
```
Output = W₂(W₁x + b₁) + b₂  (reducible to linear)
```

We have:
```
Output = W₂·f(W₁x + b₁) + b₂  (NOT reducible, where f is the activation function)
```

The activation function `f()` applies a non-linear transformation that cannot be simplified away. This means:
- Each layer can learn different features and patterns
- The network can model complex, curved decision boundaries
- Deep networks gain expressive power from their depth

## What Non-Linearity Enables

With non-linear activation functions, neural networks can:

1. **Learn Complex Patterns**: Model relationships like curves, spirals, and multi-dimensional shapes that linear models cannot capture
2. **Create Decision Boundaries**: Separate data that isn't linearly separable (like XOR problems)
3. **Compose Features**: Early layers learn simple features (edges, colors), deeper layers combine these into complex concepts (faces, objects)
4. **Approximate Any Function**: The Universal Approximation Theorem states that neural networks with non-linear activations can approximate any continuous function

## Common Activation Functions

Different activation functions have different properties and are suited for different tasks:

### **Sigmoid & Tanh**
- Output bounded ranges (0-1 for sigmoid, -1 to 1 for tanh)
- Smooth, continuous curves
- Can suffer from vanishing gradients in deep networks

### **ReLU Family (ReLU, Leaky ReLU, ELU)**
- Simple, computationally efficient
- Helps with gradient flow in deep networks
- ReLU is the most widely used activation function today

### **Modern Variants (Swish, Softplus)**
- Smooth alternatives to ReLU
- Often provide better performance in very deep networks
- Self-gating properties (like Swish)

## Interactive Exploration

Use the visualizations below to explore how each activation function transforms input values. Notice how each function introduces a different type of non-linearity:
- Some create smooth curves (Sigmoid, Tanh)
- Some have sharp transitions (ReLU, Step)
- Some are always differentiable (Softplus, Swish)
- Some allow negative outputs (Tanh, Leaky ReLU)

Experiment with different input values and observe how the output changes. Understanding these transformations is key to selecting the right activation function for your neural network architecture.

### Activation Functions Demonstration ###

<div style="width:100%; overflow:hidden;">
  <iframe src="{{ site.baseurl }}/assets/pages/ai-activation-functions.html"
          style="width:100%; height:1250px; border:none; transform:scale(1.0); transform-origin:0 0;">
  </iframe>
</div>