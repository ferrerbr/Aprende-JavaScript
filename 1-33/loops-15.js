/**LOOPS (ciclos)
 * son iteraciones que se realizan hasta que una condición se cumple
 * while 
 * do while 
 * for
 * for each
 * 
 */

//--WHILE
//queremos escribir un codigo que imprima en pantalla de 1 al 100
let contador = 0;

while(contador <= 10){
    console.log("while ",contador);
    contador ++ 
}
// ----- DO-WHILE
contador = 0 

do {
   contador++
   console.log("do while ",contador);

    
    
} while (contador < 10);

// en una estructura  do-while se ejecuta al menos una vez el codigo y despues  evalua la condicion

//--FOR
// En un ciclo for no es necesario inicializar una variable para condicionar el ciclo 

 for(i=1;i <= 10;i++){
    console.log("for ",i);
    
 }


//si tuieramos un arreglo de numeros 
let  numeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0;i < numeros.length;i++){
   console.log("for sobre un array  ",numeros[i]);
    
}

//--   FOR-IN
// es un for especial para un obejeto

const brandon = {
   nombre: "brandon",
   apellido :"ferrer",
   edad:26
}

for(const key in brandon){
   console.log("For in ",key);
   
}
 // recorre el objeto por sus llaves 

 //si quisieramos imprimir  el valor de la llave 

 for (const key in brandon){
   console.log("for in  ",key,"-",brandon[key]);
 }
 //-----   FOR OF
 //  me permite iterar en cualquier objeto que sea iterable en java Script


 //podriamos hacer con el  array que definimos como nukmeros 

 for(const elemento of numeros){
   console.log("for of    ",elemento);
   
 }

 // asi mismo lo podemos usar en un objeto iterable , pero solo objetos primitivos como cadenas de  caracteres o arrays


 for(const e of "brandon"){
   console.log(e);
   
 }
    