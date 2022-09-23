class Animal {
    //El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor ( nombre, genero)  {
        this.nombre = nombre;
        this.genero = genero;
    }
    //Metodos
    sonar ()  {
        console.log ("Mis sonodos son fuertes");
    }
    saludar ()  {
        console.log (`Hola me llamo ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor (nombre, genero, tamanio)  {
        //Con el metodo super se manda llamar el constructor d ela clase padre.
        super (nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }
    sonar () {
        console.log ("Soy un perro y mi sonido es un ladrido");
    }
    ladrar () {
        console.log ("Guauuu Guauuuu");
    }
    //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
    static queEres()  {
        console.log ("Los perros son mamiferos considerados los mejores amigos del hombre");
    }
    //Loa setters y los getters son metodos especiales que nos permiten establecer y obtener
    //los valores de atributos de nuestra clase.

    get getRaza()  {
        return this.raza;
    }
    set setRaza(raza)  {
        this.raza = raza;
    }
}

Perro.queEres();
const mimi = new Animal("Mimi","Hembra"),
scooby = new Perro("Scooby","Macho", "Gigante");

console.log (mimi);
mimi.saludar();
mimi.sonar();
console.log (scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log (scooby.getRaza);








