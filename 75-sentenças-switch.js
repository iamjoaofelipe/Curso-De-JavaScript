/* Sentenças switch em JavaScript.

A condicional switch avalia uma expressão, combinando o valor 
da expressão para um cláusula case, e executa as instruções
associadas ao case.
*/

function clasificarValor(valor) {
    var resposta;
    switch (valor) {
      case 1:
        resposta = "alfa";
        break;
      case 2:
        resposta = "beta";
        break;
      case 3: 
      resposta = "gama";
        break;
      case 4:
        resposta = "delta";
        break;   
    }
    return resposta;
  }
  
  clasificarValor(1);
  clasificarValor(2);
  clasificarValor(3);
  clasificarValor(4);
  
  // Exemplo
  
  var produtos= "hamburguer";
  
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