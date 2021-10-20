// Filas
// Estruturas de dados em JavaScript
// Preciso estudar mais sobre isso


function próximoDaFila(acordo, elemento) {
  acordo.push(elemento);
  //
return acordo.shift(); //
}
var meuAcordo = [1,2,3,4,5];
console.log("Antes: " + JSON.stringify(meuAcordo));
console.log(próximoDaFila(meuAcordo,6));
console.log("Depois: " + JSON.stringify(meuAcordo));