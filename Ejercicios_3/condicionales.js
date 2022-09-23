// if else

let edad = 15;

if (edad >= 18) {
console.log ("Eres mayor de edad en México");
}
else {
console.log ("Eres menor de edad");
}

// if- else if- else

/*
Dejame dormir - 0hrs- 5hrs
Buenos dias - 6hrs- 11hrs
Buenas tardes 12hrs- 18hrs
Biuenas noches 19hrs - 23hrs */

let hora = 20;

if (hora >= 0 && hora <= 5) { 
console.log ("Dejame dormir");
}
else if (hora >= 6 && hora <= 11) {
console.log ("Buenos dias");
}
else if (hora >= 12 && hora <= 18) {
console.log ("BBuenas tardes");
}
else {
console.log ("Buenas noches");
};


if (hora < 6) { 
console.log ("Dejame dormir");
}
else if (hora > 5 && hora < 12) {
console.log ("Buenos dias");
}
else if (hora > 11 && hora < 19) {
console.log ("BBuenas tardes");
}
else {
console.log ("Buenas noches");
};

/* Operador ternario (condicion) ? verdadero : falso 
Este es una simplificacion del if - else
*/

console.log ("Operador ternario");
let eresMayor = (edad >= 18)
? "Eres mayor de edad"
: "Eres menor de edad";
console.log (eresMayor);

/* La condicional switch la utilizamos cuando una variable puede tener varias opciones, los case son los casos o condiciones a cumplir, la
utilizacion del break es para que no pase por todos las condiciones de un paso sino que cuando se cumpla la condicion case se salga y se 
cumpla el siguiente case.
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5 
Sabado - 6 */

let dia = 5;

switch (dia) {
    case 0:
        console.log ("Domingo");
    break;
     case 1:
        console.log ("Lunes");
     break;
      case 2:
        console.log ("Martes");
     break;
      case 3:
        console.log ("Miercoles");
     break;
      case 4:
        console.log ("Jueves");
     break;
      case 5:
        console.log ("Viernes");
     break;
      case 6:
        console.log ("Sabado");
     break;
     default:
         console.log ("No existe el dia");
    break;



}


