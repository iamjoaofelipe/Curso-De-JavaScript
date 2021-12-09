// Função em JavaScript.
function Aleatório(limiteInferior, limeteSuperior) {
    return Math.floor(Math.random() * (limiteInferior - limeteSuperior + 1)) + limiteInferior;
}
console.log(Aleatório(3, 8));
for (var i = 0; i < 15; i++) {
    console.log(Aleatório(3, 8));
}