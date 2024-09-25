/** Cadenas de texto es un texto que esta encerrado entre "comilas dobles" o  ' simples' */


//declarando variablr del tipo string
let nombre = "Brandon";
let apellido = 'ferrer';
let nickname = `brferrer`;
let saludo = new String("Hola brandon")
console.log(nombre,apellido,nickname,saludo); // declarando desde el constructor

console.log(nombre.length); // el numero de elemetos de la cadena 
console.log(nombre.toUpperCase()); // convertinmos toda la cadena a MAYUSCULAS 
console.log(nombre.toLowerCase()) ;// convertimos toda la cadena a minusculas;



let lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";


console.log(lorem.includes("amet")); //buscar si hay una coincidencia con el string colocado entri parentesis

console.log(lorem.includes("brandon"));
console.log(lorem.trim()); // quita los espacion en blanco que existen al inicio o al final de la cadena de texto

console.log(lorem.split(" ")); //separa la dena de texto cuando encuentre una concidencia con el caracter colocado




