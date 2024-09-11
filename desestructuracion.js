let numeros = [1,2,3];
//quiero guardar cada uno de los valores en una variable
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];
console.log(uno, dos, tres);

//con destructuracion
const[one,two,three]=numeros;
console.log(one, two, three);

//si tengo un objeto y necesito guardar las propiedades de este objeto
let persona ={
    nombre : "Brandon",
    apellido : "ferrer",
    edad: 25
} 
//con destructuracion 
/*let{nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);*/
// es importante que las variables que estamos creando tengan el mismo nombre que la llave
/*let{nombre,apellido,age}=persona;
console.log(nombre,apellido,age);*/

//no es necerario colocar el  nombre de las variables en el mismop orden que estna las propiedades llaves
let{nombre, edad, apellido} = persona;
console.log(nombre,apellido,edad);




