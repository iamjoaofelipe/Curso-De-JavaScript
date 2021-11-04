// Propriedades de acesso: notação de parênteses em JavaScript

var meuCaderno = {
    "cor": "verde",
    "categoria": 3,
    "número de páginas": 200,
    "número de horas": 100
  };
  
  console.log(meuCaderno["cor"]); // Notação de colchetes
  console.log(meuCaderno.cor);    // Notação de pontos
  
  console.log(meuCaderno["número de páginas"]); // Notação de colchetes
  // console.log(meuCaderno.numero de paginas); // Não funciona porque tem espaços
  
  // Modificações possíveis
  
  // camelCase (mais comum)
  var meuCaderno = {
    "cor": "verde",
    "categoria": 3,
    "númeroDePaginas": 200,
    "númeroDeHoras": 100
  };
  
  console.log(meuCaderno.numeroDePáginas);
  console.log(meuCaderno.númeroDeHoras); 

  