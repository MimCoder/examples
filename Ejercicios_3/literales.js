let nombre = "melon";
let edad = 5;

const gato = {
    nombre: nombre,
    edad: edad,
    maullar: function() {
        console.log ("miau miau");
    }
}

console.log (gato);
gato.maullar();

const dog = {
    nombre,
    edad,
    raza: "mestizo",
    ladrar: function() {
        console.log ("guauuu guauuu")
    }
}

console.log (dog);
dog.ladrar();