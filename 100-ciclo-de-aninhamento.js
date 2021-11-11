// ciclos "for" aninhados em JavaScript.

var meuArray = [[1,2,3] , [4,5,6,] , [7,8,9]]; 

//Para cada matriz aninhada

for ( var i = 0; i < meuArray.length; i++) {
    var aninhado = meuArray[i];
    // Para cada elemento da matriz aninhada

     for (var j = 0; j < fila.length; j++) {
        console.log(aninhado[j]); 
     }
}




