// Adiciona novas propriedades a um objeto JavaScript. 

var curso = {

"título": "Aprender JavaScript do zero",
"idioma": "português", 
"duração": 30
};

// notação de ponto

console.log(curso.vistas); // indefinido
curso.vistas = 34500;
console.log(curso.vistas);

// notação de colchetes

curso ["vistas"] = 34500;
console.log(curso.vistas); 

