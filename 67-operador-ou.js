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
 
   A expressão é verdadeira se um dos dois operandos 
  ou ambas são verdadeiras.
*/

// Vamos verificar a tabela da verdade 

console.log(verdadeiro || verdadeiro);
console.log(verdadeiro || falso);
console.log(falso || verdadeiro);
console.log(falso || falso);

// Os operandos são agora expressões

var a = 8;

// (a <5) || (a> 15) -> falso || falso -> falso
console.log((a < 5) || (a > 15));

a = 2;

// (a <5) || (a> 15) -> verdadeiro || falso -> verdadeiro
console.log((a < 5) || (a > 15));

a = 20;

// (a <5) || (a> 15) -> falso || verdadeiro -> verdadeiro
console.log((a < 5) || (a > 15));

a = 5;

// (a <5) || (a> 15) -> verdadeiro || verdadeiro -> verdadeiro
console.log((a == 5) || (a < 15));
