let btnPlay = document.getElementById('btn-play');
let selectForm = document.getElementById('difficulty-selection');
let gridContainer = document.querySelector('.grid-container');

function randomNumberFrom (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// console.log(btnPlay);
// console.log(selectForm.value);


btnPlay.addEventListener('click', function () {
    if (selectForm.value == 0) {
        // console.log(selectForm.value);
        // alert('Funziona il livello Easy');
        gridContainer.classList.add('size-difficulty-0');
        for (let i = 0; i < 100; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            let number = randomNumberFrom(1, 100);
            square.append(number);
            gridContainer.append(square);
            console.log(number);
        }

    } else if (selectForm.value == 1) {
        // console.log(selectForm.value);
        // alert('Funziona il livello Medium');
        gridContainer.classList.add('size-difficulty-1');
        for (let i = 0; i < 81; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            let number = randomNumberFrom(1, 81);
            square.append(number);
            gridContainer.append(square);
        }


    } else if (selectForm.value == 2) {
        // console.log(selectForm.value);
        // alert('Funziona il livello Hard');
        gridContainer.classList.add('size-difficulty-2');
        for (let i = 0; i < 49; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            let number = randomNumberFrom(1, 49);
            square.append(number);
            gridContainer.append(square);
        }


    }
    
})