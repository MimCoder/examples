/*1.-Realizar una función que devuelva el texto recortado según el número de caracteres indicados.
Por ejemplo mifunción ("El sol salio maravillosamente", 8) devolvera El sol sal */

const recortarOracion =(cadena="", longitud = undefined) =>
(!cadena)?console.warn ("No ingrsaste cadena de texto")
:(longitud === undefined)
?console.warn ("No se ha especificado el número de carateres")
:console.info (cadena.slice(0, longitud));

//recortarOracion ("La luna cayo", 2);
//recortarOracion ("",5);
//recortarOracion ("mimi mimi")
//recortarOracion ();



/** 2.-Crear una función que recibira un string o cadena de texto y devuelva un array de textos separados por cierto caracter.
 * Por ejemplo (función "hola que tal") devolvera (hola, que, tal, 3).
*/

const cadenaAArreglo = (cadena= "", separador= undefined) =>
(!cadena)? console.warn ("No ingresaste una cadena de texto")
:(separador === undefined)
?console.warn 
("No se ha especificado el caracter separador")
:console.info (cadena.split(separador));

//cadenaAArreglo ("Las carreteras de la ciudad tienden a tener mas baches que las carreteras de campo es poe ello que son mas peligrosas y tienden a correrse muchos peligros", " ");
//cadenaAArreglo ("lunes, martes, miercoles, jueves, viernes, sabado , domingo", ",");
//cadenaAArreglo ("yo+tu+el+ellos+nosotros","+");
//cadenaAArreglo (""," ");
//cadenaAArreglo ("Buenos diías joven");
//cadenaAArreglo ("Los pajaritos que cantan en el dia son mas risueños que lso que no","a");



/* Progrma una funcion que repita un texto X número de vesces. Por ejemplo (Hola, 3), regresará (Hola, Hola, Hola)*/

const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) {
        return console.warn ("No ingresaste un texto");
    }
    if (veces === undefined) return console.warn ("No ingresastes las veces que se tiene que repetiir el texto");

    if (veces === 0) return console.error ("El número de veces no puede ser 0"); 

    if (Math.sign(veces) === -1) {
        return console.error ("El número de veces no puede ser negativo");
    }

        for (let i = 1; i<=veces; i++) console.info (`${texto},${i}`); 
}

repetirTexto ("la lo li", 5);
repetirTexto ("", 2);
recortarOracion ("gato, perro, raton");
repetirTexto ("los ji jaj ja", 0);
repetirTexto ("tu toti tro", -3);