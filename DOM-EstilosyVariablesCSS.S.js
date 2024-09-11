const $linkDOM =document.querySelector(".link-dom");

console.log(($linkDOM.style));// regresa un objeto CSS DECLARATICON
//regresa todas la propiedades de css y estan declaradas en formato camel case pero 
console.log($linkDOM.getAttribute("style"));// aqui me trae el valor de ese atributo


//si queremos acceder a un aproppiedad en particular
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

// tambien se puede acceder asi a las propiedades de css pero 
//aqui me regresa un objero CSSlet declaration con los valores por defecto
console.log(window.getComputedStyle($linkDOM));
//mandamos a llamar un aproppiedad en especifico
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//estableces valores 
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");

$linkDOM.style.width = "50%";
$linkDOM.style.textAlign ="center";
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = "5rem"

//aqui podemos revisar que ya se van agregando mas  estylos en nuestro objeto 
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"))//me regrsa los estilos en formato cadena 


//variables css(CUSTOM PROPERTIES)´propiesdades condigurables de css
const $html=document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);
$body.style.backgroundColor =varDarkColor;
$body.style.color =varYellowColor;

$html.style.setProperty("--dark-color","#002");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-color",varDarkColor)

    





