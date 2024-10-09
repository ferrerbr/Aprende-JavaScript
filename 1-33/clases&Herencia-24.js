/**Las clases fueron introducidas desde ECMAscript 6 
 * las clases internamente son prototipos 
 */


//las clases no reciben parametros tienen un metodo especial constructor donde hacemos la signacion de las propiedades
class Animal {
    constructor(nombre,genero){
        //Atributos
        this.nombre = nombre;
        this.genero =genero;
    }

    //Metodos
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
        
    }
    despedirse(){
        console.log("Adios");
        
    }
}
// aqui internamente JS  hace todo lo que habiamos hecho en los prototipos pero aqui  es mas facil escribir 
//ya no necesitamos sacar los metodos y despues asignarcelos 

const brandon = new Animal("Brandon","macho");
console.log(brandon);
brandon.saludar();
const mimi = new Animal ("Mimi","Hembra")
console.log(mimi);
mimi.saludar();

//---------------HERENCIA------------
class Humano extends Animal{
    constructor(nombre,genero,edad){
        //con el método super se manda a llamar  el cosntructor  de la clase padre
        super(nombre,genero)
        this.edad = edad;
    }

    //METODOS
    //aqui mismo sobrescribimos el metodo 
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y soy un ${this.genero} `);
        
    }
    hablar(){
        console.log(`soy un Humano con ${this.edad} años de edad`);
        
    }


}

class Raton extends Animal{
    constructor(nombre,genero,edad){
        super(nombre,genero);
        this.edad = edad;
    }

    //METODOS
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y soy un ${this.genero} `);
        
    }
    chillar(){
        console.log(`soy un raton de ${this.edad} años edad`);
        
    }
    despedirse(){
        console.log("Adios mundoooooo");
        
    }

}

const juan = new Humano("juan","macho",50);
const mickey =new Raton("Mickey Mouse","macho",7);


//objetos de tipo Humano Y Ratón
console.log(juan);
console.log(mickey);
//objetos de tipo Animal
console.log(brandon);
console.log(mimi);

//ejecutamos el metodo saludar 
juan.saludar();
mickey.saludar();
//---------
brandon.saludar();
mimi.saludar();

//ejecutamos metodos propios de Humano y Raton

juan.hablar();
mickey.chillar();

//ejecuatamos el metodo despedirse

juan.despedirse();
mickey.despedirse();
//--------
brandon.despedirse();
mimi.despedirse();






