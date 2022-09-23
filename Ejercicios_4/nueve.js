/** 9.-Programa una función que obtenga un numero aleatorio entre 501 y 600
 */

const aleatorio = () => console.info (Math.round((Math.random()*100))+ 500);

aleatorio ();

/*Al utilizar le metodo estatico round redondeamos un numero de .5 a 1 y de .4 a 0,
Math.random generara un numero aleatorio al multiplicarlo por 100 generamos un numero aleatorio
del 1 al 100, pero como queremos que sea del 501 al 600 agrupamos Math.random * 100 mas 500 y asi 
obtenemos un mnumero aleatorio del 501 al 600. */




/* 10.-Programa una función que reciba un numero y evalue si es capicúa o no (que se lee de un sentido
    y del otro), p.e miFuncion (2002) devolvera true. */

    const capicua = (numero = 0) => {
        if (!numero) return console.warn ("No ingresaste un numero");

        if (typeof numero !== "number") 
        return console.error (`EL valor ${numero} ingresado, No es un numero`);

        numero = numero.toString();
        let alReves = numero.split("").reverse().join("");

        return ((numero) === alReves)
        ?console.info (`Si es capicua, numero original ${numero}, numero al reves ${alReves}`)
        :console.info (`No es capicua, numero original ${numero}, numero al reves ${alReves}`)
    }

    capicua ("454");
    capicua (2002);
    capicua (789);
    capicua (0);
    capicua (212.212);

    /*Primero un if, si no es un numero se imprimira el mensaje, dimos el valor de 0 a number
    que es igual a false. en el siguiente if valuamos el tipo de valor que tiene numero si numero 
    fuera diferente del tipo de valor number imprimira el mensaje.
    Convertimos numero en una cadena de texto para poder implementar los metodos
    split, reverse y join y guardarlos en una varible llamada alReves, por ultimo utilizamos un 
    operador ternario.  */




    /* 11.-Programa una funcion que calcule el factorial de un numero (El factorial de un entero 
        positivo n, se define como el producto de todos los numeros enteros positivos desde 1 hasta n)
        p.e miFuncion (5) devolvera 120.*/

        const factorial = (numero = undefined) => {
            if (numero === undefined) return console.warn ("No ingresaste un numero")

            if (typeof numero !== "number") 
            return console.error (`El valor ${numero} ingresado, No es un numero`)

            if (numero === 0) 
            return console.error ("El numero no puede ser 0")

            if (Math.sign(numero)=== -1)
            //El metodo sign 
            // > 0 = 1
            // 0 = 0
            // < 0 = -1
            return console.error ("El numero no puede ser nagativo")

            let factorial = 1;

            for (let i = numero; i>1; i--)  {
                factorial *= i;
                //factorial es = factorial por el valor guardado en la variable i durante el ciclo.
            }
            return console.info (`El factorial de ${numero} es ${factorial}`);
               
        }
    

        factorial ("4");
        factorial ();
        factorial (0);
        factorial (3);
        factorial (-2);
        factorial (8);




        