/**Desde ECMAscript 6 tenemos una nueva palabra reservada CONST.
 * usamos "const" para declarar  cuando no va a cambiar
 * las variables cosnt siempre de deben de declarar no se pueden quedar vacias como en el caso de let y var */

let Pi = 3.1416;
console.log(Pi);

// const Pi = 5;   no podemos reasignar un valor , nos marca un error

//cuando declaramos objetos , arrays etc si podemos reasignar sus valores internos


//--------------------let---------------------------
//declaramos un objeto con tres propiedades con LET 
let objeto = {
    nombre :"bradon",
    edad : 26,
    
}


//declaramos una lista con tres elementos con LET
let colores = ["rojo", "azul", "amarillo"];

console.log(objeto);
console.log(colores);


//agregamos elementos  al objeto y a la lista
objeto.correo = "br.ferrer@gmail.com";
colores.push("verde");

console.log(objeto);
console.log(colores);

//------------------Const---------------------------------

//declaramos un objeto con tres propiedades con CONST 
let objeto2 = {
    nombre :"bradon",
    edad : 26,
    
}


//declaramos una lista con tres elementos con CONST
let colores2 = ["rojo", "azul", "amarillo"];

console.log(objeto);
console.log(colores);


//agregamos elementos  al objeto y a la lista
objeto2.correo = "sin correo";
colores2.push("naranja");

console.log(objeto2);
console.log(colores2);

//en este caso si nos permitio  hacer un cambio de valores en una varible const por que estos son valores compuestos ya que estamso accediento a la referencia de esa variable 

