

/***************COMO INTERACTUAR CON LOS ATRIBUTOS DE LAS ETIQUETAS HTML *************/

//existen 2 formas de mandar a llamar a esos elementos

//accedemos al atributo lang
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// no siempre funciona ...ponesmos a prueba con enlaces

console.log(document.querySelector(".link-dom").href);// trae la url

console.log(document.querySelector(".link-dom").getAttribute("href"));// trae solo el valor en cadena


//como puedo establecer un nuevo valor a loos atributos


//cambiamos el idioma a es  con la notacion de punto
document.documentElement.lang="es";
console.log(document.documentElement.lang);

// si tenemos un .getAttribute tambien tenemos un setAttribute
//get
console.log(document.documentElement.getAttribute("lang"));
//set
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang"));

// es recomendable guardar mis elemento del DOM en constantes por si quisiera cambiar sus valores internos
const $linkDOM = document.querySelector(".link-dom")

// en algunas cituacones declaran las variable con el signo $ para indicar que es un elemento del DOM 


// aqui vamos a manipular el atrubuto target de la etiqueta que tenia  la clase link-dom
$linkDOM.setAttribute("target","_blank")
//aqui vamos a modificar el atributo href que anteriormente tenia el valor de dom.html
$linkDOM.setAttribute("href","https://www.facebook.com")

//cuando cambiamos el atributo target  tambien deberiamos cambiar el atributo rel  a nooperner para decir que no tienen relacion y hacer segura nuestra pagina principal
$linkDOM.setAttribute("rel","noopener")

//tenemos un atribute HAS que pregunta mi etiqueta o id o clase de html tiene este atributo
console.log($linkDOM.hasAttribute("rel"));
console.log($linkDOM.hasAttribute("name"));
//tambien tenemos un remuve atribute 
//$linkDOM.removeAttribute("rel")

//para DATA ATRIBUTES ES DIFERENTE 
console.log($linkDOM.getAttribute("data-description"));
//mediante la notacion de punto 
console.log($linkDOM.dataset);//aqui los guarda en un dato del tipo mapa
console.log($linkDOM.dataset.description)// aqui mediante la notacion del punto le indico que me traga el data atribute decrption

//como modifico los data-atributes
$linkDOM.setAttribute("data-description","MODELO DE OBJETO DEL DOCUMENTO ")
console.log($linkDOM.getAttribute("data-description"));

//Con la notacion del punto
$linkDOM.dataset.description="da clic para inicar sesion en tu cuebta de fb";
console.log($linkDOM.getAttribute("data-description"));

// si yo quisara validad si tiene un data atribute 
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id")
console.log(($linkDOM.hasAttribute("data-id")));









