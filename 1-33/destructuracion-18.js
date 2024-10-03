/**DESTRUCTURING
 * 
 *  es una forma de asignar valores  a arreglo o a objetos 
 * 
 */
//guardar cada uno de los valores  en una variable sin estructuracion
let numeros =  [1,2,3,4,5,6,7,8,9,10];
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2],
    cuatro = numeros[3],
    cinco = numeros[4];
console.log(uno, dos, tres,cuatro,cinco); //output:1 2 3 4 5

//con estructuracion 
 const [one, two ,three,four,five] = numeros;
 console.log(one,two,three,four,five); //output:1 2 3 4 5
 


 //tambien funciona para objetos 

 let persona = {
    nombre:"brandon",
    apellido:"ferrer",
    edad:26,
    saludar:function(){
        console.log("hola mundo");
        

    }
 }
 let{nombre,apellido,edad,saludar} = persona;
 console.log(nombre,apellido,edad,saludar);

 //para que la destructuracion funcione la variable sonde quiero guardar la propiedad tenga el mismo nombre que la llave de la propiedad
 