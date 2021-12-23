// Sintaxe de desestruturação (Objetos aninhados) em JavaScript.
const usuarios = {
    joao: {
        idadeExemplo: 26,
        email: "joao.barreto4763@gmail.com"
    }
};
const { joao: { idadeExemplo, email } } = usuarios;
console.log(idadeExemplo);
console.log(email);
// Atribuir nomes diferentes
const { joao: { idade: idadeExemploDoUsuario, email: emailDoUsuario } } = usuarios;;
console.log(idadeExemplo)
console.log(email);
const PRONOSTICO_LOCAL = {
    "ontem": {
        minima: 61,
        maxima: 75
    },
    "hoje": {
        minima: 64,
        maxima: 77
    },
    "amanha": {
        minima: 68,
        maxima: 75
    }
};
//const minimaHoje = PRONOSTICO_LOCAL.hoje.minima; // alterei para var
const maximaHoje = PRONOSTICO_LOCAL.hoje.minima;
// Atribuir propriedades individualmente.
const { hoje: { minima: minimaHoje } } = PRONOSTICO_LOCAL;
console.log(minimaHoje);