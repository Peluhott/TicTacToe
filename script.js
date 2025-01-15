function createPlayer1 (name){
    const playerName = name;
    const playerMarker = 'X';
    let playerScore = 0;
    let playerMoves = [];
    
    const resetMoves = () => playerMoves.length = 0;
    const getScore = () => playerScore;
    const addScore = () => playerScore++;
    const resetScore = () => playerScore = 0;
    const addPlayerMove = (num) => playerMoves.push(num);
return {playerName, playerMarker, resetMoves,getScore,addScore,resetScore,addPlayerMove}
}

function createPlayer2 (name){
    const playerName = name;
    const playerMarker = 'O';
    let playerScore = 0;
    let playerMoves = [];
    
    const resetMoves = () => playerMoves.length = 0;
    const getScore = () => playerScore;
    const addScore = () => playerScore++;
    const resetScore = () => playerScore = 0;
    const addPlayerMove = (num) => playerMoves.push(num);
    return {playerName, playerMarker, resetMoves,getScore,addScore,resetScore,addPlayerMove}
}

const Game = ( () => {
    let board = [null,null,null,null,null,null,null,null,null];
    let player1Turn = true;


});