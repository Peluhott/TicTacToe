function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;
    let score = 0;

    const getScore = () => score;
    const addScore = () => score++;


}

const gameBoard = (() => {
    const player1 = createPlayer('javier', 'x');
    const plyaer2 = createPlayer('seda', 'o');
const board = [null,null,null,null,null,null,null,null,null]
const moves = { x : [], o : []};
const playerAlternator = true;
const placeMove = (index, player) => {
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
})