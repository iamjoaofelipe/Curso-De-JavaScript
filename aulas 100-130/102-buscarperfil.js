// Buscar perfil em JavaScript.
var contatos = [
    {
        "nome": "João",
        "apelido": "nenhum",
        "número": "21000000001",
        "gostos": ["leitura", "programação"]
    },
    {
        "nome": "Bruno",
        "apelido": "nenhum",
        "número": "21000000002",
        "gostos": ["leitura", "programação"]

    },
    {
        "nome": "Leandro",
        "apelido": "nenhum",
        "número": "21000000003",
        "gostos": ["leitura", "programação"]
    }
];
function buscarPerfil(nome, propriedade) {
    for (var i = 0; i < contatos.length; i++) {
      if (contatos[i].nome === nome) {
          return contatos[i][propriedade] || "A propriedade não existe";
      }
    }
    return "Esse contato não está na lista";
  }
    
console.log(buscarPerfil("João", "gostos"));
console.log(buscarPerfil("Bruno", "gostos")); 
console.log(buscarPerfil("Leandro", "gostos")); 
console.log(buscarPerfil("João", "sobrenome"));
console.log(buscarPerfil("Robson", "número")); 


