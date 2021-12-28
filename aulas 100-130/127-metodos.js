// Métodos em JavaScript.
// Versão ES6
const pessoa = {
    nome: "Leandro",
    apresentacao() {
        return ` Oi, meu nome e ${this.nome}.`;
    }
};
console.log(pessoa.apresentacao());