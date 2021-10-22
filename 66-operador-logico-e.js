// Operador lógico "e" em JavaScript.

/*
   Tabela da verdade operador E 
   Para: X && Y
   | X | Y | X && Y |
   -----------------------
   | T | T | T |
   | T | F | F |
   | F | T | F |
   | F | F | F |
    
   A expressão só é verdadeira quando ambos os operandos são verdadeiros. 
*/

// Vamos verificar a tabela da verdade

console.log ( true && true ) ;
console.log ( true && false ) ;
console.log ( false && true ) ;
console.log ( false && false ) ;

// Os operandos agora são expressões

var  a  =  8 ;

// (a> 5) && (a <10) -> verdadeiro && verdadeiro -> verdadeiro
console . log (( a  >  5 )  &&  ( a  <  10 )) ; 

a = 3 ;

// (a <5) && (a <= 10) -> falso && verdadeiro -> falso
console.log (( a  <  5 )  &&  ( a  <=  10)) ;

a = 15;

// (a> = 5) && (a> 10) -> verdadeiro && falso -> falso
console.log(( a  >=  5 ) && ( a > 10));

a = 1;

// (a == 5) && (a> 10) -> falso && falso -> falso
console.log ((a == 5) && ( a > 10));