// Verificar as propriedades de um objeto em JavaScript.

var meuCaderno = {
    "cor": "verde",
    "categoria": 3,
    "preço": 4.56
};

console.log(meuCaderno.hasOwnProperty("cor")); // true
console.log(meuCaderno.hasOwnProperty("origem")); // false

// exemplo

function verificarPropriedade(obj, propriedade) {
    if (obj.hasOwnProperty(propriedade)) {
        return "propriedade: " + obj[propriedade];

    } else {
        return " Esse objeto não tem na propriedade";
    }
}

console.log(verificarPropriedade(meuCaderno, "cor"));
console.log(verificarPropriedade(meuCaderno, "origem"));