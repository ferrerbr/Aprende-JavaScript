/**Los objetos es una forma de escribir metods y o asignarlos  */

let nombre = "Brandon";
let apellido = "Ferrer";
let edad = 26;


//antes se asignaban variable asi 
const persona = {
    nombre:nombre,
    apellido:apellido,
    edad:edad,
    saludo:function(){
        console.log("hola ",this.nombre);
        
    }
    
}
console.log(persona);
persona.saludo();


//ahora se asignan variables  de esta forma 
// debido a que las variable  tienen el mismo nombre de la propiedad del objeto
//en el caso de los metodos se definen sin los dos puntos(:)

const  persona_2 = {
    nombre,
    apellido,
    edad,
    saludando(){// aqui eliminamos los dos puntos 
        console.log(`Hola persona 2 ${this.nombre}` );
        
    }
}

console.log(persona_2);
persona_2.saludando();
