// Swith em JavaScript.
function selecionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Espanhol.";
            break;
        case 2:
            idioma = "Francês.";
            break;
            case 3:
                idioma = "Italiano.";
                break;
                case 2:
        default:
            idioma = "Inglês.";
            break;
    }
 return idioma;
}
console.log(selecionarIdioma(1));
console.log(selecionarIdioma(2));
console.log(selecionarIdioma(3));
console.log(selecionarIdioma(10));