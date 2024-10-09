/** */
console.log(typeof console);//Output : objeto
console.log(console);// todos los metodos  de cosnolo

//la consolo de java script nos permite mandar errores o advertecias

//error
console.error("Esto es un error");

//aviso
console.warn("Esto es un aviso");

//informacion 
console.info("Esto es un mesaje informativo");

// log
console.log(" Un registro de lo que ha pasado en  nuestra aplicación");

let nombre = "Brandon",
    apellido = "Ferrer",
    edad = 27;
 
// esto es una forma de mandar a imprimir 
console.log(nombre);
console.log(apellido);
console.log(edad);

//eso es otra forma;
console.log(nombre,apellido,edad);;

//esto es otra forma interpolando la cadena 
console.log(`Hola mi nombre es ${nombre} ${edad} y tengo ${edad} años`);

// otra forma muy opoco usada

console.log(`Hola mi nombre es %s %s y tengo %d años`,nombre,apellido,edad);
//console.clear()// aqui se borra la consola 
console.log(window);
console.log(document);
// si quisisera ver todos los  metodos de estos 
// cuando se quiere representar algo como objeto podemos usar dir
console.dir(window);
console.dir(document);

// un grupo en la cosola

console.group("Homo")
console.log("Sapiens");
console.log("Neardenhtal");
console.groupEnd();

console.groupCollapsed("Homo")
console.log("Sapiens");
console.log("Nearthental")
console.groupEnd();

//tablas 

console.table(Object.entries(console))// lo que hace internamente es un array y podriamos  ordenarlos por oden alfabetico

console.table(Object.entries(console).sort())

const numeros = [1,2,3,4,5];
const vocales = ["a","e","i","o","u"]

console.table(numeros);
console.table(vocales);
// sucede lo mismo para los objetos


// podriamos madar a imprimir el tiempo que tarda en ejecutarse

console.time("tiempo")
const arreglo = Array(1000);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i ;
}

console.timeEnd("tiempo")// tenemos que usar el mismo mensaje para que sepa donde inicia la ejecucion y donde termina

//cuando quieras saber cuantas veces un ciclo se ejecuto
for (let i = 0; i < 100; i++) {
    console.count("esta es la repeticion numero");
    
}

// el metodo hacer es una mini libreria para hacer pruebas

let x = 3;
let y = 2;
// esperamos que x siempre sea menor que y

PruebaXY ="se espera que X sea siempre menor que Y";
console.assert(x<y,{x,y,PruebaXY}) // este console solo se ejecuta cuando la prueba fallo











