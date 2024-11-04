---
title: Math - Barycentric
date: 2024-11-03 12:45:00 +/-TTTT
categories: [GameDev,ComputerGraphics,Math]
tags: [gamedev,c++,computergraphics,math]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/gamedev/cg/math
---
_Barycentric coordinates are a coordinate system used to express the position of a point within a triangle relative to its vertices. In computer graphics, they are particularly useful for tasks like interpolation, as they allow values (such as color, texture coordinates, or depth) to be smoothly distributed across a triangle's surface. By representing a point as a weighted combination of a triangle's vertices, barycentric coordinates enable efficient calculations of attributes at any point inside the triangle. This method is widely used in rasterization for shading and texture mapping, as it ensures that interpolated values appear smooth and realistic across 3D surfaces._

<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/moller-trumbore-demo.html" width="100%" height="500px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>

# Calculating Barycentric Coordinates

Barycentric coordinates are useful for expressing a point's position inside a triangle relative to its vertices. Here’s how to calculate them step by step.

## Step 1: Define the Triangle and the Point
Let’s start with a triangle defined by its vertices `v0`, `v1`, and `v2`, and a point `P` for which we want to find the barycentric coordinates `(u, v, w)`.

- **Vertices**: `v0(x0, y0)`, `v1(x1, y1)`, `v2(x2, y2)`
- **Point**: `P(px, py)`

## Step 2: Calculate Edge Vectors

Calculate the vectors representing the edges of the triangle:

- **Edge from** `v0` **to** `v1`:

  `v0v1 = v1 - v0`
  
- **Edge from** `v0` **to** `v2`:
  
  `v0v2 = v2 - v0`
  
- **Vector from** `v0` **to** `P`:
  
  `v0p = P - v0`
  

## Step 3: Compute Dot Products

Using these vectors, calculate the following dot products:

- **d00**: Dot product of `v0v1` with itself  
  `d00 = v0v1 · v0v1`

- **d01**: Dot product of `v0v1` with `v0v2`  
  `d01 = v0v1 · v0v2`

- **d11**: Dot product of `v0v2` with itself  
  `d11 = v0v2 · v0v2`

- **d20**: Dot product of `v0p` with `v0v1`  
  `d20 = v0p · v0v1`

- **d21**: Dot product of `v0p` with `v0v2`  
  `d21 = v0p · v0v2`

## Step 4: Calculate the Barycentric Coordinates

With the dot products, calculate the determinant to find the weights for each vertex. The determinant represents the "area" scaling factor of the triangle in 2D space (or volume in higher dimensions). This value is important because it allows us to normalize the calculations so that we can express the relative weights (barycentric coordinates) of a point inside the triangle.

1. **Determinant**  
   `denom = (d00 * d11) - (d01 * d01)`

2. **Coordinates**:
   - **v**:  
     `v = ((d11 * d20) - (d01 * d21)) / denom`

   - **w**:  
     `w = ((d00 * d21) - (d01 * d20)) / denom`

   - **u**: Since `u + v + w = 1`, calculate `u` as  
     `u = 1 - v - w`


## Step 5: Interpret the Coordinates
The resulting `(u, v, w)` values represent the barycentric coordinates of point `P` relative to the vertices:
- If all coordinates are between `0` and `1`, point `P` lies inside the triangle.
- The values `u`, `v`, and `w` correspond to the weights of each vertex (`v0`, `v1`, `v2`) in determining the position of `P`.

This method provides an efficient way to calculate barycentric coordinates, which are useful in computer graphics for interpolation and shading.
