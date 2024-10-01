/**Los objetos son colecciones de propiedades(llaves-valores) cuando estas propiedades  tiene como valor  una funcion entonces se llaman metodos
 * se suelen definir como constantes  por que son valores compuestos
 * se dice que en JavaScript todo es un objeto
 * 
 */

// declarando un objeto
const objeto = {};
console.log(objeto, typeof objeto);
// tambien se pueden declarar con el constructor pero esta forma ya esta en desuso
const obj =new Object();
console.log(obj, typeof obj );

/* objeto ={
    llave1 : valor1,
    llave2 : valor2,
    llave3 : valor3,
    llave4 : valor4,
    }

*/

const brandon = {
    nombre : "Brandon",
    apellido : "ferrer",
    edad : 26,
    pasatienpos : ["programar","caminar","leer"],
    soltero : true,
    contacto : {
        correo : "ferrerbr@brandon.com",
        instagram : "br.onlyfans",
        github : "br.ferrer"
    },
    saludar : function(){
        console.log("Hola");
    }
}
 console.log(brandon, typeof brandon);

 // como accedemos a los valores especificos de los valores
 //podemos acceder mediante los corechetes  colocando adentro entre comillas el nombre de la llave 
 // podemos acceder mediante la notacion del punto

 console.log(brandon["nombre"]);
 console.log(brandon.nombre);

 // si queremos acceder a un metodo entonces debemos colocar ( ) al final del metodo
brandon.saludar();
 

// cuando queremos acceder a una porpiedad  solo colocamos la notacion del punto, para acceder a un metodo se colocan los corchetes al final 
// un caso podria ser  en una cadena cuando usamos  cadena.length accedemos a una propiedad y cadena.split("") si se usan los parentesis 


// para acceder a los elementos mas internos seguimos con la notacion del punto 
console.log(brandon.contacto.github);

 
const brando_2 = {
    nombre : "Brandon",
    apellido : "ferrer",
    edad : 26,
    pasatienpos : ["programar","caminar","leer"],
    soltero : true,
    contacto : {
        correo : "ferrerbr@brandon.com",
        instagram : "br.onlyfans",
        github : "br.ferrer"
    },
    saludar : function(){
        console.log(`Hola ${this.nombre}`); // con la parabra reservada this hacemos referencia alas variables de este contexto
    }
}
 brando_2.saludar()
 // metodos importantes de los objetos 
 console.log(Object.keys(brandon)); // metodo de el prototipo Objeto
 console.log(Object.values(brandon));

 
 console.log(brandon.hasOwnProperty("soltero"));
 console.log(brandon.hasOwnProperty("nacimiento"));

 
 
