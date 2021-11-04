// contar cartas em JavaScript.

/*

No jogo de cassino de Blackjack, o jogador pode tirar proveito da casa por 
vantagem para a casa, mantendo o controle do número relativo de cartões altos e baixos
de cartas altas e baixas deixadas no baralho. 
Isto é chamado de "contagem de cartas".
Ter mais cartas altas no baralho é uma vantagem para o jogador. 
jogador. A cada cartão é atribuído um valor de acordo com a tabela a seguir. 
a seguinte tabela. 
- Quando a contagem é positiva, o jogador deve apostar alto. 
- Quando a contagem for 0 ou negativa, o jogador deve apostar baixo.

Isto é chamado de "contagem de cartas".
Ter mais cartas altas no baralho é uma vantagem para o jogador. 
jogador.
A cada cartão é atribuído um valor de acordo com a tabela a seguir. 
a seguinte tabela. 
- Quando a contagem é positiva, o jogador deve apostar alto. 
- Quando a contagem for 0 ou negativa, o jogador deve apostar baixo.
Mudando a contagem do cartão

Cambio del conteo	     Cartas
---------------------------------------------
+1	                  2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                  10, 'J', 'Q', 'K', 'A'


Nosso objetivo é definir uma função para contar cartões. 
A função deve assumir um parâmetro de letra que pode ser 
um número ou um fio e depois aumentar ou diminuir o valor do 
ou diminuir o valor da contagem global de variáveis 
de acordo com o valor da carta (ver tabela). 
A função deve retornar um fio contendo a contagem de corrente e o fio 
contagem de corrente e o fio:
- "Aposta" se a contagem for positiva.
- Esperar" se a contagem for zero ou negativa. 
A contagem atual e a decisão do jogador 
("Bet" ou "Wait") deve ser separado por um espaço.
*/

var contar = 0;

function contarCartas(cartas) {
    var decisão;
    switch (cartas) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            contar++;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            contar--;
            break;
    }



    if (contar > 0) {
        decisão = "apostar"
    } else {
        decisão = "esperar";

    }
    return contar + " " + decisão;

}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("J"));
console.log(contarCartas("K"));
console.log(contarCartas("A"));



