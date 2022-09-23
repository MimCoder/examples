/*Programa una funcion que invierta las palabras de una cadena de texto.
Ejemplo miFuncion ("hola mundo") devolvera odnum aloh. */

const invertirCadena = (cadena = "") =>
(!cadena)
?console.warn ("No ingresaste una cadena de texto")
:console.info (cadena.split("").reverse().join(""));

invertirCadena ();
invertirCadena ("hola mundo");
invertirCadena ("Adriana Noemi de la Cruz Vargas");




/*Programa una funcion para contar el numero de veces que se repite una palabra en un texto 
largo. Ejemplo ("Hola mundo, adios mundo"), devolvera dos. */

const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn ("No ingresaste cadena de texto");
    
    if (!texto) return console.warn ("No ingresaste l apalabra a evaluar");

    let i = 0,
    contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1)  {
            i++;
            contador++;
        }
    }
    return console.info (`La palabra ${texto} se repite ${contador} veces`);
}

textoEnCadena ();
textoEnCadena ("amor amor amor como estas");
textoEnCadena ("","amor");
textoEnCadena ("amor amor amor como estas", "amor");
textoEnCadena ("la la lara la la lara la la la lal", "la");




/*Programa una funcion que valide si una palabra o frase dada es un palíndromo (que se lee igual
    de un sentido y del otro) pe miFuncion ("salas") devolvera true. */

    const palindromo = (palabra = "") => { 
        if (!palabra) return console.warn ("No ingresaste una palabra o frase");

        palabra === palabra.toLowerCase();
        let alReves = palabra.split("").reverse().join("");

        return (palabra === alReves)
        ?console.info (`Si es palindromo, palabra original ${palabra} palabra al reves ${alReves}`)
        :console.info (`No es  es palindromo, palabra original ${palabra} palabra al reves ${alReves}`);
    }

    palindromo ();
    palindromo ("como te llamas");
    palindromo ("SALAS");
    palindromo ("SaLaS");




    /*Programa una funcion que elimine cierto patron de caracteres de un texto dado 
    pe. miFuncion "xyz1, xyz2, xyz3. xyz4. xyz5. xyz" devolvera 1,2,3,4,5 .*/

    const eliminarCaracteres = (texto = "", patron = "") => 
    (!texto)
    ?console.warn ("No ingresaste texto")
    :(!patron)
    ?
    console.warn ("No ingresaste un patron de caracteres")
    :console.info (texto.replace(new RegExp(patron,"ig"),""));

    eliminarCaracteres ();
    eliminarCaracteres ("xyz1,xyz2,xyz3,xyz,4,xyz5");
    eliminarCaracteres ("xyz1,xyz2,xyz3,xyz,4,xyz5","xyz");
    eliminarCaracteres ("xyz1,xyz2,xyz3,xyz4,xyz5","xy");
    eliminarCaracteres ("Adriana noemi vargas","a");
    /*Al usar una expresion regular RegExp, donde se le envia el valor a evaluar y dos datos banderas
    ig i evita que distinga entre minusculas y mayusculas y g significa que no se detiene en la primera 
    concidencia, va a ejecutar todas las concidencias que encuentre.*/

    eliminarCaracteres ("En la mañana, cuando, sale el sol. Todos despiertan","[a-z]");

    /*El metodo split vuelve una palabra en un arreglo de caracteres,
    y join es otro metodo que nos permite volver a unir la palabra, ambos reciben un separador
    de parametro pero no les enviamos separador solo las comillas sin espacio. */
    