/*Al utilizar arrar functions omitimos la palabra function por una flecha, dentro de los parentesis van los parametros,
si solo fuera un parametro los parentesis se omiten, si en una solo linea de codigo tenemos un return tambien podemos omitir 
la palabra return y hacerlo implicito dentro delas funciones flecha. Si tenemos varias lineas de codigo simplemente 
respetamos la estructura de la funcion utilizando las llaves. */




/*const saludar = () => console.log ("hola");
saludar();*/

const saludar = nombre => console.log (`Hola ${nombre}`);
saludar (`Diego`);

/*const sumar = function (a,b)  {
    return a + b;
}*/

const sumar = (a,b) => a + b;

console.log (sumar(5,5)); 

const funcionDeVariasLineas = () => {
    console.log (`uno`);
    console.log (`dos`);
    console.log (`tres`);
}
funcionDeVariasLineas();

/*El metodo forEach nos ayuda a iterar o recorrer un arreglo, este metodo recibe tres parametros el valor, la posicion y el arreglo */

const numeros = [5,4,`Hola`,2,1];
numeros.forEach((value,index, array) =>  console.log (`${value} esta en la posicion ${index} del arreglo ${array}`)
)

function perro()  {
    console.log (this);
}

perro ();

const gato = {
    nombre: `lara`,
    maullar () {
        console.log (this)
    }
}

gato.maullar ();

/*Dentro de las declaraciones de contextos sean funciones, objetos, entre otros cuando planteamos una 
funcion de flecha con el objeto this en la funcion perro este hara referencia al objeto global window, mientras 
que el objeto gato el objeto this hace referencia al contexto del objeto gato. */
