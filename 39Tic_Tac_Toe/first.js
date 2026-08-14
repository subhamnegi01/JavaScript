let turn = 'O';

let winner = [
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

const board_array= new Array(9).fill("E")

function checkWinner(){
    for (let [index0, index1, index2] of winner){
        if(board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1
    }

    return 0
}



const board = document.querySelector('.board');
board.addEventListener('click', (event) => {
    const element = event.target;
    if(turn == 'O'){
        element.innerHTML = 'O'
        board_array[element.id] = "O"
        if checkWinner()
        turn = 'X'
    }
    else{
        element.innerHTML = 'X'
        board_array[element.id] = "X"
        turn = 'O'
    }
});