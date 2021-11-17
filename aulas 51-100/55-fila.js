// Fila em JavaScript.
function próximo(final, começo) {
  final.push(começo);    // O método push() adiciona um ou mais elementos ao final.
  return final.shift(); // O método shift() remove o primeiro elemento.
}
var ordem = [1,2,3,4,5];
console.log("Antes " + JSON.stringify(ordem));
console.log(próximo(ordem , 6));
console.log("Depois " + JSON.stringify(ordem));




