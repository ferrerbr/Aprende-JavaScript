import {PI, ususario,}from"./constantes.js";// aqui se hace la imnportacion 
import { aritmetica } from "./aritmetica.js";//podemos exportar  como objeto
import saludar from "./constantes.js";
console.log("Modulos en JavaScript");

// para que podamos  mandar a llmar aqui otroa archios JS  le coloquemos un valor al atributo type "module"

// como buena practica   lo primero que se hace al escribir codigo es la importacion de modulos

//ya podemos hacer uso de la constante que importamos
console.log(PI,ususario);

console.log(aritmetica.sumar(3,4));


// podemos importar un afuncion a ejecutar por default 
//saludar();

// no se puedes hacer dos exportaciones por default