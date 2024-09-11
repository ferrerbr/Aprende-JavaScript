console.log("------Elementos del documento-------");
//window se refiere a todo lo que se encuentra dentro de mis etiquetas html
console.log(window.document);

// no es necesario colocar window debido a que ese es el objeto de que pende todo 
console.log(document);

//doctype nos traela etiqueta <!DOCTYPE html>
console.log(document.doctype);

// nos tre todo el arbol del documento html
console.log(document.documentElement);

//nos tre el encabaezado
console.log(document.head);

//nos trae el body 
console.log(document.body);

//nos trae el UTF-8
console.log(document.characterSet);

//nops tre el titulo del documento
console.log(document.title);

//nos trae todos los link que hay en nuestro documento en una coleccion de HTML
console.log(document.links);

// nos vaa traer todas las imagenes que esncuentre en nuestro documento  
console.log(document.images);

//nos va a trer todos los scripts que encuentre en nuetro documento 
console.log(document.scripts);

//el setime out  solo es para retrasar la ejeccucion del codigo 
setTimeout(() => {
    //document.getSelection().toString() nos va a trer en forma de cadena lo que el usuario selecione en la pantalla
    console.log(document.getSelection().toString());
    
    
}, 4000);
// escribe en el documento hasta el final de todas las etiquetas lo que coloquemos entre ""
document.write("<h2>hola mundo desde el dom </h2>");



//------formas de capturar los elemtos------


// nos devuelve los elementos  que por nombre de etiqueta tenga li en una coleccion HTML
console.log(document.getElementsByTagName("li"));

// nos devuelve los elementos  que por nombre de clase se llaman 
console.log(document.getElementsByClassName("card"));

// nos devuelve los elementos  que por nombre  del atribiuto name  se llaman 
// lo regresa en un Nodelist
console.log(document.getElementsByName("nombre"));


// nos regresar el codigo HTML de la etiqueta que tenga ese id
console.log(document.getElementById("menu"));



//los tres primeros tres elementos fueron reemplazados por  dos metodos 
//*****************QUERYSELECTOR*************
//recibe como parametro un sleccto rvalido de css : id classe etiqueta html
//en este metodo si debemos poner el punto o # cuando nos referemos a clses o id 
//nos devuelve el codigo html de la etiqueta que tenga ese id o clase 
console.log(document.querySelector(("#menu")));

// tambien puede buscar por etiquetas de html  pero solo dvuelve la primera coincidencia
console.log(document.querySelector("a"));

//asi podemos traer todas las condiciones de las etiquetas y regresa una nodelistt
console.log(document.querySelectorAll("a"));

//podemos usar el metodo lenght
console.log(document.querySelectorAll("a").length);

//podemos usar el for each para imprrimir cada uno de los elementos de el nodelist
document.querySelectorAll("a").forEach((el)=> console.log(el));

// puedo usar la notacion de los corchetes para acceder a un elemento es especifico de la node list
console.log(document.querySelectorAll(".card")[3]);// aqui estaria accediendo el 3er elemento

//tambieh acepta slecctores desendientes 
// le estoy diciendo que en el id menu existen lisras que solo obtenda esas listas  separamos el id y la etiqueta con un espacio 
console.log(document.querySelectorAll("#menu li"));

//asi mismo le puedo decir que solo la primera concidencia o  usar a tomacion de los corchetes para acceder a una en especifico
console.log(document.querySelector("#menu li"));








 












