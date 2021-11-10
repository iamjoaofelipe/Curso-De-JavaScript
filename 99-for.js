// trabalhando com "for" em JavaScript.

// exemplo 1 

var meuArray = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < meuArray.length; i++) {
    total += meuArray[i];
}

console.log(total);

// exemplo 2

var linguagemDeProgramação = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < linguagemDeProgramação.length; i++) {
    console.log(linguagemDeProgramação[i].toUpperCase());
}

// Ejemplo

function contarNumerosPares(acordo) {
    var total = 0;
    for (var i = 0; i < acordo.length; i++) {
        if (acordo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 3, 1, 2]));
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));