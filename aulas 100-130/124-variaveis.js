//  Sintaxe de desestruturação para passar um objecto.
var novoPerfilCliente = {
    nome: "Joao Felipe",
    idade: 26,
    nacionalidade: "Brasileira",
    localizacao: "Rio de Janeiro",
};
const atualizarPerfil = (informacaoDoPerfil) => {
    const { nome, idade, nacionalidade, localizacao } = informacaoDoPerfil;
    console.log(nome);
    console.log(idade);
    console.log(nacionalidade);
    console.log(localizacao);
};
atualizarPerfil(novoPerfilCliente);
// Alternativa: utilizar directamente a sintaxe de desestruturação
// na lista de parâmetros.
atualizarPerfil = ({ nome, idade, nacionalidade, localizacao }) => {
    console.log(nome);
    console.log(idade);
    console.log(nacionalidade);
    console.log(localizacao);
}
atualizarPerfil(novoPerfilCliente);
const estatisticas = {
    maximo: 56.78,
    desvioPadrao: 4.32,
    medio: 23.87,
    minimo: -0.75,
    media: 35.85
};
const metade = (e) => (e.maximo + e.minimo) / 2.0;
console.log(metade(estatisticas));
metade = ({ maximo, minimo }) => (maximo + minimo) / 2.0;
console.log(metade(estatisticas));