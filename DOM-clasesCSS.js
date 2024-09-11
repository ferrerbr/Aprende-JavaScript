/** */

//definimos una constante  que apunta a una clase nombrada card
const $card = document.querySelector(".card");
//imprimimos la linea de codigo html que contiene esa clase
console.log($card);

//accedemos al valor del atributo class
console.log($card.className);//output: card
//calsslist devuelve un domtokenlist que idica los elemento de mi clase
console.log($card.classList);
//tenemops varios metodos en classlit que evalua si mi clase  contiene  la clase rorate45
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45")//aqui usamso para agregar  la clase  a la clase card

console.log($card.classList.contains("rotate-45"));// vemos si ahora que se lo agregamos si ya no da true
console.log($card.className);//aqui impirmimos el valor y vemso que ya cambio por card rotate45
console.log($card.classList);// aqui impimimos  el DOM tokenlist con dos elementos

//podemos quitar una clase con el metod remove
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45")); //aqui confirmamos que ya no la tiene 

//el metodo toggle agrega la clase o la quita , si la ya contiene esa clase se la quita y si no la tiene se la pone
$card.classList.toggle("rotate-45") 
console.log($card.classList.contains("rotate-45"));

//par reeplazar una clase por otra 
$card.classList.replace("rotate-45","rotate-135")



//´podemos  o agregar o quita r  varias clses a la vez 
$card.classList.add("opacity-80","sepia")

$card.classList.remove("opacity-80","sepia")

$card.classList.toggle("opacity-80","sepia")
