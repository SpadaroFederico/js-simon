// faccio apparire 5 numeri casuali in pagina
function generaNumeriCasuali() {
    const numeriDiv = document.getElementById('numeriCasuali'); // Seleziona il contenitore dei numeri
    let numeriCasuali = [];

    // Genera 5 numeri casuali
    for (let i = 0; i < 5; i++) {
        numeriCasuali.push(Math.floor(Math.random() * 100)); // Numeri casuali tra 0 e 99
    }

    // Mostra i numeri casuali nel contenitore
    numeriDiv.textContent = numeriCasuali.join(', ');

    // Imposta un timeout per nascondere i numeri dopo 30 secondi
    setTimeout(() => {
        numeriDiv.textContent = ''; // Svuota il contenitore
    }, 30000); // 30 secondi
}
