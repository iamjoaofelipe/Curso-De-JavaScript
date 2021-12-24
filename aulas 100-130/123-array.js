// Desestruturar a sintaxe com o resto para reafectar um operador de matriz.
var a;
var b;
var arr;
[a, b, ...arr] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 1
console.log(arr); // [3,4,5,6]
// Exemplo.
const arrayInicial = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrayInicial);

function removerTresElementos(array) {
    const [, , ...novaArray] = array;
    return novaArray;
}
const arrayFinal = removerTresElementos(arrayInicial);
console.log(arrayFinal);