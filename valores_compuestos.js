/**--------------Funciones-------- */
console.log("FUNCIONES");

//un bloque de codigo autocontenido independiente al ambito global se define una sola vez y se puede ejecutar las veces que lo necesites, las funciones pueden recibir o no parametros y pueden devolver o no un valor
//las funciones tambien se consideran objetos
//existen funciones declarada y funciones expresadas

//funcion declarada
console.log("FUNCIONESDECLARADAS");

function NombreDeLaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

//esto es una invocacion de funcion
NombreDeLaFuncion();  ///esta funcion no recibe parametros ni devuelve valores
NombreDeLaFuncion();
NombreDeLaFuncion();
NombreDeLaFuncion();// aqui se invoco la funcion 4 veces 


//Funcion que devuelve valores
console.log("FUNCION QUE DEVUELVE VALORES");
function FuncionDevuelveValor(){
    console.log("uno");
    console.log("dos");
    return"Lafuncion devuelve est cadena como valor";

}
let valorDeFuncion = FuncionDevuelveValor(); // aqui guardamos el valor de la cadena en la variable
console.log(valorDeFuncion) //mandamos a imprimir el valor que devolvio la funcion y que habiamos almacenado en la variable valorDeaFuncion

//que pasaria si colocamos 2 return dentro de una misma funcion
function FuncionDevuelveValor2(){
    console.log("uno");
    return 19;  // cuando colocamos un retur en medio, la funcion devuleve el valor y finaliza la ejecucion del codigo/ignora todo loque hay por debajo de el retur
    console.log("dos");
    return"Lafuncion devuelve est cadena como valor";

}
let valorDeFuncion2 = FuncionDevuelveValor2(); // aqui guardamos el valor de la cadena en la variable
console.log(valorDeFuncion2)

//funcion que recibe argumentos(valores) pero no devuelve valores
console.log("FUNCION QUE RECIVE VALORES PERO NO DEVUELVE VALORES");

function FuncionRecibeValores(nombre,anos){
    console.log(`hola mi nombre es ${nombre} y tengo ${anos} años`);
    
}

FuncionRecibeValores("Brandon",26)// hacemos la invocacion de la funcion y entre parentesis colocamos los argumentos
FuncionRecibeValores();  //si hago la invocacion de la funcion y no paso parametros o argumentos estos tomaran como valor undefined

//puedo colocar valores por defecto en caso de que no se ingresen valores

function FuncionRecibeValores2(nombre = "desconocido",anos = 0){
    console.log(`hola mi nombre es ${nombre} y tengo ${anos} años`);
    
}

FuncionRecibeValores2();// cuando hacemos la invocacion de la funcion y lo le damos parametro est tomara por defecto los que definimos en la declaracion de la funcion

//

funcionDeclarada();// aqui  la funcio fue invocada  fue llamada antes de ser declarada

// cunado la funcion  es delcara de esta forma hace un hoistin con las funcioes y las eleva al ambito global
function funcionDeclarada (){
    console.log("esto es un funcion declarada puede invocarse en cualquier parte de mi codigo, inclusive antes de que la funcion sea declarada")
}

//funcion expresada
//aqui  se hace una funcion anonima
//asiganamos la funciona una funciona una variable

const funcionExpresada = function(){
    console.log("Esto es una funcion expresada, es decir una funcion que le ha asignado como valor a una variable si invocamos esta funccionantes de ser declarada JS nos dir un error por que no puede acceder anter de inicializarla");
}

/**--------------Arregplo [Arrays]-------- */
console.log("Arregplo [Arrays]");

const arrreglo=[];
const b =[1,true,"hola",["A","B","C"]] //un arreglo es un conjuto de elementos
console.log(arrreglo)
console.log(b)
console.log(b.length);

//si queremos accedeer a in item 
console.log(b[2])//accedemos a el item con el numero 2
console.log(b[3][2])

const c = Array.of("x","y","z",1,2,3)  //accedemos al objeto prototipo arrayi mediante of gregamos elemntos,
console.log(c)

const d =Array(10).fill(false)
console.log(d)

const e = new Array(); //crear un arreglo desde el constructor
console.log(e)

const colores = ["Rojo","Verde","Azul"];
console.log(colores);

colores.push("negro");//metodo para agregar un elemento al final de el arrays
console.log(colores)

colores.pop();// metodo para eliminar el ultimo elementode mi array
console.log(colores)


const colores2 = ["Rojo","Verde","Azul"];
colores.forEach(function(el){
    console.log(`<li id="${el}></li>`)

})
colores.forEach(function(el,index){// el primer parametro apunta al valor del item que esta recorriendo el segundo parametro apunta al valor del item

    console.log(`<li id="${index}>${el}</li>`)

})

/**--------------Objetos [Objects]-------- */
console.log("Objetos [Objects]");

//se debe trabajar los objetos con const para que la referencia a su ubicacion  no sea cambiada por otro objeto

// un objeto es una colecion de LLaves-valores 

const ob ={};// creando un objeto 
console.log(ob)


const oc = new Object(); //creando un objeto desde el constructor
console.log(oc);


// dentro de un onjeto a cada una de las variables se les llama propiedadesy a las funciones se les llamada metodos
const po ={
    nombre : "brandon",
    apellido : "ferrer",
    edad : 35,
    pasatiempos : ["correr","leer","programar"],
    contacto : {// un objeto puede contener un objeto
        email : "ferrer@mail.com",
        telefono :55485814263,
        instagram : "br.ferrer"
    },
    educacion : "universidad",
    saludar: function(){ // un objeto puede tener elemento que son funciones
        console.log("hola:")
    },
    decirMiNombre:function(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y me puedes seguir como ${this.contacto.instagram} en instagram`)// aqui la palabra hace referencia al mismo objeto
    }
}
console.log(po);
console.log(po["nombre"]);// acedemos al valor de un aributo mediante su llave con corchetes
console.log(po.nombre);// podemos acceder al valor tambien como si accedieramos  a un apropiedad
console.log(po.pasatiempos[1])// accedemos al valor  pero como el valor es una lista colocamos entre corchetes el valor del item al que quermos acceder
console.log(po.contacto.instagram);//accedemos al valor del objeto contacto con la lleve instagram
console.log(po.saludar())
po.saludar() //mandamos a llamar el metodo saludar de mi objeto po ese metodo internamente en el objeto apunta a una funcion
po.decirMiNombre()

//metodos de los objetos
console.log(Object.keys(po)); //me regresa una lista de  son mis llaves
console.log(Object.values(po));//me regresa una lista de los valores 
console.log(po.hasOwnProperty("nombre")); // evalua si el nombre de propiedad dad existe en el objeto
console.log(po.hasOwnProperty("fecha")); //da falsa por que no existe una propiedad con ese valor














