// Swith em JavaScript.
function classificarValor(valor) {
  var resposta;
  switch (valor) {
    case 1:
      resposta = "Alfa";
      break;
    case 2:
      resposta = "Beta";
      break;
    case 3:
      resposta = "Gama";
      break;
    case 4:
      resposta = "Delta";
      break;
  }
   return resposta;
}
console.log(classificarValor(1));
console.log(classificarValor(2));
console.log(classificarValor(3));
console.log(classificarValor(4));
//exemplo.
var produtos = "pizza";
switch (produtos) {
  case "pizza":
    console.log("o valor da pizza é R$ 10.55 Reais");
    break;
  case "hamburguer":
    console.log("O valor do hamburguer é R$ 6.78 Reais");
    break;
  case "Refrigerante":
    console.log("O valor do refrigerante é R$ 2.8 Reais");
    break;
}