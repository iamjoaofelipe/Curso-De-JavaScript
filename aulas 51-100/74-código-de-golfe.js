/* Código de Golfe em JavaScript.
No jogo de golfe, cada buraco tem um par. Um par é o 
número médio de tacadas que um jogador de golfe deve dar 
para colocar a bola no buraco e completar a jogada. 
Dependendo de quantos golpes você deu, há um nome diferente.
O objetivo da função é retornar esses nomes dependendo de quantas
tacadas o jogador deu para colocar a bola no buraco.
Golpes             Retornar
-------------------------------
1	               "uma-no-buraco!"
<= par - 2	       "Águia"
par - 1	           "Pássaro"
par	               "Par"
par + 1	           "Marcando acima do par"
par + 2	           "Marcando em cima do par novamente"
>= par + 3	       "ir para casa!"
*/
function pontuaçãoDoJogo(par, golpes) {
    if (golpes == 1) {
        return "uma-no-buraco!";
    } else if (golpes <= par - 2) {
        return "Águia";
    } else if (golpes == par - 1) {
        return "Pássaro";
    } else if (golpes == par) {
        return "par";
    } else if (golpes == par + 1) {
        return "marcando em cima";
    } else if (golpes == par + 2) {
        return "marcando em dobro";
    } else if (golpes >= par + 3) {
        return "vá para casa.";
    }
}
console.log(pontuaçãoDoJogo(4,1));
console.log(pontuaçãoDoJogo(4,2));
console.log(pontuaçãoDoJogo(4,3));
console.log(pontuaçãoDoJogo(4,4));
console.log(pontuaçãoDoJogo(4,5));
console.log(pontuaçãoDoJogo(4,6));
console.log(pontuaçãoDoJogo(4,7));
console.log(pontuaçãoDoJogo(4,15));