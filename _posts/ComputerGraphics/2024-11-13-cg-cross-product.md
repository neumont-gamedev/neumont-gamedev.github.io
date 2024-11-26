---
title: Computer Graphics - Cross Product
date: 2024-11-18 12:45:00 +/-TTTT
categories: [Computer Graphics]
tags: [computergraphics,gamedev]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/computergraphics
---
_The cross product is a mathematical operation between two 3D vectors that produces a new vector perpendicular to both, with a magnitude proportional to the area of the parallelogram spanned by the original vectors. In computer graphics, the cross product is essential for tasks like calculating surface normals, determining the orientation of objects, and performing lighting calculations. By defining perpendicular directions, it helps establish coordinate systems, compute reflections, and create realistic shading effects, making it a foundational tool for rendering 3D environments accurately._

The cross product of two vectors **A** and **B** in 3D space results in a new vector **C** that is perpendicular to both **A** and **B**. The formula for the cross product is:

$\mathbf{C} = \mathbf{A} \times \mathbf{B}$

If $\mathbf{A} = (A_x, A_y, A_z)$ and $\mathbf{B} = (B_x, B_y, B_z)$, the components of $\mathbf{C}$ are calculated as:

$C_x = A_y B_z - A_z B_y$

$C_y = A_z B_x - A_x B_z$

$C_z = A_x B_y - A_y B_x$

Thus, the resulting vector is:

$\mathbf{C} = (C_x, C_y, C_z)$

### Cross Product Demonstration ###
<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/cg-cross-product.html" width="100%" height="700px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>

