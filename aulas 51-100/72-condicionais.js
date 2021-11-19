// Condicionais, ordem lógica em Javascript.
function classificarValor(valor) {
    if (valor < 5) {
        console.log("Menor que 5.");
    } else if (valor < 10) {
        console.log("Maior que 10.");
    } else {
        console.log("Maior ou igual a 10.");
    }
}
classificarValor(4);
classificarValor(10);
classificarValor(11);
