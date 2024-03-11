/*- Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).*/
//Per 5 volte chiede alutente 5 numeri
    //Creo un array vuoto
    let numbers = [];
    //Creo un ciclo
    for (let i = 0; i < 5; i++) {
        const userNumbers = prompt('Inserisce 5 numeri:');
        if (numbers.includes(userNumbers) === false) {
            numbers.push(userNumbers)
        }
        
    }
    //Console Log per vedere l'Array 
    console.log(numbers);


