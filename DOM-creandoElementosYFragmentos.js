//cramos la etiuetas
const $figure =document.createElement("figure");
const $image =document.createElement("img");
const $figcaption =document.createElement("figcaption");
const $figcaptionText =document.createTextNode("Flores");
//ontenemos el padre al que vamos a agegar las etiquetas creadas
const $cards =document.querySelector(".cards");

//primero damos los atributos a img
$image.setAttribute("src","./src/flores.jpg");
$image.setAttribute("alt","flores")
//aregamos la clase card a mi figure
$figure.classList.add("card")


//necesitamos agregar las etiquetas  al arbol del DOMA
$figcaption.appendChild($figcaptionText)
$figure.appendChild($image);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// como crear  varios elementos 

//tenemos una array que lo queremos agregar como lista
const estaciones =["Primavera","Verano","Otoño","Invierno"],
    $ul =document.createElement("ul");//creamos un elemento de lista desordenada

document.write("<h3>Estaciones del año</h3>");// escribimos al final de mi documento el titulo
document.body.appendChild($ul);//agregamos a mi body la lista desordenada
estaciones.forEach(el=>{// hacemos una funcion que recorra mi array y por cada elemento cree una etiqueta li
    const $li = document.createElement("li");
    $li.textContent = el; //agregamos texto adentro de mi etiqueta li
    $ul.appendChild($li)//agregamos la etiueta li adentro de mi lu

})

//usando inner HTML pero de esta forma no estariamos creando un nodo html

const continentes =["Africa","America","asia","oceania"],
    $ul2 =document.createElement("ul");

document.write("<h3>Contienentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML="";
continentes.forEach(el => {(
    $ul2.innerHTML += `<li>${el}</li>`)
})




//para evitar estar iterando directamete al DOM 
//hacemos la iteraciones sobre un fragmento y despues lo insertamos 

const meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const $ul3 = document.createElement("ul"); //cramos un elemento ul
const $fragment = document.createDocumentFragment();// creamos un fragmento

//creamos elemento mediante nodos
meses.forEach(el => {
    const $li = document.createElement("li"); //crear un elemento li
    $li.textContent = el;// agregar el texto a nuestra li
    $fragment.appendChild($li);//aqui agregamos nuestro li a nuestro fragmento
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);// agregamos toda nuestra lista de li(fragmento) al lu 
document.body.appendChild($ul3);//mandamos el lu con todos nuestros li a el dom






