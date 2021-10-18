// Argomentos me JavaScript.

function somar(a, b) {
    soma = a + b;
    console.log("O resultado de " + a + " + " + b + " é : " + soma);

}

somar(5, 3);
somar(8, 9);
somar(2, 4);
somar(5, 5);

// Podemos passar variáveis como argumentos
// e os seus nomes não têm de ser os mesmos que os
// parâmetros.

var x = 5;
var y = 3;
somar(x, y);

// Exemplo

function concatenarTresCadeias(cadeia1, cadeia2, cadeia3) {
    console.log(cadeia1 + " " + cadeia2 + " " + cadeia3);

}
concatenarTresCadeias("Estou", "aprendendo", "a programar");
