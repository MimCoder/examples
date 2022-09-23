/*Un try-catch nos ayuda a ver los errores o probar errores que puedan surgir en nuestro codigo.
Cuando en el try se detecta un error inmediatamente se sale e ingresa al catch omitiendo el codigo 
que seguia despues del error. */


try {
    console.log ("En el try se agrega el codigo a evaluar");
    veces;
    console.log ("Segundo mensaje del Try");
}catch(error) {
    console.log ("Catch, captura cualquier error surgido o lanzado en el try");
    console.log (error);
}finally {
    console.log ("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

try {
    let numero = "t";
    if (isNaN(numero)) {
        throw new Error ("El caracter introducido no es un numero");

    }
    console.log (numero*numero);
}catch(error) {
    console.log (`Se produjo el siguiente error ${error}`);
}