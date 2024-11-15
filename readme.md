# Tic-Tac-Toe Game

A modern, responsive Tic-Tac-Toe web game built with HTML, JavaScript, and styled using Tailwind CSS. This implementation features a clean, minimalist design with a scoring system that persists across browser sessions.

## Features

-   🎮 Classic Tic-Tac-Toe gameplay for two players
-   💾 Local storage for persistent score tracking
-   🎯 Real-time turn indicator
-   🏆 Score tracking for:
    -   Player 1 wins
    -   Player 2 wins
    -   Draws
-   🔄 Reset options for:
    -   Current game
    -   Overall score
-   📱 Responsive design that works on all screen sizes
-   🎨 Modern UI with smooth hover effects and transitions

## Tech Stack

-   HTML5
-   JavaScript (Vanilla)
-   Tailwind CSS
-   Google Fonts (Quicksand)

## Implementation Details

### Game Board

The game board is implemented as a 3x3 grid using Tailwind CSS's grid system. Each cell is interactive and displays either an "X" or "O" depending on the current player's turn.

### Styling

-   Uses Tailwind CSS for utility-first styling
-   Custom component class for cells with hover and active states
-   Indigo and sky color palette for a modern look
-   Quicksand font family for typography
-   Responsive text sizing using viewport width units

### Game Logic

The game implements several key features:

1. **Board State Management**

    - Uses a 2D array to track game state
    - Validates moves and prevents playing on occupied cells
    - Checks for wins after each move

2. **Win Detection**

    - Checks rows, columns, and diagonals
    - Identifies draws when the board is full
    - Updates scores accordingly

3. **Score Management**

    - Stores scores in localStorage for persistence
    - Tracks wins for both players and draws
    - Provides option to reset scores

4. **Turn Management**
    - Alternates between players
    - Displays current player's turn
    - Prevents moves after game end

## How to Play

1. The game starts with Player 1 (X)
2. Players take turns clicking empty cells to place their symbol
3. The game ends when:
    - A player gets three symbols in a row (horizontally, vertically, or diagonally)
    - All cells are filled (draw)
4. Use the "Reset Match" button to start a new game
5. Use the "Reset Score" button to clear all scores

## Contributing

Feel free to fork this repository and submit pull requests for any improvements you'd like to add!
