/*15.- Programa una funcion para convertir numeros de base binaria a decimal y viscerversa
p.e miFuncion (100,2) devolvera 4 base 10 */

const convertirBinarioDecimal = (numero = undefined, base = undefined) =>  {
    if (numero === undefined) return console.warn ("No ingresaste numero a convertir");

    if(typeof numero !== "number") return console.error (`El valor ${numero} ingresado, No es un numero`);
    
    if (base === undefined) return console.warn ("No ingresaste la base a convertir");

    if (typeof base !== "number") return console.error (`El valor ${base} ingresado, No es numero`);

    if (base === 2)  {
        return console.info (`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }
    else if (base === 10)  {
        return console.info (`${numero} base ${base} = ${numero.toString(base)} base 2`);
    }
    else  {
        return console.error ("El tipo de base a convertir, No es valido")
    }

}

/*parseInt y tostring ayudan a tranformar cuamquir numero a una  solo qye
dentro de los parabmetro de estos metodo hay que agregaspo de base numerica, del tipo de
transformacion que deseamos.  */

convertirBinarioDecimal ();
convertirBinarioDecimal ("2");
convertirBinarioDecimal (15);
convertirBinarioDecimal (12,"10");
convertirBinarioDecimal (100,2);
convertirBinarioDecimal (90,10);
convertirBinarioDecimal (100100101,2);
convertirBinarioDecimal (60,10);
convertirBinarioDecimal (10010101011,2);
convertirBinarioDecimal (10101010,2);
convertirBinarioDecimal (50,6);




/*16.-Programa una funcion que devuelva el monto final despues de aplicar un descuento
a una cantidad dada . p.e miFuncion (100,20) devolvera 80 */

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn ("No ingresaste monto");

    if (typeof monto !== "number") return console.error (`El valor ${monto} ingresado, No es un numero`);

    if (monto === 0) return console.error ("El monto no puede ser 0");

    if (Math.sign(monto) === -1) return console.error ("El monto no puede ser negativo");
    
    if (typeof descuento !== "number") return console.error (`El valor ${descuento} ingresado, NO es un numero`);

    if (Math.sign(descuento) === -1) return console.error ("El descuento no puede ser negativo");

     return console.info (`${monto} - ${descuento} % = $${Math.round (monto - ((monto * descuento) / 100))}`);
}
// Yo le agrregue el math. round para redondear los decimales que de la opercion.
  
aplicarDescuento ();
aplicarDescuento (-60);
aplicarDescuento (50,"20");
aplicarDescuento (50,-20);
aplicarDescuento (100,20);
aplicarDescuento (40,5);
aplicarDescuento (66,15);
aplicarDescuento (23,2);




/*17.- Progrmam una funcion que dada una fecha valida determine cuantos años han pasado, 
hasta el dia de hoy p.e miFuncion (new Date (1984,4,23)) devolvera 35 años (en 2020).   */

const calcularAnios = (fecha = undefined) =>  {
    if (fecha  === undefined) return console.warn ("No ingresaste la fecha");
//si fecha es igual a indefinido se imprimira el mensaje.
    
if (!(fecha instanceof Date)) return console.error ("El valor que ingresaste, No es una fecha válida");
//negamos que fecha es una instancia de date se imprimira el mensaje. Aqui ocupamos la intancia y no el tipo de valor. 
   
let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
    aniosHumanos = Math.floor (hoyMenosFecha / aniosEnMS);
    /*Creamos tres variables, en la primera guardaremos la operacion de la fecha de hoy menos la
    fecha que pasemos e la variable fecha ambas tienen el metodo de date getTime que transforma
    ambas fechas a miliSegundos.
    En la segunda variable trasforma los miliSegundos a la unidad de tiempo que quiero validar, 1000 milisegundos forman un 
    segundo al mutiplicarlo por 60 lo transformamos a minutos, al multiplicarlo por 60 lo pasamos 
    a horas, por 24 lo pasamos a dias y por ultimo lo que queremos son años lo multiplicamos 
    por 365.
    En la ultima variable guardaremos la operacion final redondeandola
    al valor mas proximo con .floor. */

    return (Math.sign(aniosHumanos) === -1)
    ? console.info (`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
    ? console.info (`Han pasado ${Math.abs(aniosHumanos)} años, desde ${fecha.getFullYear()}`)
    :  console.info (`Estamos en el año actual ${fecha.getFullYear()}`)
}

/*En el return validamos si los aniosHumanos son negativos querra decir que la fecha que se ingreso
no ha pasado asi que se imprimira el es mensaje, el metodo abs nos permite tener el valor absoluto
del numero y asi eliminar el valor negativo. El metodo getFullYear devuelve el año de la fecha indicada
acorde a la hora local.
La siguiente validacion es si anios Humanos si es un valor positivo ejecutara lo que se pide. 
Y por ultimo si se ingresa el año de hoy se imprimira el ultimo mensaje. */


calcularAnios ();
calcularAnios (false);
calcularAnios ({});
calcularAnios (new Date(1991, 9, 9));
calcularAnios (new Date(2050,12, 5));
calcularAnios (new Date(1856, 9, 9));
calcularAnios (new Date(3030, 0, 4));
calcularAnios (new Date(1993, 9, 28));