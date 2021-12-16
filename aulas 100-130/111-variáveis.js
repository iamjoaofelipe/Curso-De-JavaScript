// var e let em JavaScript.
var minhaVariavelGlobal = 4;
console.log(minhaVariavelGlobal);

function minhaFuncao() {
    console.log(minhaVariavelGlobal);
}
var minhaVariavelLocal = 8;
console.log(minhaVariavelLocal);
minhaFuncao();
console.log(minhaVariavelGlobal);
console.log(minhaVariavelLocal);
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i); //Nenhum erro
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);
// Exemplo com let
var mostrarCor = "true";
if (mostrarCor) {
    let cor = "verde";
    console.log("A minha cor favorita é: " + cor);
}
//console.log(cor); // error
// Exemplo com var
if (mostrarCor) {
    var cor = "verde";
    console.log("A minha cor favorita é: " + cor);
}
console.log(cor);