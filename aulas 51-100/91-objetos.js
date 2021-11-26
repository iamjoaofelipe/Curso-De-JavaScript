// Objetos em JavaScript.
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
        "tipo": "Frango",
        "tamanho": "grande",
        "preço": 10.34,
        "cobertura": [
            "frango",
            "catupiry",
            "azeite",
        ],
        "viagem": false
    }
];
console.log(pedidosDePizza[0]);
console.log(pedidosDePizza[1]);
console.log(pedidosDePizza[0].preço);
console.log(pedidosDePizza[0]["tipo"]);

    
    

    