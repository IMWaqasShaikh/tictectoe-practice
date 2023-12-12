let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
    if (checkWinner()) {
      showWinnerPopup();
      gameActive = false;
    } else if (board.every(cell => cell !== '')) {
      showWinnerPopup("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningCombinations.some(combination =>
    combination.every(index => board[index] === currentPlayer)
  );
}

function showWinnerPopup(message) {
  const winnerPopup = document.getElementById('winner-popup');
  const winnerText = document.getElementById('winner-text');
  winnerText.innerText = message || `Player ${currentPlayer} wins!`;
  winnerPopup.style.display = 'block';
}

function restartGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }

  const winnerPopup = document.getElementById('winner-popup');
  winnerPopup.style.display = 'none';
}
