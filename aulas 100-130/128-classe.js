// Classe em JavaScript.
class funcionario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

var novoFuncionario = new funcionario("Bruno", 38);
console.log(novoFuncionario.nome);
console.log(novoFuncionario.idade);