function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;
    let score = 0;

    const getScore = () => score;
    const addScore = () => score++;


}

const gameBoard = (() => { 
    const player1 = createPlayer('javier', 'x');
    const player2 = createPlayer('seda', 'o');
const board = [null,null,null,null,null,null,null,null,null]
const moves = { x : [], o : []};
let playerAlternator = true;


const placeMove = (index, player) => {  // places move on the board, adds to player moves
    if(!moves.x.includes(index) && !moves.o.includes(index)){ // and alternates players
        if(playerAlternator){
        board[index] = player1.marker;
        moves.x.push(index);
        playerAlternator = !playerAlternator;
}
    else {
        board[index] = player2.marker;
        moves.o.push(index);
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
}
);