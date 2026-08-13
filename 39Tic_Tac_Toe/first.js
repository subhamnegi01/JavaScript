let turn = 'O';
const board = document.querySelector('.board');
board.addEventListener('click', (event) => {
    const element = event.target;
    if(turn == 'O'){
        element.innerHTML = 'O'
        turn = 'X'
    }
    else{
        element.innerHTML = 'X'
        turn = 'O'
    }
});