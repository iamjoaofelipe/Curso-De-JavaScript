// Buscar objetos em JavaScript.

function buscarElementosQuimicos(simbolo) {
    var elementoQuimico = "";

    switch (simbolo) {
        case "al":
            elementoQuimico = "aluminio";
            break;
        case "s":
            elementoQuimico = "enxofre";
            break;
        case "cl":
            elementoQuimico = "cloro";
            break;
        case "he":
            elementoQuimico = "helio";
            break;
        case "b":
            elementoQuimico = "boro";
            break;
        case "li":
            elementoQuimico = "litio";
            break;


    }
    return elementoQuimico;

}

console.log(buscarElementosQuimicos("al")); 
console.log(buscarElementosQuimicos("s")); 
console.log(buscarElementosQuimicos("cl")); 
console.log(buscarElementosQuimicos("he")); 
console.log(buscarElementosQuimicos("b")); 
console.log(buscarElementosQuimicos("li")); 

/* podemos mudar swith por um objeto.

function buscarElementosQuimicos(simbolo) {
    
    var simbolosQuimicos = {
    "al": "aluminio",
    "s": "enxofre",
    "cl": "cloro",
    "he": "helio",
     "b": "boro",
     "li": "litio", 
    
    };

 return simbolosQuimicos[simbolo];

}

console.log(buscarElementosQuimicos("al")); 
console.log(buscarElementosQuimicos("s")); 
console.log(buscarElementosQuimicos("cl")); 
console.log(buscarElementosQuimicos("he")); 
console.log(buscarElementosQuimicos("b")); 
console.log(buscarElementosQuimicos("li"));  
*/
