/** */
//funcion expresada-funcion anonima  y no puedes ser llamada ander de ser declarada
 const hola=function(){
    console.log("hola mundo");
    
 }

 hola()

//hay una forma de ser expresada 
const hola_2 = ()=>{
    console.log("Hola mundo desde la funcion Hola_2");
    
}
hola_2();
//pero aun podemos elimiar algunos caracteres para expresarla , esto solamente cuando tenemso una linea de codigo que ejecutar

const hola_3 = ()=>console.log("Hola  mundo desde la funcion Hola_3");

hola_3();

//cuando una funcion flecha recibe un unico parametro no es necesario poner los parantesis 

const hola_4 =nombre=>console.log(`hola ${nombre}`);

hola_4("brandon")


//tambien la funcion flecha ya tiene un return implicito
const suma = (a,b)=>{ return a+b};
let c = suma(5,6);
console.log(c);

// la nueva forma de declarar sin usar el retur literal
const resta = (a,b)=>a-b;
 console.log(resta(8,2));

 //aqui no ocupe del return y el log  impime el resulado

 // si la funcion tiene varias lineas de codigos si usamos las llaves y 
 const funcionDeVariasLineas = ()=>{
    console.log("uno");
    console.log("dos");
    console.log("tres");
    
 }
 funcionDeVariasLineas();
//en este caso ya no puedo hace un retur implicito 

// en el foreach tambie lo podemos aplicar
const numbers = [1,2,3,4,5,6,7];
 numbers.forEach(function(e){
    console.log(e);
    
 })

 //asi quedaria plicando la arrow function en el foreach

 const numbers_2 = [10,12,13,14,15,16,17];

 numbers_2.forEach(e=>console.log(e));



 //las arrow function tiene la capacidad de capturar el obnjeto this del contexto donde se encuentren 

 //una funcion declarada

 function perro(){
    console.log(this);
    
 }
 perro();//aqui impime el objeto window 

 const perra = {
    nombre : "akira",
    ladrar(){
        console.log(this);// aqui el this seria el mismo objeto perra , por que es de este contexto 
        
    }
 }
 perra.ladrar()


 const dog = {
    nombre : "scooby",
    bark:()=>{
        console.log(this)}// aqui el this seria window , y no respeta el contexto 
        

 }
 dog.bark()

 //hay que tener mucho cuidado  al declarar metodos en los objetos con arrow function  por que reconocen el contexto del objeto padre , pero son usasdas en  librerias como react 


 