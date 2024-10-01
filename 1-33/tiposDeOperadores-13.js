/**Operadore aritmeticos
 * + - / * ( ) % 
 */

let a = 5 + 5 - 10 *3;
console.log(a);
 let b = 5 + (5 - 10) *3;
 console.log(b);
 let modulo =5 % 3
 console.log(modulo); // el modulo es la parte entera sobrante de una division

 /**Operadores relacionales
  * > mayor que 
  * < menor que
  * <= mayor o igual 
  * >= menos o igual 
  * ==  igual que 
  * === extrictamete igual que 
  * != diferente de 
  * !== extrivtamente diferente de 
  */
  console.log("Operadores relacionales");
  
 console.log(8 > 9);
 console.log(9 > 8);
 console.log(8 >= 9);
 console.log(9 >= 8);
 console.log(7 < 7);
 console.log(7 <= 7);
 
 /**
  * = asignacion
  * == comparacion de valores 
  * === compararacón de valores y tipo de datos
  */
console.log(7 == 7); //Outout: true
console.log(7 == "7"); // output: true
console.log(7=== "7"); //outoput: flase

// usar un doble igual(==) actualmente esta en desuso , se recomienda  siempre  usar triple igual 


/**operadores de incremento y decremanto 
 * ++  mas  unidad (operador unario)
 * --  menos unidad
 * 
 * += igual mas 
 * -= igual menos
 * /= igual entre 
 * *= igual por 
*/
let i = 1;
console.log(i+=2);
console.log(i-=2);
console.log(i/=2);
console.log(i*=2);


/**operadores logicos
 * ! Not  (niega lo que es verdadero es falso y viceversa)
 * || Or (cuando tengo 2 o mas condiciones conq ue una se cumpla  el OR validara)
 * && And ( cuando tengo 2 o mas condiciones  todas tienen que cumplirse es decir ser verdaderas para que and se valide )
 */
console.log( true);
console.log( !true);

console.log(9 === 9 || 9 === "9"); //output: true   solo se requiere que una de las condiciones se cumpla para que sea verdadero
console.log(9 === 9 && 9 === "9");  // output: false

console.log(9 === 9 && "9" === "9");  //output: true





  
 
 
 
 
 