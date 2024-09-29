// Los arreglos se definen entre corchetes [ ]
// de preferencia se declarar con const



const a = [];
console.log(a);
console.log(typeof a);

//los arreglos  es una colecion de valores de cualquier tipo
const b = [1,"a",3.25,"Hola",["a","b","c"]];
console.log(b);

// los  objetos compuesto se accede a la referencia del valor

// las posiciones en los arreglos empiezan en 0

// si solo quisiera imprimir la palabra Hola del arreglo b  tendria que acceder al elemento 3
console.log(b[3]);
// para saber el numero de elementos  de un arreglo se hace con length
console.log(b.length);

// para acceder a un elemento de un arreglo dentro de un arreglo primero hacemos referencia  a la posicion del array interno y despues del elememnto  por ejemplo para acceder  a la letra b
console.log(b[4][1]);

// para crear arreglos tambien exiten estos metodos 
const c = Array.of("A","B","C","D",1,2,3,4)
console.log(c);
// si quisieramos crear un arreglo de determinado numero de elementos y todos con el mismo dato
const d = Array(200).fill(0);
console.log(d);

// este metodo Creando el array desde el constructor ya esta en decadencia 
const e  = new Array();
console.log(e);

const f = new Array(1,2,5,4,"a","d");
console.log(f);

const colores =["rojo","verde","azul"]
console.log(colores);
// si quisieramos agregar un elemento al final usamos el metodo .push
colores.push("amarillo")
console.log(colores);

// si quieralmos eliminar el ultimo elemento de  la lista  usamos el metodo pop
colores.pop();
console.log(colores);

// metodo que ejecuta una funcion por cada elemeto del arreglo

colores.forEach(function(e,index){
    console.log(`<li id="${index}>${e}</li>`);

})















