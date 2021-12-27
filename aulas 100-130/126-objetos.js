// Criar objetos de forma concisa em JavaScript.
const criarPersonagem = (nome, idade, idioma) => {
    return {
        nome: nome,
        idade: idade,
        idioma: idioma,
    };
};
console.log(criarPersonagem("Joao", 26, "Portugues"));
const OutroPersonagem = (nome, idade, idioma) => ({ nome, idade, idioma });
console.log(criarPersonagem("Bruno", 38, "Portugues"));