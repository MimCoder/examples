const numeros = [1,2,3,4,5,6,7,8,9.0];

for (let i = 0; i<numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log (numeros[i]);
}

for (let i = 0; i<numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log (numeros[i]);
}

/*Cuando utilizamos break dentro de una iteracion inmediatamente se rompe el ciclo cuando se cumple la condicion.
Cuando utilizamos continue al llegar a la condicion se rompe el ciclo omitiendo el dato seguido d ela condicion,
pero se termina recorriendo todo el ciclo. */

