/**El objeto math es un objeto statico  asi que cada que lo queramos usar tenemos que invocar el prototipo 
 * no sirve para realizar algunar operaciones matematicas 
 */

console.log(Math);

console.log(Math.PI);// pi e y otros son propiedades por que sus valores no van a cambiar 

// podemos obetener el valor obsoluto 
console.log(Math.abs(-584.32));

//metodos para redondear 
console.log(Math.ceil(5.6));// redondea al numero imediato entero mayor 
console.log(Math.floor(5.8));// redondea al numero imediato menor 
console.log(Math.round(5.5));// redonde al numero imediato entero  mas cercano

// raiz cuadrada
console.log(Math.sqrt(16));

//elervar a la potencia 
console.log(Math.pow(5,5));// colocamos primero la base y despues el exponente

//metodo que me indica si el numero es negativo postivo o cero
console.log(Math.sign(-8.5));//Output:  -1
console.log(Math.sign(0));//Output:  0
console.log(Math.sign(0.2545));//Output:  1


//numeros aleatorios  genera un número decimal aleatorio en el rango [0, 1). Esto significa que incluye el 0, pero no incluye el 1. El valor generado es mayor o igual a 0 y menor que 1.
console.log(Math.random());
console.log(Math.random()*100);// numero aletrorio entre uno y cien sin incluir el cien 
console.log(Math.round(Math.random()*100)); // numero aletorio entre uno y cien sin incluir el cien 














