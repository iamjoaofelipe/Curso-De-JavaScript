// Função em JavaScript.
function compararNumeros(a, b) {
    if (a === b) {
        return " a e b são iguais";
    } else if (a > b) {
        return " a é maior que b";
    } else {
        return "b é maior que a";
    }
}

function compararNumeros(a, b) {
    return a === b ? "a e b são iguais" :
        a > b ? "a é maior que b" :
        "b é maior que a";
}
console.log(compararNumeros(11, 27));
console.log(compararNumeros(27, 11));
console.log(compararNumeros(15, 15));