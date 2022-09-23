/*POO
Clases- Modelo a seguir.
Objetos- Es una instancia de una clase.
Atributos- Es una caracteristica o propiedad del objeto
(son variables dentro de un objeto).
Metodos- Son las acciones que un objeto puede realizar
(son funciones dentro de un objeto).
 */

const animal = {
    nombre: "lala",
    sonar() {
        console.log (`Mi sonido es`);
    }
}

const animal2 = {
    nombre: "bugs",
    sonar() {
        console.log (`Mi sonido es`);
    }
}

console.log (animal);
console.log (animal2);

//Función Constructora

/*function Animal(nombre, genero)  {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function ()  {
        console.log ("Mis sonidos son: ")
    }
}*/
/*Funcion Constructora donde asignamos los metodos al
prototipo, no a la funcion como tal.
*/

function Animal(nombre, genero)  {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

    //Metodos agregados al prototipo de la funcion constructora

    Animal.prototype.sonar = function ()  {
        console.log ("Mis sonidos son: ")
    }

    Animal.prototype.saludar = function ()  {
        console.log (`Hola mi nombre es ${this.nombre}`)
    }

    //Herencia Prototipica
    function Perro (nombre, genero, tamanio)  {
        this.super = Animal;
        this.super(nombre, genero);
        this.tamanio = tamanio;
    }

    //Perro esta heredando de Animal

    Perro.prototype = new Animal();
    Perro.prototype.constructor = Perro;

    //Sobreescritura de metodos del prototipo padre en el hijo

    Perro.prototype.sonar = function() {
        console.log ("Soy un perro y mi sonido es un ladrido");
    }

    Perro.prototype.ladrar = function() {
        console.log ("Guauuuu Guauuu!!!!");
    }

//const snoopy = new Animal ("snoopy", "macho"),

const snoopy = new Perro ("snoopy", "macho","mediano"),
 garfield = new Animal ("Garfield", "macho");

console.log (Perro);
console.log (garfield);
snoopy.sonar();
snoopy.ladrar();
garfield.saludar();
snoopy.saludar();
garfield.sonar();


/*Sacando los metodos del objeto creado tendremos mayor rendimiento de memoria, ya que
no se duplican cada vez que es llamado el objeto.*/