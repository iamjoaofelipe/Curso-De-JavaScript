// Operador lógico "ou" em JavaScript.
/*
   Tabela da verdade do operador OU 
   Para: X || Y
   | X | Y | X || Y |
   -----------------------
   | T | T | T |
   | T | F | T |
   | F | T | T |
   | F | F | F |
 */
var a = 20;
console.log(( a > 5) || ( a > 15)) // true.
a = 30;
console.log( a > 19) || ( a < 15) // true.
a = 30;
console.log( a < 29 ) || ( a > 20 ) // bugou. F,T = true
a = 5;
console.log( a === 5 ) || ( a < 15 ) // true.




