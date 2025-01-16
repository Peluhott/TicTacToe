function createPlayer1 (name){
    const playerName = name;
    const playerMarker = 'X';
    let playerScore = 0;
   
    
    
    const getScore = () => playerScore;
    const addScore = () => playerScore++;
    const resetScore = () => playerScore = 0;
    
return {playerName, playerMarker,getScore,addScore,resetScore}
}

function createPlayer2 (name){
    const playerName = name;
    const playerMarker = 'O';
    let playerScore = 0;
    
    
    
    const getScore = () => playerScore;
    const addScore = () => playerScore++;
    const resetScore = () => playerScore = 0;
    
    return {playerName, playerMarker,getScore,addScore,resetScore}
}

const Game = ( () => {
    player1 = new createPlayer1;
    player2 = new createPlayer2
    let board = [null,null,null,null,null,null,null,null,null];
    let player1Moves = []
    let player2Moves = []
    let player1WinningMoves = []
    let player2WinningMoves = []
    let winningMoves = [
    [0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[2,4,6],[6,7,8],[2,5,8]

    ];

   

    let player1Turn = true;

    const resetGame = () => {
        player1WinningMoves = winningMoves;
        player2WinningMoves = winningMoves;
        player1Moves.length = 0;
        player2Moves. length = 0;
        player1Turn = true;
    }


     const placeMarker =(marker, index) => {
        if(!player1Moves.includes(index) && !player2Moves.includes(index)){
            board[index] = marker;
            player1Turn = !player1Turn;
        }
        
        
     }

     const addMoveToPlayer = (player,index) => {
        if(player == 'player1'){
            player1Moves.push(index);
            if(player1Moves.length == 3){
                if(checkForWin(player1WinningMoves,player1Moves)){
                    player1.addScore;
                }
            }
            filterWinningCombinations(index,player2Moves);
        }
        else {
            player2Moves.push(index);
            if(player2Moves.length == 3){
                if(checkForWin(player2WinningMoves,player2Moves)){
                    player2.addScore
                }
            }
            filterWinningCombinations(index,player1Moves);
        }
     }

     const filterWinningCombinations = (index, opposingPlayerCombinations) => {
        if(index == 0){
            opposingPlayerCombinations[0] = null;
            opposingPlayerCombinations[1] = null;
            opposingPlayerCombinations[2] = null;
        }
        else if(index == 4){
            opposingPlayerCombinations[2] = null;
            opposingPlayerCombinations[3] = null;
            opposingPlayerCombinations[4] = null;
            opposingPlayerCombinations[5] = null;
        }

        else if(index == 8){
            opposingPlayerCombinations[6] = null;
            opposingPlayerCombinations[7] = null;
        }
     }

     const checkForWin = (winningCombinations, playerMoves) => {
        for(const combination of winningCombinations){
            
            if(combination == null ){
                continue;
            }
            if(combination.every(cell => playerMoves.includes(cell))){
                return true;
                resetGame();
            }

        }
        return false;
     }
    
});