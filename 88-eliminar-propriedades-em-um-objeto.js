// Eliminar propriedades em um objeto em JavaScript.

var curso = {

"titulo": "Aprender JavaScript do zero", 
"idioma": "português", 
"duração": 30

};

console.log(curso.duração); // 30
delete curso.duração;
console.log(curso.duração); // indefinido

console.log(curso.idioma); // português
delete curso.idioma;
console.log(curso.idioma); // indefinido
