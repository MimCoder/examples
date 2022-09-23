function sumar(num1, num2){
  return num1+num2;
}

sumar(4,5)
 //1+1 = 10
 /*
 Una función es un bloque de código, autocontenido, que
 se puede definir una vez y ejecutarse en cualquier momento.
 Opcionalmente puede recibir parametros y devolver un valor.

 Las funciones en javascript con una particular forma de objetos.

 Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse
 a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
  */

//Función declarada

function estoEsUnaFuncion() {
 // console.log("uno");
   // console.log("dos");
     // console.log("tres");
}

function funcionQueDevuelveUnValor() {
   //console.log("uno");
    //console.log("dos");
      //console.log("tres");
      return "La funcion ha retornado una cadena de texto."
}
let valorDeFuncion = funcionQueDevuelveUnValor();
//console.log (valorDeFuncion);

//Invocación de la función

estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

function saludar (nombre, edad) { 
  console.log (`Hola mi nombre es ${nombre} y tengo ${edad} años.`);

}

function saludar (nombre = "desconocido", edad = 0) { 
  console.log (`Hola mi nombre es ${nombre} y tengo ${edad} años.`);

}

saludar ("mimi", 30);
saludar ();

//Funciones declaradas VS Funciones expresadas


function funcionDeclarada() { 
  console.log ("Esto es una función declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada.");
}

funcionDeclarada();

//Función anonima

const funcionExpresada = function() { 
  console.log ("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definicion JS nos dira que no puede inicializarse porque no se ha declarado.");

}

funcionExpresada();