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
    // Initialize a priority queue to manage nodes by their cost
    // Nodes with lower costs will be processed first
    nodes = PriorityQueue()

    // Initialize the start node with cost 0
    // All other nodes implicitly have infinite cost
    startNode.Cost = 0
    nodes.Enqueue(startNode, priority = startNode.Cost)

    // Track if we've found the end node
    // This allows early exit once the shortest path is found
    found = false

    while nodes is not empty and found is false:
        // Get the unvisited node with smallest cost
        // This node is guaranteed to have the shortest path from start
        currentNode = nodes.Dequeue()

        // If this is our target node, we've found the shortest path
        // No need to explore further nodes
        if currentNode == endNode:
            found = true
            break

        // Check each connection from current node
        // This explores all possible paths one step further
        for each neighbor in currentNode.neighbors:
            // Calculate total cost to reach this neighbor
            // Cost = (cost to current) + (distance from current to neighbor)
            cost = currentNode.Cost + Distance(currentNode, neighbor)

            // If we found a shorter path to this neighbor
            // Update its cost and set current node as its predecessor
            if cost < neighbor.Cost:
                neighbor.Cost = cost
                neighbor.Previous = currentNode

                // Add/Update neighbor in priority queue
                // It will be explored later based on its new priority
                nodes.Enqueue(neighbor, priority = neighbor.Cost)

    // At this point, each node's Previous reference forms a chain
    // Follow Previous references from endNode to startNode to get path

    return
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