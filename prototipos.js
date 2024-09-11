//POO
/**las clases (modelo a seguir)
 * los objetos es una instancia de la clase
 * -atributos(caracteristicas o propiedades)(variables dentro del un objeto)
 * -metodos(son las acciones que un elemento puede realizar)(son funciones dentro de objetos)
 * 
 * 
 *  un prototipo es un mecanismo por el cual un objeto puede heredar atributos y metodos de un objeto padre 
 
*/

const animal ={
    nombre : "snoopy",
    sonar(){
        console.log("hago sonidos por que estoy vivo");
        
    }
}
animal.sonar()

// el prototipo object

const animal2 ={
    nombre : "lola bunny",
    sonar(){
        console.log("lola hace sonidos por que estoy viva");
        
    }
}
animal2.sonar()

//crear un funcion (FUNCION CONSTRUCTORA)
// un funcion genera un prototipo vacio

function Animales(nombre,genero){
    // atributos
    this.nombre = nombre,
    this.genero = genero;
    
    //metodos
    this.sonar= function(){// caundo estemos trabajando con funciones constructoras los       atributos y metodos deben colgar el objeto this
        console.log("hago sonidos por que estoy vivo");
 
    }

}

const snoopy =new Animales("snoopy", "macho");
    lola =new Animales("lola", "hembra");
    
console.log(snoopy);
console.log(lola);

// lo ideal es que las funciones contructoras solo tengan atributos y no metodos


function Animales2(nombre,genero){
    // atributos
    this.nombre = nombre,
    this.genero = genero;

}


// Metodos agregadodos al prototypo de la funcion constructora 
// asignamos por fuera al prototypo
Animales2.prototype.sonar = function(){
    console.log("hago sonidos por que estoy vivo");
}
Animales2.prototype.saludar = function(){
    console.log("hola");
}

console.log("---se agregaronlos metodos por fuera-----");

const snoopy2 =new Animales2("snoopy", "macho");
    lola2 = new Animales2("lola", "hembra");
    
console.log(snoopy2);
console.log(lola2);
