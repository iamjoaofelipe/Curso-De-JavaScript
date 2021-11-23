// Math.sqrt em JavaScript.
function calcularRaizQuadrada(número) {
    if (número < 0) {
        return undefined;
    }
    return Math.sqrt(número);
}
console.log(calcularRaizQuadrada(25));
console.log(calcularRaizQuadrada(-5))
