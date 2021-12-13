// Função em JavaScript.
function retornarMinuno(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }

}
// operador ternário.
function retornarMinimo(x, y) {
    return x < y ? x : y;
}
console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(5, 5));
// exemplo.
var a = 15;
var b = 9;
console.log(a);
console.log(b);
console.log(a > b);
console.log(a > b ? a + 2 : b * 3);