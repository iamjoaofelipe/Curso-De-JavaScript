// Classe em JavaScript.
class Livro {
    constructor(autor) {
            this._autor = autor;
        }
        // obter
    get autor() {
            return this._autor;
        }
        //
    set autor(novoAutor) {
        this._autor = novoAutor;
    }
}
const livro = new Livro("desconhecido");
console.log(livro.autor);
livro.autor = "Joao";
console.log(livro.autor);