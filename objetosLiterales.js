// un forma de escribir atributos y objetos y tambien de asignarlos 
let nombre ="Ferrer",
    edad = 7;
const perro = {
    nombre:nombre,
    edad:edad,
    ladrar:function() {
        console.log("Guar Guau");
    }
}
console.log(perro);

perro.ladrar();

// si la varible tiene el mismo nombre que la llave de la propiedad
const dog2 = {
    nombre,
    edad,
    ladrar(){
        console.log("Guar Guau");
    }
}

console.log(dog2);
console.log(dog2.nombre);
dog2.ladrar();

