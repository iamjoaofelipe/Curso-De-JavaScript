// Setenças switch multiplos casos em JavaScript.

function classificarVolume(valor) {
    var volume;
    switch (valor) {
        case 1:
            volume = "baixo";
            break;
        case 2:
        case 3:
            volume = "médio";
            break;
        case 4:
        case 5:
        case 6:
            volume = "alto";
            break;
    }
    return volume;
}

console.log(classificarVolume(1));
console.log(classificarVolume(3));
console.log(classificarVolume(5));