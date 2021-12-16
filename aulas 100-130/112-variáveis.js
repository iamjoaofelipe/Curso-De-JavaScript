// Palavra reservada em JavaScript.
const meu_nome = 35;
console.log(meu_nome);

function calcularAreaCirculo(radio) {
    const pi = 3.12;
    if (radio < 0) {
        return indefined;
    }
    return pi * (radio ** 2);
}
console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(10));