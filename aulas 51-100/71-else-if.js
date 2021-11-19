// "else-if" , condicionais em JavaScript.
function classificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("Divisível por 2.");
    } else if (valor % 3 == 0) {
        console.log("Divisível por 3.");
    } else {
        console.log("Não é divisível entre as opções.");
    }
}
classificarValor(10);
classificarValor(15);
classificarValor(7);
