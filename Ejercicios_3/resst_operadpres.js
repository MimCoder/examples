/*Los Parametros REST nos ayudan cuando desconocemos la cantidad de parametros que recibira nuestra funcion. Asi que los tres
puntos se anteponen al parametro para crear la infinidad de parametros*/


function sumar (a, b, ...c)  {
    let resultado = a + b;

    c.forEach(function(n)  {
        resultado += n
    });
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));

/*Los operadores de propagación u operador Spread nos ayudan a crear copias o unir dos o mas arreglos anteponiendo tres
puntos antes de cada arreglo. */

const arr1 = [1,2,3,4,5],
arr2 = [6,7,8,9,0];

console.log (arr1, arr2);

const arr3 = [arr1, arr2];
const arr4 = [...arr1, ...arr2]

console.log (arr3);
console.log (arr4);