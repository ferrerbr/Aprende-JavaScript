/** las expresiones regulares: secuencia de caracteres que forman un patron  principalmente utilizado para la busqueda  de patrones de cadenas de caracteres */



let cadena = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis facilis quidem. Labore cupiditate aliquam excepturi ipsa, dolore, ipsam illo officia aliquid laboriosam perferendis temporibus! Eaque dolorem praesentium fugiat aliquid!"
//con el constructor RegExp(pattern: RegExp | string, flags?: string): [que son las banderas si no le ponemos solo busca la primera  coincidencia] 

 let expReg = new RegExp("lorem","");
 //otra forma de declarar una expresion regular 
 let expReg2 =/lorem/;
 
 //el metodo test solo te va a devolver si encuentra una conincidencia o no 
 //el este caso la coincidencia viene de "dolorem" y no de "Lorem" ya que esta expresion regular  no distinge entre mayusculas y minusculas
 console.log(expReg.test(cadena));
 console.log(expReg2.test(cadena));
 
 // aqui si estaria validando la cadena "Lorem" ya que al contener la bandera i como segundo argumento de RegExp le decimos que no distinga en tre mayusculas y minusculas
 let expReg3 = new RegExp("lorem","i")
 console.log(expReg3.test(cadena));

 //el metodo exec
 console.log(expReg3.exec(cadena));

 //si usamos la bandera g significa que busca todas las coincidencias
 let expReg4 = new RegExp("lorem","ig")
 console.log(expReg3.exec(cadena));
 // otra forma de buscar  es \d aqui le indico que coincide con cualquier numnero 
 let expReg5 = /\d/ig; //Valida a falso  ya que  en la cadena no se encuentra ningun número
 console.log(expReg5.test(cadena));
 
//tambien se puede establecer con rangos
 let expReg6 = /[0-9]/ig;
 let numTel = "5548012564"
 console.log(expReg6.test(numTel)); // valida a verdadero de el numero de telefono 
 
 
 