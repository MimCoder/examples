const Español = (calificacion = []) =>  {
    
    let suma = calificacion;

    for (let i = 0; i < calificacion.length; i++)  {
         suma += calificacion[i] / 4;
    }
    return console.info (`En Español sacaste ${suma} en total.`)
 }

Español (8,9,6,10);
Español (7,8,6,8);
Español (10,10,9,9);

const Matematicas = (calificacion = []) =>  {
    
    let suma = calificacion;

    for (let i = 0; i < calificacion.length; i++)  {
         suma += calificacion[i] / 4;
    }
    return console.info (`En Matematicas sacaste ${suma} en total.`)
 }

Matematicas (8,9,6,10);
Matematicas (7,8,6,8);


const Historia = (calificacion = []) =>  {
    
    let suma = calificacion;

    for (let i = 0; i < calificacion.length; i++)  {
         suma += calificacion[i] / 4;
    }
    return console.info (`En Historia sacaste ${suma} en total.`)
 }

Historia (8,9,6,10);
Historia (7,8,6,8);

const Geografia = (calificacion = []) =>  {
    
    let suma = calificacion;

    for (let i = 0; i < calificacion.length; i++)  {
         suma += calificacion[i] / 4;
    }
    return console.info (`En Geografia sacaste ${suma} en total.`)
 }

Geografia (7,8,6,8);
Geografia (10,10,9,9);

const cienciasNaturales = (calificacion = []) =>  {
    
    let suma = calificacion;

    for (let i = 0; i < calificacion.length; i++)  {
         suma += calificacion[i] / 4;
    }
    return console.info (`En Ciencias Naturales sacaste ${suma} en total.`)
 }

cienciasNaturales (7,8,6,8);
cienciasNaturales (10,10,9,9);

