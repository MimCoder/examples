const saludar = (nombre = "", apellido = "cruz") =>
(!nombre)
? console.warn ("Ese no es tu nombre")
:(apellido)
 ?console.warn (`Te llamas ${nombre} y tu apellido es ${apellido}`)
 :console.info (nombre.split("",4), apellido.split(",", 3))

const saludars = (nombre = "", apellido = "cruz") =>
(!nombre)
? console.warn ("Ese no es tu nombre")
:(!apellido)
 ?console.warn (`Te llamas ${nombre} y tu apellido es ${apellido}`)
 :console.info (nombre.split("",4), apellido.split("u", 2))




saludar ();
saludar ("Adriana");
saludar ("Antonio");
saludars ();
saludars ("Adriana");
saludars ("Antonio, Torres ");

/*El metodo split convierte un string en un arreglo, y recibe dos parametros el separador que 
puede ser un espacio, una coma, un simbolo o una letra este tiene que estar en el string original
, y el limite de caracteres este es opcional.
*/



const saludo = (nombre = "Mi nombre es Adriana ") => {
console.info (nombre.slice(2,4))
 console.info (nombre.slice(2,-2))
 console.info (nombre.slice(2))
 console.info  (nombre.slice(4))
 console.info (nombre.slice(2,4))
}

saludo ();

/*El metodo slice nos ayuda a sacar un fragmento de una cadena sin modificar la original,
este recibe dos parametro el inicio que cuenta al numero consecuente al que sea escrito si se 
escribio el 2 imprimira al tercer caracter, y el final. Si se utiliza un numero negativo
o no se escribre el segundo parametro del metodo se imprimira el resto de la cadena. */




const despedida = (saludo = "adios adios cuidate bye ") => {
    
console.info (saludo.replace(" ",""))
console.info (saludo.replace("cuidate","..."))
console.info (saludo.replace("bye","besos"))
console.info (saludo.split(" ").join(""))
console.info (saludo.replace(new RegExp(" ", 'g'),""))

}
console.log('----------------------')
despedida ("nos vemos pron to");
despedida ();

/*Cuando el metodo replece es llamado a la variable este solo funcionara una vez,
para quitar todos los espacios utilizamos mejor el metodo split donde separamos en un arreglo
cada separacion y luego con join volvemos a unir sin los espacios. Por ultimo si utilizamos el replaceAll
con expresiones regulares tambien uniremos la frase. */