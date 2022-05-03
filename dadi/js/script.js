// Creo evento al click
const click = document.getElementById("button")

click.addEventListener('click',
    function(){    
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
    }else if(userNumber === computerNumber){
        result.innerHTML = "Pareggio!"
    }else{
        result.innerHTML = "Il computer ha vinto"
    }

});


// creare una variabile per il giocatore e una per il computer

