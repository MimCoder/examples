const a = [];
const b = [3, true, "Hola",["A","B","C",[1,2,3]]];

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X","Y","Z",1, 2,3,4);
console.log (c);
console.log (c.length);

const d = Array(10).fill("colores");
console.log (d);

const colores = ["rosa","azul","verde"];
console.log (colores);

colores.push ("amarillo");
console.log (colores);

colores.pop ();
console.log (colores);

colores.forEach(function(el,index) {
    console.log (`<li id = ${index} > ${el} </li>`);
});
