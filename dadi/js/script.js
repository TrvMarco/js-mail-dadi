// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creare una variabile per il giocatore e una per il computer
let userNumber = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber);
console.log(computerNumber);


// manipolazione dom
const userNumberBox = document.querySelector(".user-number");
const pcNumberBox = document.querySelector(".pc-number");

userNumberBox.innerHTML = userNumber
pcNumberBox.innerHTML = computerNumber

const result = document.querySelector(".result")

// creare la condizione che permette di vincere a chi ha fatto il numero pìu alto 
if( userNumber > computerNumber){
    result.innerHTML = "L'utente è il vincitore"
    // alert(`"Hai vinto!"${userNumber}"vs"${computerNumber}`)
}else if(userNumber === computerNumber){
    result.innerHTML = "Pareggio!"
    // alert(`"Pareggio!!"${userNumber}"vs"${computerNumber}`)
}else{
    result.innerHTML = "Il computer ha vinto"
    // alert(`"Hai perso!"${computerNumber}"vs"${userNumber}`)
}
