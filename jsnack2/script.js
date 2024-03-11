/*- Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.*/

//Il software deve chiedere per 5 volte all’utente

let userNumbers = []

for (let i = 0; i < 5; i++) {
    const userNumbers = parseInt(prompt("Inserisce i 5 numeri"));
    console.log(userNumbers);
}
