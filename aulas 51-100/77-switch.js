// Switch em JavaScript.
function classificarVolume(valor) {
    var volume;
    switch (valor) {
        case 1:
            volume = "Baixo.";
            break;
        case 2:
        case 3:
            volume = "Médio.";
            break;
        case 4:
        case 5:
        case 6:
            volume = "Alto.";
            break;
    }
    return volume;
}
console.log(classificarVolume(1));
console.log(classificarVolume(3));
console.log(classificarVolume(5));