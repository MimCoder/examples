/*Operadores Aritmeticos (suma, resta, multiplicación, division, agrupacion (), modulo %) 
 */
let a = 5 + (5-10)* 3;
let modulo = 5 % 2;

console.log (a);
console.log (modulo);
//El modulo es el residuo de una division.

/*Relacionales
<, >, <=, >=, ==, ===, !=, !== */

/* 
= uno es iguala asignación de variable;
== dos iguales es compración de varoles;
=== 3 iguales es comparación de tipo de dato y de valor, la buena practica recomienda el uso de tres iguales.  */

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/* incremento y decremento.*/

let i = 3;

i = i + 2;
i += 2;
i -= 1;
i /= 2;
i *= 4;

console.log (i);

/*operador unario que aumenta o decrementa de uno en uno.*/

i ++;
i --;

/* Logicos
!- Not: Niega, es decir lo que es verdadero lo vuelve falso y visceversa.
||- Or: Cuando se tienen dos o mas condiciones, con que una se cumpla, es decir sea verdadera, el Or se validara.
&&- And: Cuando se tienen dos o mas condiciones, todas deben de cumplirse, es decir sean verdaderas, para que And se validara. */

console.log(!true);
console.log(!false);
console.log((9 === 9)||("9"=== 9));
console.log((9 === 9)&&("9"=== 9));
console.log((9 === 9)&&("9"=== "9"));