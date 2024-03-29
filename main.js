let counter = 0;
let cells = document.querySelectorAll('#tabel td');
let header = document.getElementById('header');
let winOne = document.getElementById('checkOne')
let winTwo = document.getElementById('checkTwo')


function isVictory() {
    let combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
           return true;
        }
    }
    return false;
}

function tap(event) {
    if (counter % 2 == 0) {
        event.target.innerHTML = '<img src="close.png" width=100>';
    }
    else {
        event.target.innerHTML = '<img src="circle.png" width=100>';
    }

    if(isVictory()){
        for ( let cell of cells){
            cell.removeEventListener('click', tap);
        }
        if (counter % 2== 0){
            header.innerText = '"X" победили!'; 
            winOne.innerText = ++winOne.innerText
        }
        else{
            header.innerText = '"O" победили!';
            winTwo.innerText = ++winTwo.innerText
        }
    }
        else if (counter==8){
        header.innerText = 'Ничья!';
    }
    counter++;
    event.target.removeEventListener('click', tap);
}

function startGame() {
    header.innerText = 'Крестик и Нолик';
    counter = 0;
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}
startGame()


