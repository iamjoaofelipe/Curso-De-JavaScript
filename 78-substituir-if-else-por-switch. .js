// Substituir if...else por switch em JavaScript.

function selecionarIdioma(valor) {
    var idioma;
    if (valor == 1) {
        idioma = "Espanhol";

    } else if (valor == 2) {
        idioma = "Francês";
    } else if (valor == 3) {
        idioma = "Italiano";
    } else {
        idioma = "Inglês";

    }
    return idioma;
}

console.log(selecionarIdioma(1));
console.log(selecionarIdioma(2));
console.log(selecionarIdioma(3));

// Foi Substituída por switch

/*
switch (valor) {
    case 1:
        idioma = "Espanhol";
        break;
    case 2:
        idioma = "Francês";
        break;
    case 3:
        idioma = "Italiano";
        break;

    default:
        idioma = "Inglês";
        break;
}
return idioma;

*/