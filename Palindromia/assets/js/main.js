const check = document.querySelector("div.palindromo")

let inputWorld = prompt("Inserisci una parola");
let reverseWorld = invertWorld(inputWorld);

if (inputWorld == reverseWorld) {
    check.innerHTML = "La parola è palindroma";
}

else {
    check.innerHTML = "La parola non è palindroma";
}


/**
 * Inverte la parola per poi confrontarla.
 * @param {string} word - parola da invertire
 */
function invertWorld(parola) {
    let temp = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        temp += parola[i]
    }
    return temp;
}



