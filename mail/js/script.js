// Chiedi all’utente la sua email
const userMail = prompt("Inserisci la tua mail: nome + @gmail.com");
// stampa la mail in console 
console.log('La mail inserita è:',userMail);
// creo una lista di chi può accedere
const userMailAccess = ["filippo@gmail.com","mattia@gmail.com","giovanni@gmail.com","luca@gmail.com"];
// controlla che sia nella lista di chi può accedere
for (let i = 0; i < userMailAccess.length; i++){
    console.log(userMailAccess[i]);
    if(userMail == userMailAccess[i]){
        alert("Benvenuto!")
    }else{
        alert("Utente non registrato!")
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
