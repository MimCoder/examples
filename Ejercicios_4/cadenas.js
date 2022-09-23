//Utilizacion de las funciones expresadas en una variable.

/* 1.-Progrma un funcion que ecuente el numero de caracteres de una 
cadena de texto. Por ejemplo miFuncion ("Hola mundo") devolvera 10 */

function contarCaracteres (cadena = "")  {
    if (!cadena)  {
        console.warn ("No ingresaste ninguna cadena");
      } else  {
          console.info (`La cadena ${cadena} tiene ${cadena.length} caracteres`);

    }
}

/*Las array function tienen el return implicito, mientras que las condicionales ternarias
son las if en una sola linea si*/

const contarNumeroDeCaracteres = (cadena = "") =>
(!cadena)? 
console.warn ("No ingresaste ninguna cadena")
: 
console.info (`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres ();
contarCaracteres ("Hola como estas Mimi");
contarCaracteres ("Los numeros 2 + 2 son = a 4");
contarCaracteres ("son como", 3, 2);
contarCaracteres ( "3, 2");
contarCaracteres ( 3, 2, 4, 5);
contarNumeroDeCaracteres ("Hola mi nombre es Mimi");
contarNumeroDeCaracteres ("Los numeros 2, 3, 4");
contarNumeroDeCaracteres ("Los numeros pares son", 2, 3, );
contarNumeroDeCaracteres (1, 2, 3, );






/*2.- Programa una funcion que te devuelva el texto recortado segun
el numero de caracteres indicados.Por ejemplo miFuncion ("Hola mundo", 4) devolvera Hola.*/

const recortarTexto =  (cadenas = "", longitud = undefined) =>
(!cadenas)?
console.warn ("No ingresaste una cadena de texto")
:(longitud === undefined)?
console.warn ("No ingresaste la longitud del texto")
: console.info (cadenas.slice(0, longitud));

recortarTexto ("Hola Mimi", 4);
recortarTexto ();
recortarTexto ("Hola Mimi");
recortarTexto ("", 4);




/*3.-Programa una funcion que dada un string te devuelva un array de textos.
 Por ejemplo miFuncion ("hola que tal) devolvera ["hola", "que","tal"]*/

 const cadenaAArreglo = (cadena = "", separador = undefined) =>
 (!cadena)?
 console.warn ("No ingresaste una cadena de texto")
 :(separador === undefined)?
 console.warn ("No ingresaste el caracter separador")
 : console.info (cadena.split(separador));

 cadenaAArreglo ("Si la luna fuera de caramelo me gustaria estar alli", " ");
 cadenaAArreglo (""," ");
 cadenaAArreglo ("Hola mi nombre es mimi");
 cadenaAArreglo ("hola, mi, nombre, es, Adriana", ",");
 cadenaAArreglo ("Hola mimi como estas", [1]);




 /*4.- Programa una funcion que repita un texto x veces, ejemplo miFuncion ("hola mundo", 4)
 devolvera ("hola mundo"), ("hola mundo"),("hola mundo"), ("hola mundo") */

 const repetirTexto = (texto = "", veces = undefined) =>  { 
     if (!texto) return console.warn ("No ingresaste un texto");

     if (veces === undefined) return console.warn ("No ingresaste el numero de veces a repetir del texto");

     if (veces === 0) return console.error ("El numero de veces no puede ser 0");

     if (Math.sign(veces) === -1) return console.error ("El numero de veces no puede ser negativo");
     
     for (let i=1; i<= veces; i++)  {
         console.info (`${texto}, ${i}`);

     }
 }

repetirTexto ("Te espero mañana en la mañana", 3);
repetirTexto ("", 3);
repetirTexto ("Te espero mañana en la mañana");
repetirTexto ("Te espero mañana en la mañana", 0);
repetirTexto ("Te espero mañana en la mañana", -5);
repetirTexto ("Te espero mañana en la mañana", 2);















