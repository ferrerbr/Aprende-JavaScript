/**La herencia 
 * la capacidad de poder heredar caracteristucas de un a función constructora PADRE a una funcion constructora HIJA
 * 
 * Cadena Prototipica
 */

//funcion constructora animal 

function Animal(nombre,genero){
    //atributos
    this.genero = genero;
    this.nombre = nombre 

}
//metodos pegados al prototipo Animal
Animal.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} y soy  ${this.genero}`);
    
    
}
Animal.prototype.despedida = function () {
    console.log(`Adios `);
    
    
}

console.log(Animal);

//instanciamos un nuevo objeto llamado perro
const perro = new Animal("Scooby","macho");
console.log(perro);
perro.saludar();


//creamos una nueva fucion constructora que va a heredar de Animal para crear varios tipos de perros
function Perro(nombre,genero,tamaño){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamaño = tamaño;

}
//Perro esta heredando de Animal
Perro.prototype = new Animal();
//generarle su podrpio constructor a la funcion constructora perro 
Perro.prototype.constructor = Perro;

//podemos hacaer una sobre escritura de los metodos de el padre 
Perro.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} soy ${this.genero} y soy de una raza ${this.tamaño}`);
    
}

//vamos a crear un nuevo metodo exclusivco del metodo Perro

Perro.prototype.ladrar = function(){
    console.log(`${this.nombre} dice Guau Guau`);
    
}
const snoopy = new Perro("Snoopy","Macho","mediana");
const cobarde =new Animal("Cobarde","Macho");
console.log(snoopy);
console.log(cobarde);


// ejecutamos los metodos 
snoopy.saludar();
cobarde.saludar();

//ejecutamos los metodos de ladrar

snoopy.ladrar();
// cobarde.ladrar(); si quisieramos ejecutar el metodo ladrar en el objeto coabarde , no se podria debido a que el objeto coabarde es una instancia de Animal y esta indtancia no posee un metodo llamdo ladrar 
 

//ejecutamos  un metodo que no fue sobre escrito y vemos que fue heredado a el prototipo Animal
snoopy.despedida();
cobarde.despedida();



