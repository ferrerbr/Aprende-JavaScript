/**--------------Operadores aritmeticos------- */

let a = 5 + 5 * 3;
console.log(a);
let b = (5 + 5) * 3;
console.log(b);

let modulo = 5 % 2; //el signo % nos da el residuo de una muntiplicacion es de
console.log(modulo)


/**--------------Operadores relacionales------- */
console.log(8>9); // el resultado es un dato del tipo boolean que dice false en este caso

console.log(8>=9)// no es menor que da false como resultado 

console.log(8>=8)// el resultado es true debido a que 8 no es menor que 8 pero si es igual 
/**
 =    es igual a una asignacion 
 ==   es una comparacion de valores
 ===  es comparacion de valores y tipos de datos 
 */
 console.log(7==7); //hace una comparacion solo de el valor
 console.log(7=="7")// hace una compaaracion del valor y dara true 
 console.log(0==false)// como cero riende a falso el resultado es true

 console.log(7===7); //hace una comparacion solo de el valor
 console.log(7==="7")// da falso por que no son el mismo tipo de dato
 console.log(0===false)// dara falso por que no son el mismo tipo de dato

 /**--------------Operadores relacionales------- */
//incremento y decremento

let i = 2;
// le decimos que i va a valer lo que valia antes y le sumamos 2 el resultado=3
i += 1;
console.log(i);
i -= 1; // fuinciona de la misma manaera con menos
console.log(i);
i *= 4; // fuinciona de la misma manaera con multiplicacion
console.log(i)
i /= 2; // fuinciona de la misma manaera con division
console.log(i)


 /**--------------Operadores unario------- */
//para irle sumando o restando el valor por unidad
console.log("operador unario")

let c = 1;
console.log(c);
c++;
console.log(c);
c++;
console.log(c);
console.log(c++)// imprime 3 por que la suma se hace despues de imprimirlo
console.log(++c)// aqui imprime 5 por que trae la suma del c++ y suma uno y despues lo imprime++c


//si colocamos dentro de un console.log no imprimiria el valor por que primero c++ imprime lo anterio y despoues le suma para que nos de el resultado bien dbemos poner ++c aqui priero le suma y despues le imprime 


 /**--------------Operadores logicos------- */
 //!NOT lo verdadero lo vuelve falso y lo falso lo vuelve verdadero

 //ll Or  cuando tengo dos o mas condciones  con que una se cumpla la valirada como true

 //&& And dice que todas nuestras condiciones deben ser verdadera 




