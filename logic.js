let players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function startGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    renderBoard(board);
}

function click(rowNum, colNum) {
    board[rowNum][colNum] = players[activePlayer];

    let activeCount = 0;

    let row = board[rowNum];
    let column = [board[0][colNum], board[1][colNum], board[2][colNum]];
    let diagonalX = [board[0][0], board[1][1], board[2][2]];
    let diagonalY = [board[0][2], board[1][1], board[2][0]];

    renderBoard(board);

    checkRow();
    checkColumn();
    checkDiagonalX();
    checkDiagonalY();

    function checkRow() {
        for (let i = 0; i < 3; i++) {
            if (row[i] === players[activePlayer]) {
                activeCount += 1;
            }
        }

        if (activeCount === 3) {
            showWinner(activePlayer);
        } else {
            activeCount = 0;
        }
    }

    function checkColumn() {
        for (let i = 0; i < 3; i++) {
            if (column[i] === players[activePlayer]) {
                activeCount += 1;
            }
        }

        if (activeCount === 3) {
            showWinner(activePlayer);
        } else {
            activeCount = 0;
        }
    }

    function checkDiagonalX() {
        for (let i = 0; i < 3; i++) {
            if (diagonalX[i] === players[activePlayer]) {
                activeCount += 1;
            }
        }

        if (activeCount === 3) {
            showWinner(activePlayer);
        } else {
            activeCount = 0;
        }
    }

    function checkDiagonalY() {
        for (let i = 0; i < 3; i++) {
            if (diagonalY[i] === players[activePlayer]) {
                activeCount += 1;
            }
        }

        if (activeCount === 3) {
            showWinner(activePlayer);
        } else {
            activeCount = 0;
        }
    }

    activePlayer = activePlayer === 1 ? 0 : 1;
}