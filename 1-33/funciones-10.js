/**Las fucniones son un bloque de codigo   que se puede reautilizar tantas veces como sea necesario, ouede o no recibir parametros , pueden o no devolver datos */

//Funcion Declarada
function estoEsUnaFuncion(){
    console.log("Hola");
    console.log("Esto es una Función");

}

//Invocar a la función
estoEsUnaFuncion();//esta fucnion no recibe parametros ni devuelve valores

//------------------------
function devuelveValor(){
    return "esto es un valor devuelto"
}
// el valor es devuelto pero debemos almacenarlo en una variable
//invocamos la función
valorDeFuncion = devuelveValor();
console.log(valorDeFuncion);

//Cuando ejecutamos una funcion  esta detiene la ejecucución en el momento que escuentra la parabra reservada return
function devuelveValor_2(){
    console.log("hola");
    console.log("la ejecución se detiene aqui");
    
    return "esto es un valor devuelto de la función devuelveValor_2"

    console.log("esta parte del codigo ya no se ejecuta ");
    
}
let valor = devuelveValor_2()

console.log(valor);


//Las fuciones   pueden recibir parametros para  hacer operaciones internas  en la funcion 

function saludar(nombre,edad){
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
    
}
saludar("brandon", 26)
// si nosotros  no asignamos el valor a los parametros  JS asigna undefined a esos valores 
saludar();

//para evitar esto podemos asignar valores por defecto

function saludar_2(nombre = "Desconocido",edad = 0){
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
    
}
saludar_2();

//Invocamos antes la función antes de declararla , eso pasa siempre con las funciones declaradas JS hace un HOISTING de las funciones

function funcionDeclarada(){
    console.log("Esto es una función declarada puede invocarse en cualquier parte de nuestro codigo , inclusive antes de la que función sea  declarada");
    
}

//Funcion Expresada -- o funcion anonima
// >>>>>fucionExpresada(); si quisiseramos ejecutar  esta parte JS  nos mandaria un eroor por que para la funciones expresadas no se pueden invocar hasa despues de su declaracion o definición

const fucionExpresada = function(){
    console.log("Esto es una función expresada que se le ha asignado como valor a una variable ");
    console.log("Si invocamos esta función antes de su definición JS nos mandara un error");
    
    
}
fucionExpresada();


// este tipo de funciones estan siendo cada vez mas usadas  para evitar errores al momento de compilación


