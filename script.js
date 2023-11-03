const board = Array.from({ length: 9 }, () => "");

let currentPlayer = "X";

function resetBoard() {
    board.fill("");
    currentPlayer = "X";
    updateBoard();
}

function updateBoard() {
    document.getElementById("board").innerHTML = board
        .map((cell, index) => `<div class="cell" onclick="makeMove(${index})">${cell}</div>`)
        .join("");
}

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        updateBoard();
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            resetBoard();
            return;
        }
    }

    if (board.every((cell) => cell !== "")) {
        alert("It's a tie!");
        resetBoard();
    }
}

resetBoard();