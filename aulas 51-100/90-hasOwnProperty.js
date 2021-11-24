// hasOwnProperty em JavaScript.
var meuCaderno = {
"cor": "verde",
"categoria": 3,
"preço": 4.56,
};
console.log(meuCaderno.hasOwnProperty("cor")); // true.
console.log(meuCaderno.hasOwnProperty("origem")); // false.
// exemplo.
function verificarPropriedade( obj , propriedades){
    if (obj.hasOwnProperty.propriedades) { 
        return "propriedades: " + obj[propriedades];
    } else{
      return "Esse objeto não tem na propriedade.";    
    }
    }
    console.log(meuCaderno.hasOwnProperty("cor")); // true.
    console.log(meuCaderno.hasOwnProperty("origem")); // false.
    
  


