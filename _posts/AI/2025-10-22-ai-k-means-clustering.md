---
title: AI - k-Means Clustering
date: 2025-10-22 12:30:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---
_**K-Means Clustering** is an unsupervised machine learning algorithm used to group data into *K distinct clusters* based on feature similarity. It’s one of the most popular clustering techniques because it’s conceptually simple and computationally efficient._

_The algorithm aims to minimize the **intra-cluster variance** (distance between data points and their cluster’s centroid) while maximizing the **inter-cluster variance** (distance between different cluster centroids)._

---

### How It Works
1. **Choose the number of clusters ($K$).**
2. **Initialize $K$ centroids** randomly within the data space.
3. **Assign each data point** to the nearest centroid.
4. **Recalculate centroids** as the mean of all points assigned to each cluster.
5. **Repeat steps 3–4** until the centroids no longer change significantly (convergence).

This iterative process is often called the **Expectation–Maximization** approach:
- **Expectation step:** Assign points to the nearest centroid.
- **Maximization step:** Recalculate the centroid positions.

---

### Mathematical Objective
K-Means minimizes the following **objective function**:

$$
J = \sum_{i=1}^{K} \sum_{x_j \in C_i} ||x_j - \mu_i||^2
$$

Where:
- $K$ = number of clusters  
- $C_i$ = set of points in cluster $i$  
- $\mu_i$ = mean (centroid) of cluster $i$

---

### Choosing the Right K
A common way to find an appropriate number of clusters is the **Elbow Method**:
- Run K-Means with different values of $K$.
- Plot the total within-cluster sum of squares (WCSS) vs. $K$.
- The "elbow" point (where improvement slows) suggests a good choice of $K$.

### K-Means Clustering Demostration ###

<div style="width:100%; overflow:hidden;">
  <iframe src="{{ site.baseurl }}/assets/pages/ai-kmeans-clustering.html"
          style="width:130%; height:1250px; border:none; transform:scale(0.55); transform-origin:0 0;">
  </iframe>
</div>