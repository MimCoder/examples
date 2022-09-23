/* 18.- Programa una funcion que dada una cadena de texto cuente el numero de vocales
y consonantes, pe miFuncion ("Hola mUNDO") devuelve vocales 4, consonantes 5. */

const contarLetras = (cadena = "") =>  {
    if (!cadena) return console.warn ("No ingresaste una cadena de texto");

    if (typeof cadena !== "string") return console.error (`El valor ${cadena} ingresado, No es una cadena de texto`)

    //Creamos dos variables y las inicializamos en 0. En la linea 15 la cadena original la igualamos a una 
    //cadena con todas sus letras minusculas, y simplificar la expresion regular.

    let vocales = 0,
    consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    /*Utilizamos un for of para iterar dentro de cada letra de la cadena, en el primer if la expresion regular
    .test nos permite evaluar el tipo de letra que queremos, estas se representan dentro de la expresion
    regular dentro de corchetes pues es un arreglo. Y asi ir aumentando el contador de ambas variables. */

    for (let letra of cadena) {
        if (/[aeiouáéíóúÜ]/.test(letra)) vocales ++;

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes ++;
        
    }
    /*Retornamos el resultado en un objeto con la cadena original, un atributo llamado vocales con 
    el valor de las vocales y otro atibuto del objeto llamado consonantes con el valor de las consonates.  */
   
    return console.info ({
        cadena:cadena,
        vocales:vocales,
        consonantes:consonantes
    })

}
contarLetras ();
contarLetras (2);
contarLetras ("Buenos Dias");
contarLetras ("En las escaleras estaba la salida pero nunca subio.");

/* 19.- Progrma una funcion que valide que un texto sea un nombre valido. pe miFuncion ("Adriana Noemi") 
devolvera verdadero.*/

const validarNombre = (nombre = "") =>  {
    if (!nombre) return console.warn ("No ingresaste un nombre");

    if(typeof nombre !== "string") return console.error (`El valor ${nombre} ingresado, No es una cadena de texto`);

    /*Vamos a declarar una expresion regular, ocuparemos el simbolo ^ que significa que no puede haber 
    nada ANTES de la expresion, y el $ que significa que no puede haber nada DESPUES de la expresion a 
    validar, los [] son agrupadores y el signo de + que evalua cada caracter que tiene la cadena de texto,
    la \s minuscula acepta los espacios en blanco y por ultimo agregamos el g.test para evalua la expresion
    dentro de la variable nombre.*/
   
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúüÜ\s]+$/g.test (nombre);
    
    return (expReg)
    ? console.info(`${nombre} es un nombre valido`)
    : console.warn (`${nombre}, No es un nombre valido`);
}

validarNombre ();
validarNombre (true);
validarNombre ("Adriana Noemi");
validarNombre ("Diego Toño");
validarNombre ("Samano") ;


