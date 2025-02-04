---
title: Dijkstra's Shortest Path Algorithm
date: 2025-02-04 10:00:00 +/-TTTT
categories: [AI,GameDev]
tags: [ai,gamedev]     # TAG names should always be lowercase
toc: true
comments: true
img_path: /assets/img/ai
---
_Dijkstra’s Algorithm is a widely used graph-based algorithm for finding the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights. Developed by Edsger Dijkstra in 1956 and published in 1959, the algorithm is a cornerstone of computer science and is frequently used in network routing protocols, GPS navigation, and various optimization problems. The algorithm operates using a greedy approach, progressively selecting the shortest known path to a node and updating the shortest distances to its neighbors._

### Algorithm ###

**Dijkstra’s Algorithm** works by progressively finding the shortest path from a starting node to all other nodes in a weighted graph. It begins by initializing the starting node’s cost to 0 and all other nodes to infinity, ensuring that the shortest paths are updated dynamically. A priority queue is used to always process the node with the smallest known cost first. From this node, the algorithm examines its neighbors, updating their costs if a shorter path is found through the current node. Each time a neighbor’s cost is updated, it is reinserted into the priority queue for further processing. This process continues until all reachable nodes have been processed, ensuring that the shortest path from the start node to every other node is accurately determined.

```
function Dijkstra(startNode, endNode):
    // Initialize priority queue for nodes
    nodes = PriorityQueue()

    // Set the cost of the start node to 0
    startNode.Cost = 0
    nodes.Enqueue(startNode, priority = startNode.Cost)

    // Flag to check if the destination is found
    found = false

    while nodes is not empty and found is false:
        // Get the node with the lowest cost
        currentNode = nodes.Dequeue()

        // If we reached the destination, stop
        if currentNode == endNode:
            found = true
            break

        // Iterate through all neighboring nodes
        for each neighbor in currentNode.neighbors:
            // Calculate cost to reach the neighbor
            cost = currentNode.Cost + Distance(currentNode, neighbor)

            // If this path is shorter, update the neighbor's cost and previous
            if cost < neighbor.Cost:
                neighbor.Cost = cost
                neighbor.Previous = currentNode

                // Add the neighbor to the queue with updated cost
                nodes.Enqueue(neighbor, priority = neighbor.Cost)

    return // Shortest path can be reconstructed using the Previous references
```
### Interactive Demonstration ###

The application demonstrates how **Dijkstra's algorithm** finds the shortest path in a weighted graph.

<div style="position: relative; width: 100%; max-width: 800px; margin: 0 auto;">
    <div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden;">
        <iframe 
            src="{{ site.baseurl }}/assets/pages/ai-dijkstra.html" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            frameborder="0"
            scrolling="no"
        >
            Your browser does not support iframes.
        </iframe>
    </div>
</div>