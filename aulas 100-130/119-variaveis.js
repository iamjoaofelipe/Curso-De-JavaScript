// Operador spread em JavaScript.
const numeros = [1, 2, 3];

function somar(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return x + y + z;
}
console.log(...numeros);