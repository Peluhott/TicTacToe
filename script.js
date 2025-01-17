function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;
    let score = 0;

    const getScore = () => score;
    function resetScore() {
      score = 0;
    }
    function addScore() {
      score++;
    }

return {name, marker, getScore, addScore, resetScore};
}

const gameBoard = (() => { 
    
const board = [null,null,null,null,null,null,null,null,null]
const moves = { x : [], o : []};
let playerAlternator = true;


const placeMove = (index, player) => {  // places move on the board, adds to player moves
    if(!moves.x.includes(index) && !moves.o.includes(index)){ // and alternates players
        if(playerAlternator){
        board[index] = player1.marker;
        moves.x.push(index);
        if(moves.x.length >= 3){
            checkForWin(moves.x);
        }
        playerAlternator = !playerAlternator;
}
    else {
        board[index] = player2.marker;
        moves.o.push(index);
        if(moves.o.length >= 3){
            checkForWin(moves.o);
        }
        playerAlternator = !playerAlternator;
    }
    }
    
}

const resetBoard = () => {  // fills board with null, resets moves for x and o
    board.fill(null)            // resets alternator so player1 starts next
    moves.x = []
    moves.o = []
    playerAlternator = true;
}

const checkForWin = (arrayOfMoves) => {
    let winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // Check for a win by looking at all winning combinations
    for (const comb of winningCombinations) {
        if (comb.every(index => arrayOfMoves.includes(index))) {
            const currentPlayer = playerAlternator ? player2 : player1;  // Correct player assignment
            currentPlayer.addScore();  // Add score to the player
            initializeScores();         // Update score display on the page
            resetBoard();               // Reset the board
            renderBoard();              // Re-render the board
            alert(`${currentPlayer.name} wins!`);
            return true;
        }
    }
    return false;
};

{return {placeMove, resetBoard, board}}
}
)();

// Select DOM elements
const startButton = document.querySelector('button:nth-of-type(1)');
const resetButton = document.querySelector('button:nth-of-type(2)');
const gameSquares = document.querySelectorAll('.gameSquare');
const player1Input = document.getElementById('player1-name');
const player2Input = document.getElementById('player2-name');
const player1ScoreDiv = document.querySelector('.player1Score');
const player2ScoreDiv = document.querySelector('.player2Score');

// Game state
let player1;
let player2;

// Initialize player scores
const initializeScores = () => {
    player1ScoreDiv.textContent = `${player1.name}: ${player1.getScore()}`;
    player2ScoreDiv.textContent = `${player2.name}: ${player2.getScore()}`;
};
// Render the game board
const renderBoard = () => {
  gameBoard.board.forEach((marker, index) => {
    const square = gameSquares[index];
    square.innerHTML = '';
    if (marker === 'x') {
      square.innerHTML = `<img src="images/X.svg" alt="X" style="width: 100%; height: 100%;">`;
    } else if (marker === 'o') {
      square.innerHTML = `<img src="images/O.svg" alt="O" style="width: 100%; height: 100%;">`;
    }
  });
};

// Handle a game square click
const handleSquareClick = (e) => {
    const index = Array.from(gameSquares).indexOf(e.target);
    if (index === -1 || gameBoard.board[index] !== null) return; // Invalid or already occupied
  
    const currentPlayer = gameBoard.playerAlternator ? player1 : player2;
    gameBoard.placeMove(index, currentPlayer);
    renderBoard();
  
    // Check for a winner
    const currentMoves = gameBoard.playerAlternator ? gameBoard.moves.x : gameBoard.moves.o;
    if (gameBoard.checkForWin(currentMoves)) {
      // Score and board will be handled in checkForWin
    }
  };

// Reset the game state
const resetGame = () => {
  gameBoard.resetBoard();
  renderBoard();
  player1.resetScore();
  player2.resetScore();
  initializeScores();
};

// Start the game
const startGame = () => {
  const player1Name = player1Input.value.trim();
  const player2Name = player2Input.value.trim();

  if (!player1Name || !player2Name) {
    alert('Please enter names for both players!');
    return;
  }

  player1 = createPlayer(player1Name, 'x');
  player2 = createPlayer(player2Name, 'o');
  initializeScores();
  resetGame();
};

// Add event listeners
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
gameSquares.forEach((square) => square.addEventListener('click', handleSquareClick));
