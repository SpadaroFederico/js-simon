// Funzione che genera 5 numeri casuali
function generaNumeriCasuali() {
    // Selezioniamo il div dove mostreremo i numeri
    const numeriDiv = document.getElementById('numeriCasuali');
    
    // Creiamo un array per memorizzare i numeri casuali
    let numeriCasuali = [];

    // Generiamo 5 numeri casuali tra 0 e 99
    for (let i = 0; i < 5; i++) {
        numeriCasuali.push(Math.floor(Math.random() * 100)); // Numeri casuali
    }

    // Mostriamo i numeri nel div, separati da una virgola
    numeriDiv.textContent = numeriCasuali.join(', ');

    // Impostiamo un timeout per nascondere i numeri dopo 30 secondi
    setTimeout(() => {
        numeriDiv.textContent = ''; // Svuota il contenitore
    }, 30000); // 30 secondi
}
