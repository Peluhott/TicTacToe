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
    let board = [null,null,null,null,null,null,null,null,null];
    let player1Moves = []
    let player2Moves = []
    let player1WinningMoves = []
    let player2WinningMoves = []
    let winningMoves = [
    [0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[2,4,6],[6,7,8],[2,5,8]

    ];

    /* 
     if(moveIndex = 0){ // a player marks index 0
    set array[0,1,2] = null }  // it goes throught the array of combinations,
                                    and removes the combinations at indexes 0,1,2

    
    
    if(moveIndex = 4) {
    set array[2,3,4,5] = null}
   
    if(moveIndex = 8){
    set array[6,7] = null}

    after 3 moves it starts checking for winning combinations and it's still removing possible combinations
    */

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
        }
        else {
            player2Moves.push(index);
        }
     }

     const filterWinningCombinations = (index, array) => {
        if(index == 0){
            array[0] = null;
            array[1] = null;
            array[2] = null;
        }
        else if(index == 4){
            array[2] = null;
            array[3] = null;
            array[4] = null;
            array[5] = null;
        }

        else if(index == 8){
            array[6] = null;
            array[7] = null;
        }
     }

     const checkForWin = (winningCombinations, playerMoves) => {
        for(const combination of winningCombinations){
            
            if(combination == null ){
                continue;
            }
            if(combination.every(cell => playerMoves.includes(cell))){
                return true;
            }

        }
        return false;
     }
     /* winning array combinations 
     0-1-2      0,3,6       0,4,8
     3,4,5      1,4,7       6,4,2
     6,7,8      2,5,8       
     */

     /* after a player makes a move and takes up a spot , i remove all the combinations
     that can no longer be achieved by the other player in a list, then after each 
     player has 3 moves minimum , after a player makes a move i check if they have 
     any 3-pairs of numbers that would make them a winner, that means i also have 
     to check to see if the array has every spot taken after the move, if it is and 
     no one has any combination of numbers , then the game ends in a tie and the
     board resets*/
});