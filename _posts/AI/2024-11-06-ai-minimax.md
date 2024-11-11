---
title: AI - MiniMax
date: 2024-11-03 12:45:00 +/-TTTT
categories: [AI, Algorithms]
tags: [ai]     # TAG names should always be lowercase
toc: true
comments: true
math: true
img_path: /assets/img/ai
---
_Minimax is an algorithm used in decision-making and game theory to find the optimal move for a player, assuming that the opponent also plays optimally. In two-player games, it evaluates the possible moves, aiming to maximize the player’s minimum gain (hence "minimax"). The algorithm simulates all possible moves and counter-moves, building a tree of game states, and assigns a value to each based on potential win or loss outcomes. By choosing the move that maximizes the minimum gain (for the player) or minimizes the maximum gain (for the opponent), minimax ensures the best possible strategy in zero-sum games like tic-tac-toe or chess._

**Minimax** is part of the foundational approach used in IBM’s Deep Blue, the chess-playing computer that famously defeated world champion Garry Kasparov in 1997. Deep Blue used a combination of **Minimax** with alpha-beta pruning, an optimization that reduces the number of nodes evaluated in the **minimax** tree, making the search process faster and more efficient.

What set Deep Blue apart was its use of massive computational power and a highly specialized evaluation function to assess chess positions. Deep Blue could evaluate around 200 million chess positions per second, applying **Minimax** with deep search depths (sometimes up to 14 or more moves ahead).

<div align="center">
<img src="minimax-tree.png" alt="Minimax" width="100%"/>
</div>

### MiniMax Demonstration ###
<div style="text-align: center;">
<iframe src="{{ site.baseurl }}/assets/pages/ai-minimax.html" width="110%" height="600px" frameborder="0">
    Your browser does not support iframes.
</iframe>
</div>
