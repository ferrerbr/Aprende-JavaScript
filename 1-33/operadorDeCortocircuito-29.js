/**Operador de corto circuito 
 * funcion poniento dos condiciones ya sea con OR o con AND
 * 
 * Corto circuito con OR 
 * significa qque cuando el valor de la izquierda en la expresion  soempre pueda validar  a dalse , es el valor que se cargara por defecto
 * 
 * corto circuito con AND 
 * cuando el valor de la iquierda  en la expresion siempre pueda validar a false , es el valor que se cargara por defecto
 * 
 */


function saludar (nombre = "extranger"){
    console.log(`Hola ${nombre}`);
    
}
saludar("brandon ")
saludar()
// este valo que asignamos a la varible nombre por defecto tambien se puede realizar con un operador de cortocircuito
function despedirse(nombre){
    nombre = nombre ||"extranger";
    console.log(`Adios ${nombre}`);
    
}

despedirse("brandon")
despedirse()

// esto se puede realizar gracias a los valores que tienden a falso o a verdadero 

console.log(Boolean(""));
console.log(Boolean("h"));
// ahora con operadores de corto circuito 

console.log("------Corto circuito OR----- ");

console.log(true || "hola mundo true ");
console.log(false || "Hola mundo tue ");

console.log(1 || "hola mundo true");
console.log(0 || "Hola mundo true");


// ahora con el operador de cortocircuito AND  es lo contrario
console.log("------Corto circuito AND----- ");


console.log(true && "hola mundo false ");
console.log(false && "Hola mundo false");

console.log(1 && "hola mundo false ");
console.log(0 && "Hola mundo false ");


