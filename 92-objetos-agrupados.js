// objetos agrupados em JavaScript.

var minhaReceita = {
    "descrição": "meu poste favorito",
    "preço": 15.6,
    "ingredientes": {
        "massa": {
            "margarina": "100 gramas",
            "sal": "1 colher",
            "agua": "1 colher"
        },
        "cobertura": {
            "açucar": "120 grs",
            "chocolate": "4 colheres",
            "manteiga": "200 gramas"

        }
    }
};

console.log(minhaReceita.descrição);
console.log(minhaReceita.preço);
console.log(minhaReceita.ingredientes);

console.log(minhaReceita.ingredientes.massa);

console.log(minhaReceita.ingredientes.massa.margarina);
console.log(minhaReceita.ingredientes.massa.sal);
console.log(minhaReceita.ingredientes.massa.agua);

console.log(minhaReceita.ingredientes.massa["margarina"]);
console.log(minhaReceita.ingredientes.massa["sal"]);
console.log(minhaReceita.ingredientes.massa["agua"]);

console.log(minhaReceita.ingredientes.cobertura);

console.log(minhaReceita.ingredientes.cobertura.açucar);
console.log(minhaReceita.ingredientes.cobertura.chocolate);
console.log(minhaReceita.ingredientes.cobertura.manteiga);













