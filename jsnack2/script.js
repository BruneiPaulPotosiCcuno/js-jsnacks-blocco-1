/*- Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.*/

//Il software deve chiedere per 5 volte all’utente

let Numbers = [];

for (let i = 0; i < 5; i++) {
    const userNumbers = parseInt(prompt("Inserisce i 5 numeri"));
    Numbers.push(userNumbers);
}

//somma di tutti i numeri
let sum = 0
for (let i = 0; i < 5; i++) {
    const element = Numbers [i];
    sum += Numbers[i]
}

console.log(sum);
