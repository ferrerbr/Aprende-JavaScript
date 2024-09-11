function Animales(nombre,genero){
    // atributos
    this.nombre = nombre,
    this.genero = genero;
    
    //metodos
    this.sonar= function(){// caundo estemos trabajando con funciones constructoras los       atributos y metodos deben colgar el objeto this
        console.log("hago sonidos por que estoy vivo");
 
    }

}


function perro(nombre, genero, tamanio){
    // super manda a llamar a el constructo padre
    this.super = Animales;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

// perro esta heredando de animal
perro.prototype = new Animales();
perro.prototype.constructor = Perro;
const snoopy = new Animales()