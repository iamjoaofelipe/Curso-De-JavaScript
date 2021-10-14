// Imutabilidade de cadeias de caracteres em JavaScript.

var minhaCadeia = "olá , Mundo";
console.log(minhaCadeia);

minhaCadeia[0] = "H"; // Erro porque as strings são imutáveis.

minhaCadeia = "Holá, Mundo"; // Uma nova string deve ser atribuída.
console.log(minhaCadeia); 
