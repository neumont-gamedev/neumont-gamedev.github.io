---
title: Computer Graphics - Ray Tracing
date: 2024-11-03 12:45:00 +/-TTTT
categories: [Computer Graphics]
tags: [computergraphics,gamedev]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/computergraphics
---
_Ray tracing is a rendering technique that simulates how light interacts with objects to create realistic images. By tracing the path of light rays from a virtual camera, it calculates reflections, refractions, shadows, and lighting effects for each pixel. This method produces highly realistic visuals, though it requires significant computational power, especially for complex scenes._

<div align="center">
<img src="ray-tracing.jpg" alt="Raytracing" width="40%"/>
</div>

### Ray Tracing Steps ###

- **Ray Generation**: For each pixel, generate multiple rays (samples) that start from the camera and travel into the scene in slightly random directions.

- **Intersection Testing**: For each ray, determine where it intersects with objects in the scene and find the closest intersection point.

- **Shading and Light Sampling**: Calculate how light interacts at the intersection point, considering factors like material properties, textures, and color. Randomly sample directions to simulate light scattering (diffuse, reflective, or refractive).

- **Reflection, Refraction, and Diffuse Bounces**: For each intersection, generate additional rays (bounces) in random directions based on the material's properties (e.g., reflective surfaces reflect, while diffuse surfaces scatter). Each bounce contributes to the overall light accumulation for the pixel.

- **Global Illumination and Indirect Light**: Continue bouncing rays until a certain depth or termination probability is reached. This process captures indirect lighting (light bouncing from one object to another), adding realism to the image.

- **Accumulating Samples and Averaging**: Repeat the above steps for many samples per pixel. The results are accumulated and averaged to produce the final color, smoothing out noise and producing realistic lighting effects.

- **Rendering the Image**: After processing all pixels with multiple samples, combine the averaged values to create a smooth and realistic final image. More samples improve image quality but increase rendering time.

### Ray Tracing Demostration ###

<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/ray-tracer.html" width="110%" height="1000px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>
