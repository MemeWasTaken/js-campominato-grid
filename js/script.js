let btnPlay = document.getElementById('btn-play');
let selectForm = document.getElementById('difficulty-selection');

// console.log(btnPlay);
// console.log(selectForm.value);


btnPlay.addEventListener('click', function () {
    if (selectForm.value == 0) {
        console.log(selectForm.value);
        alert('Funziona il livello Easy');
    } else if (selectForm.value == 1) {
        console.log(selectForm.value);
        alert('Funziona il livello Medium');
    } else if (selectForm.value == 2) {
        console.log(selectForm.value);
        alert('Funziona il livello Hard');
    }
})