//metodos para insertar elemento, quitar y reemplazar
  
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");


//introducinmos el codigo html en el figure
$newCard.innerHTML = `
<img src="https://picsum.photos/200" alt="aleatorio">
<figcaption> Aleatorio </figcaption>`;
console.log($newCard);
/*************    INSERT ADJACENT-ELEMENT   ***** */

$newCard.classList.add("card");
//insertamos el elemento antes de cards
$cards.insertAdjacentElement("beforebegin",$newCard);// antes de iniciar el elemento 
$cards.insertAdjacentElement("afterbegin",$newCard);// despues de iniciar el elemento com primer elemento 
$cards.insertAdjacentElement("beforeend",$newCard);// dentro delñ elemento como ultimo elemento 
$cards.insertAdjacentElement("afterend",$newCard);//despues del elemento como nodo hermano


/*************    INSERT ADJACENT-HTML   ***** */
//
const $newCard2 = document.createElement("figure");// creamos una tarjeta2

//guardamos nuestro codigo html en una varible ponjemos el texto de figure vacio para despues introducrle el texto con inset adjacentText
let $contentCard = `<img src="https://picsum.photos/200" alt="aleatorio">
<figcaption></figcaption>`;

$newCard2.classList.add("card")///le añadimos la clase card a  mi tarjeta2
$newCard2.insertAdjacentHTML("beforeend",$contentCard)//añadimos codigo html adentro de figure

$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin","aleatorio")//insertamos el texto aleatorio dentro de figure , accedemos primero a figure medinte querie selector y despues insertamos adentro el texto

$cards.insertAdjacentElement("afterbegin",$newCard2);//añadimos mi elemento figure despues del elemeto cards padre


//tnemos otro metodos para acceder a introducir nuestro elemento como hermanos o hijos
/*before--- lo introduce comno hermano antes de el elemeno selleccionado
  after-----lo introduce como hermano despues de elemento seleccionado
  prepend--- lo intoduce como hijo en la primera posicion
  append----lo inrtroduce comno hijo en la ultiam posicion
*/




