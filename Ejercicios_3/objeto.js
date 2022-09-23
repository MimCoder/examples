const c = new Object();
console.log (c);

/*dentro de un objeto a las variables se les va a llamar ATRIBUTOS/PROPIEDADES 
y a las  funciones se les llama MÉTODOS */

const mimi = {
    nombre: "Adriana",
    apellido: "de la cruz",
    edad: 30,
    pasatiempos: ["correr","programar","jugar basquetbol"],
    soltera: false,
    contacto: {
        email: "adriana@",
        movil:7221449876,
    },
    saludar:function() {
        console.log ("Hola")
    },
    saludoDos: function() {
        console.log (`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir a travez de ${this.contacto.email} mi correo electronico.`)
    }
}
 
console.log (mimi);
console.log (mimi["nombre"]);
console.log (mimi["apellido"]);
console.log (mimi.nombre);
console.log (mimi.apellido);
console.log (mimi.edad);
console.log (mimi.soltera);
console.log (mimi.pasatiempos);
console.log (mimi.pasatiempos[1]);
console.log (mimi.contacto);
console.log (mimi.contacto.movil);
mimi.saludar();
mimi.saludoDos();

console.log(Object.keys(mimi));
console.log(Object.values(mimi));
console.log(mimi.hasOwnProperty("nombre"));
console.log(mimi.hasOwnProperty("nacimiento"));