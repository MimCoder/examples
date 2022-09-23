/*12.- Programa una funcion que determine si un numero es primo (aquel que solo es divisible por si
    mismo y uno), o no p.e miFunction(7) devolvera true */

    const numeroPrimo = (numero = undefined) => {
         if (numero === undefined) return console.warn ("No ingresaste un numero")

            if (typeof numero !== "number") 
            return console.error (`El valor ${numero} ingresado, No es un numero`)

            if (numero === 0) 
            return console.error ("El numero no puede ser 0")

            if (numero === 1) 
            return console.error ("El numero no puede ser 1")


            if (Math.sign(numero)=== -1)
             return console.error ("El numero no puede ser nagativo")
            //El metodo sign 
            // > 0 = 1
            // 0 = 0
            // < 0 = -1
           
            let divisible = false;
            //Creamos una variable y la inicializamos en un volor booleano.
            //Dentro del if aplicamos el operador modulo, si numero entre el valor actual de i es iguala 0,
            //la variable divisible cambiara su valor booleano.
            for (let i = 2; i < numero; i++) {
                if ((numero % i) === 0)  {
                    divisible = true;
                    break;
                }
 
            }

            return (divisible)
            ? console.log (`El numero ${numero} no es primo`)
            : console.log (`El numero ${numero} es primo`);

    }

    numeroPrimo ();
    numeroPrimo ("4");
    numeroPrimo (0);
    numeroPrimo (1);
    numeroPrimo (-12);
    numeroPrimo (56);
    numeroPrimo (5);
    numeroPrimo (88);
     numeroPrimo (401);





     /*13.- Programa una funcion que determine si un numero es par o impar 
     p.e miFuncion (3) devolvera impar.*/

     const numeroParImpar = (numero = undefined) => {
         if (numero === undefined) return console.warn ("No ingrsaste un numero");

         if (typeof numero !== "number") return console.error (`EL valor ${numero} ingresado, No es un numero`);

         return ((numero % 2) === 0)
         ? console.info (`El numero ${numero } es par`)
         : console.info (`El numero ${numero} es impar`)
     }

     numeroParImpar ();
     numeroParImpar ("5");
     numeroParImpar (99);
     numeroParImpar (12);
     numeroParImpar (-300);




     /*14.- Programa una funcion para convertir grados Celsius  a Fahrenheit y visceversa 
     p.e miFuncion (0° C) devovera 32° F*/

     const convertirGrados = (grados = undefined, unidad = undefined) => {
         if (grados === undefined) return console.warn ("No ingresaste grados a convertir");

         if (typeof grados !== "number") return console.error (`El valor ${grados} ingrsado, No es un numero `);

         if (unidad === undefined) return console.warn ("No ingresaste el tipo de grado a convertir");

         if (typeof unidad !== "string") return console.error (`El valor ${unidad} ingresado, No es una cadena de texto `);

         if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn ("Valor de unidad no reconocido");
        /*En este if decimos que si la longitud de la unidad es diferente de 1 (porque solo pedimos un 
            caracter, o creando una expresion regular donde evaluara los caracteres C o F dentro de la variable 
            unidad )*/

            if (unidad === "C")  {
                return console.info (`${grados}°C = ${(Math.round(grados * (9/5))+ 32)}°F`)
            } else if (unidad === "F")  {
                return console.info (`${grados}°F = ${(Math.round((grados - 32) * (5/9)))}°C`)
            }
            /*Despues de la expresion regular si unidad es igual a C o F se imprimiran los grados C o F que
            se igualaran a la formula para transformar de celsius a farenheit, y visceversa para ello aplicamos 
            antes el metodo round para evitar demasiados decimales dentro de la operacion. */

            console.info ("!Si se pudo con la expresion regular¡");
            //Este consol info nos ayuda a verificar si el if con expresion regular si funciona.
                 
     }

            convertirGrados ();
            convertirGrados ("2");
            convertirGrados (2);
            convertirGrados (2,true);
            convertirGrados (2,"hola");
            convertirGrados (2,"E");
            convertirGrados (2,"C");
            convertirGrados (100,"C");
            convertirGrados (32,"F");
            convertirGrados (100,"F");
  