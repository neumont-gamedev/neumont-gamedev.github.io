---
title: Trigonometry
date: 2025-05-02 12:00:00 +/-TTTT
categories: [GameDev,ComputerGraphics,Math]
tags: [gamedev,computergraphics,math]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/math
---
_Trigonometry is a branch of mathematics that deals with the relationships between the angles and sides of triangles. It is especially focused on right triangles and is foundational in fields such as geometry, physics, engineering, game development, and computer graphics._

## Sine Cosine Tangent
_**Sine**, **cosine**, and **tangent** are fundamental trigonometric functions that relate the angles of a right triangle to the lengths of its sides. In the unit circle, **sine** gives the y-coordinate, **cosine** gives the x-coordinate, and tangent (defined as `sin(θ)/cos(θ)`) represents the slope or steepness of the angle. These functions are essential for calculating angles, directions, and circular motion in game development._

The three most commonly used trigonometric functions are:

| Function     | Name    | Description                                                           |
|--------------|---------|------------------------------------------------------------------------|
| `sin(θ)`     | Sine    | Ratio of the **opposite** side to the **hypotenuse** — or **opposite / hypotenuse** |
| `cos(θ)`     | Cosine  | Ratio of the **adjacent** side to the **hypotenuse** — or **adjecent / hypotenuse**                   |
| `tan(θ)`     | Tangent | Ratio of **sine to cosine** — or **opposite / adjacent**              |

These functions relate angles to ratios of side lengths in right triangles.

## Unit Circle

_The unit circle is a circle centered at the origin with a radius of 1. It’s used in trigonometry to define the **sine** and **cosine** of an angle, where any point on the circle at angle θ has coordinates (`cos(θ)`, `sin(θ)`)._

For any angle θ (measured in radians) from the positive x-axis:

- **Sine** (`sin θ`) is the y-coordinate of the point on the unit circle.
- **Cosine** (`cos θ`) is the x-coordinate.

<!-- Example: Display the applet at 70% of its original size -->
<iframe src="{{ site.baseurl }}/assets/pages/trig-circle.html?scale=0.4" width="900" height="675" style="border:none;"></iframe>

### Key Concepts

- The <span style="color:red"><strong>hypotenuse</strong></span> is always 1 in a unit circle.
- The <span style="color:blue"><strong>x-coordinate</strong></span> of the point on the circle equals <strong>cos(θ)</strong>.
- The <span style="color:green"><strong>y-coordinate</strong></span> of the point on the circle equals <strong>sin(θ)</strong>.

## Degrees and Radians

Angles can be measured in **degrees** or **radians**, and both are used frequently in trigonometry and game development.

- A **degree** divides a full circle into 360 equal parts.
- A **radian** is based on the arc length of a circle. There are **$2\pi$ radians** in a full circle, which is equal to **360°**.

So:
- $180^\circ = \pi$ radians
- $360^\circ = 2\pi$ radians

#### Conversion Formulas
To convert between degrees and radians:

- **Degrees to Radians**:  
  $ \text{radians} = \text{degrees} \times \frac{\pi}{180} $

- **Radians to Degrees**:  
  $ \text{degrees} = \text{radians} \times \frac{180}{\pi} $

Radians are especially important in programming and math libraries, where many functions like `sin()`, `cos()`, and `tan()` expect angles in radians.

## Vector

### Vector Length and Normalization

In game development, **vectors** are everywhere—they describe movement, direction, force, and more. A **vector** has both a **direction** and a **magnitude** (length). To find the length of a 2D vector $\vec{v} = (x, y)$, we use the **Pythagorean Theorem**:

$$
\text{length} = \|\vec{v}\| = \sqrt{x^2 + y^2}
$$

This is because a vector forms a right triangle with the x and y axes, where the vector itself is the hypotenuse.

Sometimes we want just the **direction** of a vector, not its magnitude. That’s where **normalization** comes in. To **normalize** a vector means to scale it to have a length of 1 while keeping its direction:

$$
\hat{v} = \frac{\vec{v}}{\|\vec{v}\|} = \left( \frac{x}{\|\vec{v}\|}, \frac{y}{\|\vec{v}\|} \right)
$$

This unit vector is useful in controlling speed, aiming, and physics-based movement without letting the magnitude of the vector interfere.

<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/pythagorean-vector.html" width="100%" height="1150px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>

### Trigonometric Functions Reference Table

| Function     | Name           | Description                                                                 |
|--------------|----------------|--------------------------------------------------------------------------------------|
| `sin(θ)`     | Sine           | Opposite / Hypotenuse — y-coordinate on the unit circle                             |
| `cos(θ)`     | Cosine         | Adjacent / Hypotenuse — x-coordinate on the unit circle                             |
| `tan(θ)`     | Tangent        | sin(θ) / cos(θ) — Opposite / Adjacent                                               |
| `asin(x)`    | Arcsine        | Inverse of sine — returns the angle whose sine is x                                 |
| `acos(x)`    | Arccosine      | Inverse of cosine — returns the angle whose cosine is x                             |
| `atan(x)`    | Arctangent     | Inverse of tangent — returns the angle whose tangent is x                           |
| `sec(θ)`     | Secant         | 1 / cos(θ) — Reciprocal of cosine                                                   |
| `csc(θ)`     | Cosecant       | 1 / sin(θ) — Reciprocal of sine                                                     |
| `cot(θ)`     | Cotangent      | cos(θ) / sin(θ) — Adjacent / Opposite                                               |
