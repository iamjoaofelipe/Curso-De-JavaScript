// Sintaxe de desestruturação , objetos em JavaScript.
const usuario = {
    nome: "Joao",
    idade: 26
};
// Forma anterior de atribuir propriedades a variáveis.
const nome = usuario.nome;
const idade = usuario.idade;
// em ES6
// const { nome, idade } = usuario;
// exemplo.
var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};
var x = coordenadas.x;
var x = coordenadas.y;
var x = coordenadas.z;
// Agora podemos usar a sintaxe de desestruturação.
var { x, y, z } = coordenadas;
console.log(x);
console.log(y);
console.log(z);