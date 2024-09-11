//forma de definir funciones anonimas expresadas
//una funcion expresada se genera cuando a una varible le adsignas el valor de una funcion expresada

const saludo =function() {
    console.log("hola");    
    
}
saludo();
//al no ser una funcion declarada no puede ser llamada anter de ser declarada

const saludoArrow =()=>{
    console.log("hola");    
    
}
saludoArrow();


const saludoArrow2 =()=>console.log("hola");    
saludoArrow2();


const saludoArrow3 =(nombre)=>console.log(`hola ${nombre}`);    
saludoArrow3("irma");

 
 //cunado una funcion flecha solo recive un parametro no es necesario poner parentesis
const saludoArrow4 = nombre => console.log(`hola ${nombre}`);    
saludoArrow3("brandon");

//aqui existe un return explicito

const sumar = (a,b) => a+b;
console.log(sumar(9,9));
//cuando tengo mas de una linea de codigo ya no puedo realizar el return implicito

console.log("---for each sin arrow fuction---");

const numeros = [1,2,3,4,5,6,7,8,9,0];
// si queremos sobre cada uno de los numeros  podriamos usar for each
numeros.forEach(function(el,index) {
    console.log(`el elemento ${el} esta en la posicion ${index}`);

}
)

console.log("---for each con arrow fuction---");

numeros.forEach((el,index) => console.log(`el elemento ${el} esta en la posicion ${index}`));

//las arrow fuctions  no respetan el contexto debido a que no tienen [] {} las arrow reconocer el contexto de su padre 

function perro() {
    console.log(this);
    
    
}
perro();


const perro2 = {
    nombre:"firularis",
    ladrar:()=>console.log(this)
        
    
}
perro2.ladrar();
// aqui si recnocer eñ copntexto en el que se encuentran
const perro3 = {
    nombre:"firularis",
    ladrar(){
        console.log(this)
    }
    
}
perro3.ladrar();