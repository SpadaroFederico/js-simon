let numeri = [];

// Generazione dei numeri casuali
for (let i = 0; i < 5; i++) {
    numeri.push(Math.floor(Math.random() * 100)); // Numeri casuali
}

// Mostra i numeri generati
const numbers_list = document.getElementById("numbers-list");
for (let i = 0; i < 5; i++) {
    const element = numeri[i];
    numbers_list.innerHTML += '<li>' + element + '</li>';
}

// Nasconde i numeri dopo 7 secondi e mostra il form
setTimeout(() => {
    numbers_list.innerHTML = ''; // Svuota il contenitore
    const visualnumbers = document.getElementById("answers-form");
    visualnumbers.classList.remove("d-none");
}, 7000);

// Assicurati che il DOM sia caricato prima di aggiungere gli eventi
document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send');
});

// Funzione per confrontare i numeri inseriti con quelli generati
function compareNumbers() {
    // Recupero dei valori inseriti dall'utente
    const input1 = parseInt(document.getElementById('number1').value, 10) || 0;
    const input2 = parseInt(document.getElementById('number2').value, 10) || 0;
    const input3 = parseInt(document.getElementById('number3').value, 10) || 0;
    const input4 = parseInt(document.getElementById('number4').value, 10) || 0;
    const input5 = parseInt(document.getElementById('number5').value, 10) || 0;

    const numeriscelti = [input1, input2, input3, input4, input5];

    // Confronto dei numeri
    let numeriCorretti = 0;
    for (let i = 0; i < 5; i++) {
        if (numeri[i] === numeriscelti[i]) {
            numeriCorretti++;
        }
    }

    // Mostra il risultato
    const message = document.getElementById('message');
    message.textContent = `Hai indovinato ${numeriCorretti} numeri corretti!`;
}

 