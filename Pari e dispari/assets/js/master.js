
//function

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(numero) {
    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let userSelection = prompt("Scegli tra pari e dispari");
document.getElementById("user-selection").innerHTML = userSelection;

let userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
document.getElementById("user-number").innerHTML = userNumber;

let pcNumber = randomNumber(1, 5);
document.getElementById("pc-number").innerHTML = pcNumber;

let sum = userNumber + pcNumber;
document.getElementById("sum").innerHTML = sum;

let result = isEven(sum);


if (result == true) {
    result = "pari";
    document.getElementById("result").innerHTML = result;
} else {
    result = "dispari";
    document.getElementById("result").innerHTML = result;
}

if (userSelection === result) {
    document.getElementById("winner").innerHTML = "Hai vinto";
} else {
    document.getElementById("winner").innerHTML = "Hai perso";
}