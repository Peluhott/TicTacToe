function createPlayer(name, marker){
    this.name = name;
    this.marker = marker;
    let score = 0;

    const getScore = () => score;
    const addScore = () => score++;


}

const gameBoard = (() => {
const board = [null,null,null,null,null,null,null,null,null]
const moves = { x : [], o : []};
})