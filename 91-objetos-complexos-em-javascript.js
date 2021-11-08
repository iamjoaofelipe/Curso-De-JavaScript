// objetos complexos em JavaScript.

var pedidosDePizza = [
    {
        "tipo": "mussarela",
        "tamanho": "pequena",
        "preço": 5.99,
        "cobertura": [
            "queijo",
            "ovo",
            "cebola",
        ],
        "viagem": true
    },

    {
        "tipo": "franco com catupiry",
        "tamanho": "grande",
        "preço": 10.34,
        "cobertura": [
            "frango",
            "catupiry",
            "azeitona",
        ],
        "viagem": false
    }
];

console.log(pedidosDePizza[0]);
console.log(pedidosDePizza[1]);

console.log(pedidosDePizza[0].preço);
console.log(pedidosDePizza[0]["tipo"]);

console.log(pedidosDePizza[0].preço);
console.log(pedidosDePizza[0]["preço"]);

// vou adicionar outra pizza

var pedidosDePizza = [
    {
        "tipo": "morango",
        "tamanho": "pequena",
        "preço": 4.99,
        "cobertura": [
            "morango",
            "leite condensado",
        ],
        "viagem": false
    },
    {
        "tipo": "ovo",
        "tamanho": "pequena",
        "preço": 4.99,
        "cobertura": [
            "ovo",
            "cebola",
        ],
        "viagem": false
    },
    {
        "tipo": "banana",
        "tamaño": "grande",
        "preço": 60.00,
        "cobertura": [],
        "viagem": true
    }
];

console.log(pedidosDePizza[1]);
console.log(pedidosDePizza[2]);
