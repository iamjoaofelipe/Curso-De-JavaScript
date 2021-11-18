/* Operador lógico "e" em JavaScript.

   Tabela da verdade operador E 
   Para: X && Y
   | X | Y | X && Y |
   -----------------------
   | T | T | T |
   | T | F | F |
   | F | T | F |
   | F | F | F |
*/
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
var a = 8; 
// expressões.
console.log((a > 5) && (a < 10)); // true && true = true.
a = 10;
console.log((a >= 5) && (a < 9)); // true && true = false.
a = 20; // valor alterado.
console.log((a < 5) && (a > 10)); // false && true = false.
a = 1;
console.log(( a == 5) && (a > 10)); // false && false = false

