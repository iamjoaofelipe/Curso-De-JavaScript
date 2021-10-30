// Encadear instruções if else em JavaScript.

function interpretarIMC(indiceMassaCorporal) {
    if (indiceMassaCorporal < 18.5) {
        console.log("Abaixo do peso.");
    } else if (indiceMassaCorporal <= 24.9){
        console.log("Normal.");
    }else if (indiceMassaCorporal <= 29.9) {
        console.log("Acima do peso.");
    } else {
        console.log("Obeso");
    }
}

interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);