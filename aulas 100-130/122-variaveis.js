// Sintaxe de desestruturação (Arrays).
var a;
var b;
var c;
[a, b, ] = [1, 2];
console.log(a); // 1
console.log(b); // 2
[a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
[a, b] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2
[a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1 
console.log(b); // 2 
console.log(c); // 5
// Trocar valores de variáveis.
var a = 8;
var b = 6;
console.log("a:", a);
console.log("b:", b);