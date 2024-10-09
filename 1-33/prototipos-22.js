/** un prototipo es un modelo a seguir para poder generar instancias 
 * un objeto es una istanciade una clase o prototipo
 * 
 * los objetos van a tener dos acultades 
 * atributos: variable dentro de  de un objeto 
 * Metodos : son las acciones que un objeto puede realizar(son funciones dentro de un objeto)
 *  Java Scriot es un leguaje operientado a objeto basado en prototipos no es clases , sin embargo las clases se pueden usar desde ECMA script 6 
 * un porototipo es un mecanismo por el cual un objeto va a poder heredar  propiedades y metodos  de un objeto padre  
 * 
 * 
 */
const animal ={
    nombre:"Snoopy",
    sonido(){
        console.log("Guau Guau");
        
    }
};
console.log(animal); // si lo mandamos  a consola nos dice [[Prototype]]:Objet , un objeto literal , que es el prototipo mas fundamental mas prinmitivo es el objeto con su constructor

animal.sonido();

//si quisieramos hacer otro objeto parecido al de arriba pero con diferentes nombres tendriamos que volver a llenar cada uno de sus atributos y metodos 
const animal_2 ={
    nombre:"Lola Bunny",
    sonido(){
        console.log(`Hola soy ${this.nombre}`);
        
    }
};
console.log(animal_2);

animal_2.sonido();

//para evitar hacer eso realizamos la funcion constructora 
//  la funcion constructora se  realiza una sola vez y apartir de ahi  generar nuevas instancias o objetos 
// los prototipos y clases  se declarar con tecnica UppuerCamelCase

function Animal (nombre,genero){
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //cuando estemos trabajando  con fuciones constructor astanto los  atributos como los metodos deben llebar this.

    //Métodos
    this.sonidos = function(){
        console.log(`Hola soy ${nombre}`);

    }
}
const snoopy = new Animal("Snoopy","macho");
const lola = new Animal("Lola Bunny","hembra");

console.log(snoopy);
snoopy.sonidos();

console.log(lola);
lola.sonidos();

//como podemos observar los dos animales  ocupan la misma fucnion sonidos y eso ocupa memoria
//lo correcto sera asignarle el metododo sonar 
//es decir ponerlo por fuera y despues asignarsselo  a ese portotipo

//en js lo ideal es que nuestras fucniones constructoras solo tengan sus stributos

//fucnion constructora  donde asignamos los metodos al prototipos no a la fucnion como tal
function Humanos (nombre,genero){
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //cuando estemos trabajando  con fuciones constructor astanto los  atributos como los metodos deben llebar this.

    
}

//Métodos agregados al prototipo de la funcion constructora
Humanos.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}`);
}

// de esta forma va a evitar que los metodos se duplique internamente 
const brandon = new Humanos("Brandon Perez","macho");
const maria = new Humanos("Maria ","hemabra");

console.log(brandon);
brandon.saludar();
console.log(maria);
maria.saludar();