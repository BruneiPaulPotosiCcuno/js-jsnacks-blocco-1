// - Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

// - Crea un array vuoto.
let numbers = [];

//   Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt('Inserisce 6 numeri'));
    //Controllo se il numero e dispari
    if (userNumber % 2 !==0) {
    //Se vedo che il numero e dispari lo metto nel array
    numbers.push(userNumber);
    }
}

//stampo i dispari nel array
console.log(numbers);