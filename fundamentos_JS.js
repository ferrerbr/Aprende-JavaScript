console.log("hola");
var hola = "holamundo" //si la coloco se hace seimpre una variable global ya no es un buen practica usarla 
 let hello = "hello world"// es una variable de ambito de bloque

 console.log(hola);
 console.log(hello);

 console.log(window);// es un objeto que mapea toda la ventana del navegador para JS
 console.log(window.hola); // se impreme la variable por que fue definida como var 
 console.log(window.hello); //no se imprime la varieble por que fue definida como let y eso solo es una variable de bloque



/*--------------  var vr let------------ */



 console.log("****************** var **************")

 var musica = "Rock";//aqui comienza un bloque
 console.log("Variable musica antes del bloque",musica);
 //{} inidca un boloque 
 {
    var musica ="Pop";
    console.log("Variable musica dentro del bloque",musica);

 }

 console.log("Varieble musica despues del bloque",musica);
 // la variable var = pop se eleva y se hace global  por eso se vuelve a imprimir

 // ahora lo hacemos con let

 console.log("****************** let **************")
 let musica2 = "Rock";//aqui comienza un bloque
 console.log("Variable musica antes del bloque",musica2);
 //{} inidca un boloque 
 {
    let musica2 ="Pop";
    console.log("Variable musica dentro del bloque",musica2);

 }

 console.log("Varieble musica despues del bloque",musica2);



/*--------------constantes------------ */



 console.log("******************const**************");

 //vamos a usar const cuando tengamos variable que no van a cambiar su valor a lo largo flujo, se deben dar un valor  desde que se  declaran
 const pi = 3.1415;

//podemos definir valores compuestos(objetos y arreglos) como const por que se hace referencia a una ubicacion y no al valor como let y por lo tanto despues puedo cambiar algunos valores dententro del valor compuesto 

const colores = ["blanco","rojo","azul"]
console.log(colores)
colores.push("morado")// añadimos un elemnto que se va a posicionar en el ultimo item 
console.log(colores)


// pero si yo declaro valores primitivpos como const no los podre cambiar 



/*--------------cadenas(strings)------------ */



console.log("******************cadenas**************");
let nombre = "Brandon"; // se pueden usar comillasdobles "" o comillas simples``

let saludo =new String("hola usuario"); //usamos el operador new y con su constructor Strig para crear un dato del tipo cadena pero su uso esta en decadencia

console.log(nombre,saludo);

//podriamos usar la propiedad lenght
console.log(
   nombre.length,
   saludo.length)

//metodos los metodos siempre terminan en ()

console.log(
   nombre.toUpperCase(), //metodo de mayusculas
   saludo.toLowerCase()) //metodo de minusculas
   let lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";

   console.log(
      lorem.includes("amet"),// encuentra una coincidencia
      lorem.includes("juan"),
      lorem.trim(), //elimina espacios al inicio y final de la cadena
      lorem.split(" ")// divide la cadena de texto con el caracter insertado en los argumentos
   );


/*--------------template strings------------ */

let nombre1 = "brandon";
let apellido1 = "ferrer";

//concatenacion 
let saludo1 = "hola mi nombre es " + nombre1 + " " +apellido1 + ".";
console.log(saludo1)

//para evitar toda esta contetanacion podemos hacer interpolacion
//template strings 
let saludo2 =`hola mi nombre es ${nombre1} ${apellido1}.`
console.log(saludo2)

let ul1 =" <ul><li>primavera</li><li>verano</li><li>otoño</li><li>invierno</li></ul>"//cuando uso comillas sobles o simples no me permite hacer saltos de lineas y identaciones
console.log(ul1)

let ul2 = `
   <ul>
      <li>primavera</li>
      <li>verano</li>
      <li>otoño</li>
      <li>invierno</li>
   </ul>` // las template strings  respetan la identacion los espacion y  al mandarlas a imprimir  se imprimes con la mis ma estructura
console.log(ul2);


/**------------- Numbers ------- */

let a = 3; //definiendo una variable del tipo numero 
let b = new Number(5);//defininiendo una variable del tipo numero con su contructor
let c = 7.58
let d = "5.6"// esto es un cadena de texto


console.log(a,b);
console.log(c.toFixed(1)); //funciona para  devolver un nemero de decimales
console.log(c.toFixed(5));
console.log(parseInt(c));// regresa la parte entera de un numero 
console.log(parseFloat(c));// regresa la parte entera y flotante de un numero 

console.log(typeof(c), typeof(d)); // type of nos regra el tipo de dato
console.log(a+b)// aqui realiza una suma por que ambos datos son del tipo numero
console.log(c+d) //aqui realiaza un conctenacion por que un dato es del tipo numero y el otro es de tipo string
console.log(c+parseInt(d));// parseInt hace el cambio de la cadena a numero pero solo de la parte entera
console.log(c+parseFloat(d));// si uso parse.Float si hace el cambio completo de la cadna a numero
console.log(c+Number.parseFloat(d))// esto es igual que el anterior solo que se hace directamente de el constructor



/**------------- Bolean ------- */



let verdadero = true; /// tipo de dato boolean 
let falso = false;
let v = Boolean(false);// esto es exactamente lo mismo pero lo hacemos desde el constructor boolean, no es recomendable declarar asi


console.log(verdadero,falso,v);
console.log(typeof(verdadero),typeof(falso))

console.log(Boolean(0)) // un cero tiende a falso
console.log(Boolean(1))// un numero positivo tiende a positivo
console.log(Boolean(-4)) // tiende a verdadero
console.log(Boolean(""))// una cadena vacia tiende a falso 
console.log(Boolean("z"))// una cadena con uno o mas carateres tiende a verdadero


/**------------- Null Undefined NaN ------- */

//null y undefinied representan un variable que no tiene valor */


let indefinida;    // solo de declara pero no se inicializa undefined es asignada por el sistema cuando detecta que no ha sido asignado un valor
let nulo = null;   // este valor lo asigna el programador singinifica que la variable esta vacia

console.log(indefinida,nulo)

//Nan : NOT A NUMBER
let NoesunNumero = "hola"*3.7;
console.log(NoesunNumero)  // la consola regresa un NaN  cuando detecta una operacion aritmetica con datos que no son del tipo numero

/**------------- Null Undefined NaN ------- */









