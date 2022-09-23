var hola = "Hola mundo";
console.log (hola);

console.log ("***********var**************");
var musica = "rock";
console.log ("Variable Musica antes del Bloque", musica);
//Esto es un bloque

{
var musica = "pop";
console.log ("Variable Musica Dentro del Bloque", musica);
}

console.log("Variable Musica despues del Bloque", musica);

console.log ("***********let**************");

let musica2 = "rock";
console.log ("Variable Musica antes del Bloque", musica2);
//Esto es un bloque

{
let musica2 = "pop";
console.log ("Variable Musica Dentro del Bloque", musica2);
}

console.log("Variable Musica despues del Bloque", musica2);