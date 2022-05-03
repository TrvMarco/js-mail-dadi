// Chiedi all’utente la sua email
const userMail = prompt("Inserisci la tua mail: nome + @gmail.com");
// stampa la mail in console 
console.log('La mail inserita è:',userMail);
// creo una lista di chi può accedere
const userMailAccess = ["filippo@gmail.com","mattia@gmail.com","giovanni@gmail.com","luca@gmail.com"];
// controlla che sia nella lista di chi può accedere
let userAccess = false;
for (let i = 0; i < userMailAccess.length; i++){
    if(userMailAccess[i] == userMail){
        userAccess = true 
    }
};
// se la mail è registrata dai il messaggio di benvenuto, altrimenti comunica che l'account è inesistente
if (userAccess == true){
    alert("Benvenuto!")
}else{
    alert("Account inesistente!")
};

