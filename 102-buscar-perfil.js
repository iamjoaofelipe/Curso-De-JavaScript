// Buscar perfil em JavaScript.

var contatos = [
    {
        "nome": "João",
        "apelido": "pastor",
        "numero": "000000000",
        "gostos": ["programação", "leitura"]
    },

    {
        "nome": "Suelen",
        "apelido": "preta",
        "numero": "000000000",
        "gostos": ["Cantar", "roupas"]

    },

    {
        "nome": "Bruno",
        "apelido": "leleque",
        "numero": "000000000",
        "gostos": ["cantar", "programação"]

    },


];

function buscarPerfil (nome, propriedade) { 
 for (var i = 0; i < contatos.length; i++) { 
     if (contatos[i].nome === nome) {
      return contatos[i][propriedade] || "A propriedade não existe";         
     }
     
 }
return "O contato não está na lista";
    
}

console.log(buscarPerfil("João", "gostos")); 
console.log(buscarPerfil("Suelen", "apelido")); 
console.log(buscarPerfil("Bruno" , "apelido")); 

console.log(buscarPerfil("João" , "direção")); //A propriedade não existe
console.log(buscarPerfil("Robson", "numero")); // O contato não está na lista












