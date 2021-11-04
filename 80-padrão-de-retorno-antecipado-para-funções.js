// Padrão de retorno antecipado para funções em JavaScript.

function minhaFunção() {
    console.log("Olá");
    return "Mundo";
    console.log("Adeus"); 
}
console.log(minhaFunção());

function calcularRaizQuadrada(num) {
    if (num < 0) {
        return undefined;

    }
 return Math.sqrt(num);
}

console.log(calcularRaizQuadrada(25));
console.log(calcularRaizQuadrada());