/*  for (inicialización de variable; condición;
    decremento o incremento) {
      sentencias que ejecuta el for
      sentencias que ejecuta el for
      sentencias que ejecuta el for
    } */

    let numeros = [10,20,30,40,50,60];

    for (let i = 0; i < numeros.length; i++) {
        console.log (numeros[i]);
    }

    /*
    for in nos permite iterar o recorrer las propiedades de un objeto */

    const mimi = {
        nombre: "Adriana",
        apellido: "de la cruz",
        edad: 30
    }

    for (const propiedad in mimi) {
        console.log (`Key: ${propiedad}, Value: ${mimi[propiedad]}`);
    }

    /*for of nos permite iterar o recorrer cualquier objeto iterable como un arreglo, cadena de texto entre otros */

    for (const elemento of numeros) {
        console.log (elemento);
    }

    let cadena = "Hola Mundo";

    for (const caracter of cadena) {
        console.log (caracter);
    }