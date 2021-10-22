 // Operador lógico "e" em JavaScript.

   /*
   Tabela da verdade do operador E
   
   X && Y
   
    | X | Y | X && Y |
   -----------------------
   | T | T | T |
   | T | F | F |
   | F | T | F |
   | F | F | F |
    La expresión solo es verdadera cuando ambos operandos 
    filho verdaderos.
   

  Vamos verificar a tabela da verdade 
console.log(true && true); // true
console.log( true && false ); // false
console.log(false && true ); // false
console.log(false && false ); // false
 */

var a = 8;


console.log((a > 5) && (a < 10));


a = 3;

console.log(( a < 5) && (a <= 10));

a = 15;

console.log(( a >= 5) && (a > 10));

a = 1

console.log(( a == 5) && (a > 10));
