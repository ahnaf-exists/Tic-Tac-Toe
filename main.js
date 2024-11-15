const cells = document.querySelectorAll(".cell");
const player = document.getElementById("player");
const winner = document.getElementById("winner");
const resetGameBtn = document.getElementById("reset-game");
const resetScoreBtn = document.getElementById("reset-score");
let turn = true;
player.innerText = "Player 1";
let isMoveAllowed = true;

let score = JSON.parse(localStorage.getItem("score")) || { player1: 0, player2: 0, draw: 0 };
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const scoreDraw = document.getElementById("draw");

const updateScoreDisplay = () => {
    score1.innerText = score.player1;
    score2.innerText = score.player2;
    scoreDraw.innerText = score.draw;
};

updateScoreDisplay();

const board = Array(3)
    .fill()
    .map(() => Array(3).fill(""));

const check = () => {
    const lines = [
        ...board,
        ...board[0].map((_, i) => board.map((row) => row[i])),
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];
    for (const line of lines) {
        if (line[0] && line.every((cell) => cell === line[0])) return line[0];
    }
    return board.every((row) => row.every((cell) => cell)) ? "Draw" : null;
};

const handleClick = (cell, idx) => {
    if (!isMoveAllowed || cell.innerText) return;

    const symbol = turn ? "X" : "O";
    cell.innerText = symbol;
    board[Math.floor(idx / 3)][idx % 3] = symbol;

    const result = check();
    if (result) {
        winner.innerText =
            result === "Draw"
                ? "It's a Draw"
                : `${result === "X" ? "Player 1" : "Player 2"} wins!`;
        score[
            result === "X" ? "player1" : result === "O" ? "player2" : "draw"
        ]++;
        localStorage.setItem("score", JSON.stringify(score));
        updateScoreDisplay();
        isMoveAllowed = false;
    } else {
        turn = !turn;
        player.innerText = turn ? "Player 1" : "Player 2";
    }
};

const resetGame = () => {
    board.forEach((row, i) => row.fill(""));
    cells.forEach((cell) => (cell.innerText = ""));
    winner.innerText = "";
    player.innerText = "Player 1";
    turn = true;
    isMoveAllowed = true;
};

const resetScore = () => {
    score = { player1: 0, player2: 0, draw: 0 };
    localStorage.setItem("score", JSON.stringify(score));
    updateScoreDisplay();
};

resetGameBtn.addEventListener("click", resetGame);
resetScoreBtn.addEventListener("click", resetScore);
cells.forEach((cell, idx) =>
    cell.addEventListener("click", () => handleClick(cell, idx))
);
