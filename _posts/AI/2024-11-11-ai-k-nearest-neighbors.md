---
title: AI - k-Nearest Neighbors (k-NN)
date: 2024-11-11 14:00:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---

The **k-Nearest Neighbors (k-NN) classifier** is a simple and widely used supervised machine learning algorithm for classification. It classifies a data point based on how its neighbors are classified, making it an intuitive choice for many applications.

### k-NN Demonstration ### 
This interactive visualization demonstrates KNN classification with:

+ Two classes (A and B) represented by purple and green points
  
User controls:

+ Left-click to add training points (choose class A or B with buttons)
+ Right-click anywhere to see how that point would be classified
+ Slider to adjust K (number of neighbors to consider)
+ Clear buttons to reset predictions or all points

When you right-click to predict, the visualization:

+ Finds the K nearest neighbors
+ Shows connecting lines to those neighbors
Colors the prediction point based on the majority class among its neighbors

This allows you to:

+ See how K value affects decision boundaries
+ Understand how the algorithm makes predictions based on nearby points
+ Experiment with different data distributions and patterns
+ Visualize the "voting" process of nearest neighbors

<div style="text-align: center; max-width: 100%; margin: 0 auto;">
    <iframe 
        src="{{ site.baseurl }}/assets/pages/ai-knn.html" 
        style="width: 100%; max-width: 1100px; height: 720px; border: none; overflow: hidden;"
        scrolling="no"
        title="k-Nearest Neighbors Interactive Graph">
        Your browser does not support iframes.
    </iframe>
</div>

### k-NN Algorithm

##### Choose the Number of Neighbors ($k$):

Decide on the number of nearest neighbors $k$ to consider. This is usually an odd number to avoid ties in classification.

##### Compute Distances:

For a new data point that needs classification, calculate the distance between this point and all points in the training data.  
Common distance metrics include **Euclidean distance** for numerical features, though other metrics like **Manhattan distance** can also be used.

##### Identify the $k$ Nearest Neighbors:

Sort the distances and select the $k$ data points with the smallest distances to the new point. These are the nearest neighbors.

##### Classify the New Data Point (for Classification):

For classification, take a **majority vote** among the $k$ neighbors. The new data point is assigned the class that appears most frequently among its neighbors.

For regression, calculate the **average** of the target values of the $k$ nearest neighbors to predict the value for the new point.

##### Output the Result:

The algorithm assigns the predicted class (or value) to the new data point based on the neighbors' majority class (or average value).
