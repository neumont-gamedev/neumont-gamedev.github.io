---
title: Computer Graphics - Dot Product Lighting
date: 2024-11-18 12:45:00 +/-TTTT
categories: [Computer Graphics]
tags: [computergraphics,gamedev]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/computergraphics
---
_In computer graphics, the dot product is used to calculate lighting by measuring the angle between the surface normal and the light direction. It determines how much light hits the surface: values close to 1 (light hitting directly) result in bright lighting, while values near 0 (light at a 90° angle) produce no light. Negative values, when the light is behind the surface, are clamped to 0. This simple calculation is essential for realistic shading in models like **Phong** and **Blinn-Phong**._

### Dot Product Lighting Demonstration ###
<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/cg-dot-product-light.html" width="100%" height="700px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>

### Mathematical Explanation:

1. **Vectors**:
   - **Normal (N)**: Unit vector perpendicular to surface $(0, -1)$
   - **Light (L)**: Normalized vector pointing to light source

2. **Dot Product Formula**:
   - $N \cdot L = \|N\| \|L\| \cos(\theta)$
   - Since both vectors are normalized (length = 1):
     - $N \cdot L = \cos(\theta)$

3. **Lighting Calculation**:
   - $\text{Intensity} = \max(N \cdot L, 0)$
   - We clamp to $0$ to prevent negative lighting.
   - At $0^\circ$ angle: $\cos(0^\circ) = 1.0$ (maximum brightness)
   - At $90^\circ$ angle: $\cos(90^\circ) = 0.0$ (no light)
   - At $180^\circ$ angle: $\cos(180^\circ) = -1.0$ (clamped to $0$)