// Acesso a arrays multidimensionais em JavaScript.

var meuArray = [[1,2,3] , [3,4,5] , [7,8,9,]]; 

/*
Arrays:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:               0          1          2
Índices internos:   0  1  2    0  1  2    0  1  2
*/

console.log(meuArray[0]); // [1,2,3,]
console.log(meuArray[1]); // [4,5,6,]
console.log(meuArray[2]); // [7,8,9,]

// Acesse os elementos da primeira matriz.

console.log(meuArray[0][0]); // 1
console.log(meuArray[0][1]); // 2
console.log(meuArray[0][2]); // 3

// Acesse os elementos da segunda matriz.

console.log(meuArray[1][0]); // 4
console.log(meuArray[1][1]); // 5
console.log(meuArray[1][2]); // 6

/*
console.log(meuArray[2][0]); // 7
console.log(meuArray[2][1]); // 8
console.log(meuArray[2][2]); // 9
*/



