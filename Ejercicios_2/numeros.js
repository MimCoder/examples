let a = 2;
//Esto es crear una variable numero con el constructor.
let b = new Number(3);
let c = 4.5;
let d = "2.2";

console.log(a,b);
// El metodo toFixed indica el numero de decimales.
console.log(c.toFixed(1));
console.log(c.toFixed(4));
//E l metodo parseInt devuelve solo la parte entera y parseFloat te devuelve la parte entera y la decimal. 
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
//Al sumar un dato numerico y un string solo se concatenan.
console.log(c + d);
//El metodo parseInt d sumara la parte entera pero tendra errores al sumar la parte decimal.
console.log(c + parseInt(d));
console.log(c + parseFloat(d));


