let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');

function makeMove(squareIndex) {
  if (board[squareIndex] === '') {
    board[squareIndex] = currentPlayer;
    squares[squareIndex].textContent = currentPlayer;
    
    if (checkWin(currentPlayer)) {
      message.textContent = `${currentPlayer} wins!`;
      disableBoard();
    } else if (!board.includes('')) {
      message.textContent = `It's a draw!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  return winPatterns.some(pattern => {
    return pattern.every(index => {
      return board[index] === player;
    });
  });
}

function disableBoard() {
  squares.forEach(square => {
    square.onclick = null;
  });
}
