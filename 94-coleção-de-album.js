// Coleção de discotecas em JavaScript.

/*
Temos um objeto que representa parte de uma coleção de álbuns de música. 
de álbuns de música. 
Cada álbum tem um número de identificação único (id) associado a outras propriedades. 
associadas a outras propriedades. 
Nem todos os álbuns têm informações completas.
*/

var colecãoDeDiscos = {
    7853: {

        tituloDoAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canção: ["Stayin 'alive"]

    },
    5439: {
        tituloDoAlbum: "ABAA Gold"
    }
};

/* 
Defina uma função atualizarDiscos que tome os seguintes parâmetros:
- discotecas (o objeto que representa a coleção de discotecas).
- Eu iria.
- propriedade ("artista" ou "canções").
- valor.
Seu objetivo é completar a função através da implementação das seguintes regras 
para modificar o objeto passado para a função:
- Se "valor" for um fio vazio, ele remove o imóvel 
do álbum correspondente.
- Se "propriedade" é o mesmo que a corda "canções" mas 
o álbum não tem uma propriedade chamada "canções", cria uma matriz vazia e acrescenta "valor" ao 
e acrescenta "valor" a essa matriz.
- Se "propriedade" for igual à corda "canções" e 
O "valor" não é uma corda vazia, acrescente "valor" ao final do conjunto de músicas correspondentes do álbum. 
de músicas do álbum correspondente.
- Se "valor" não for uma corda vazia e "propriedade" não for igual a "canções", atribua o valor de "valor" ao final da matriz de canções do álbum correspondente. 
"canções", atribuir o valor do parâmetro "valor" ao imóvel.
Se o imóvel não existir, você deve criá-lo e atribuir este valor.
*/

function atualizarDiscos(discos, id, propriedade, valor) {
    if (valor === "") {
        delete discos[id][propriedade];


    } else if (propriedade === "canção") {

        discos[id][propriedade] = discos[id][propriedade] || [];
        discos[id][propriedade].push(valor);

    } else {

        discos[id][propriedade] = valor;


    }

}

console.log(colecãoDeDiscos);
atualizarDiscos(colecãoDeDiscos, 7853, "tituloDealbum", "");
console.log(colecãoDeDiscos);

atualizarDiscos(colecãoDeDiscos, 5439, "canção", "mamma mia");
console.log(colecãoDeDiscos);

atualizarDiscos(colecãoDeDiscos, 5439, "artista", "ABBA");
console.log(colecãoDeDiscos);






