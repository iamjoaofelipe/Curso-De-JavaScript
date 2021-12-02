// "for" em JavaScript.
var meuArray = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i < meuArray.length; i++) {
    total += meuArray[i];
}
console.log(total);
// exemplo 2.
var linguagemDeProgramação = ["JavaScript", "Python", "Java", "C++"];
for (var i = 0; i < linguagemDeProgramação.length; i++) {
    console.log(linguagemDeProgramação[i].toUpperCase()); // letras maiúsculas.
}
function contarNumerosPares(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            total++;
        }
    }

    return total;
}
console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 3, 1, 2]));
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));

