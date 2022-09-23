const numeros = [1,2,3];

//Sin destructuracion

let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log (uno,dos,tres);

//Con destructuracion

const [one, two, three] = numeros;
console.log (one, two, three);

const persona = {
    nombre: "mimi",
    apellido: "vargas",
    edad: 30
}

let{nombre, apellido, edad} = persona;
console.log (nombre, apellido, edad);

/*La destructuracion nos ayuda para que cada elemento de un arreglo o de un objeto se vuelva una variable. */