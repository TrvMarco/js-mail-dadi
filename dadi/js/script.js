// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creare una variabile per il giocatore e una per il computer
let userNumber = Number(prompt("inserisci un numero da 1 a 6"));
let computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber);
console.log(computerNumber);

// creare la condizione che permette di vincere a chi ha fatto il numero pìu alto 
if( userNumber > computerNumber){
    alert(`"Hai vinto!"${userNumber}"vs"${computerNumber}`)
}else if(userNumber === computerNumber){
    alert(`"Pareggio!!"${userNumber}"vs"${computerNumber}`)
}else{
    alert(`"Hai perso!"${computerNumber}"vs"${userNumber}`)
}
