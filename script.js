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

}