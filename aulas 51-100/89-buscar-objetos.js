// Buscar objetos em JavaScript.
function buscarElementosQuimicos(simbolos) {
    var elementosQuimicos = "";
    switch (simbolos) {
        case "al":
            elementosQuimicos = "Aluminio.";
            break;
        case "s":
            elementosQuimicos = "Enxofre.";
            break;
        case "cl":
            elementosQuimicos = "Cloro.";
            break;
        case "he":
            elementosQuimicos = "Helio.";
            break;
        case "b":
            elementosQuimicos = "Boro.";
            break;
        case "li":
            elementosQuimicos = "Litio.";
            break;
    }
    return elementosQuimicos;
}
console.log(buscarElementosQuimicos("al"));
console.log(buscarElementosQuimicos("s"));
console.log(buscarElementosQuimicos("cl"));
console.log(buscarElementosQuimicos("he"));
console.log(buscarElementosQuimicos("b"));
console.log(buscarElementosQuimicos("li"));
// podemos mudar swith por um objeto.
function buscarElementosQuimicos(simbolos) {
    var simbolosQuimicos = {
        "al": "Aluminio",
        "s": "Enxofre",
        "cl": "cloro",
        "he": "helio",
        "b": "boro",
        "li": "Litio",
    };
 return simbolosQuimicos[simbolos];
}
console.log(buscarElementosQuimicos("al"));
console.log(buscarElementosQuimicos("s"));
console.log(buscarElementosQuimicos("cl"));
console.log(buscarElementosQuimicos("he"));
console.log(buscarElementosQuimicos("b"));
console.log(buscarElementosQuimicos("li"));



