// Código de Golfe em JavaScript

/*
Golpes             Retornar
-------------------------------
1	               "Hole-in-one!"
<= par - 2	       "Eagle"
par - 1	           "Birdie"
par	               "Par"
par + 1	           "Bogey"
par + 2	           "Double Bogey"
>= par + 3	       "Go Home!"

*/

function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
      return "Hole-in-one!";
    } else if (golpes <= par - 2) {
      return "Eagle";
    } else if (golpes == par - 1) {
      return "Birdie";
    } else if (golpes == par) {
      return "Par";
    } else if (golpes == par + 1) {
      return "Bogey";
    } else if (golpes == par + 2) {
      return "Double Bogey";
    } else if (golpes >= par + 3) {
      return "Go Home!";
    }
  }
  
  // exemplo console.log(puntajeDeGolf(4, 1));  // Hole-in-one! 
  
  puntajeDeGolf(4, 1);  // Hole-in-one!
  puntajeDeGolf(4, 2);  // Eagle
  puntajeDeGolf(4, 3);  // Birdie
  puntajeDeGolf(4, 4);  // Par
  puntajeDeGolf(4, 5);  // Bogey
  puntajeDeGolf(4, 6);  // Double Bogey
  puntajeDeGolf(4, 7);  // Go Home!
  puntajeDeGolf(4, 15); // Go Home!