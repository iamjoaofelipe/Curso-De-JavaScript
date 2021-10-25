// Operador Lógico não em JavaScript.

/*
   Tabela da verdade do operador não 
   Para:! X
   | X | ! X |
   -----------------------
   | T | F |
   | F | T |
*/

// Vamos verificar a tabela da verdade 

console.log(!true);
console.log(!false);

var a = 8;
// !(a > 5) --> !true --> false
console.log(!(a > 5));
// !(a > 5) --> !false --> true
console.log(!(a < 5));
