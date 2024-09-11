//

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");


//introducinmos el codigo html en el figure
$newCard.innerHTML = `
<img src="https://picsum.photos/200" alt="aleatorio">
<figcaption> Aleatorio </figcaption>`;
console.log($newCard);
    
$newCard.classList.add("card");

//vamos a reemplazar un nodo, por ejemplo del tercer hijo de cards
$cards.replaceChild($newCard,$cards.children[2]);

//append child agreg al final 
//inset before , inserta antes de el nodo o elemento señalado
$cards.insertBefore($newCard,$cards.firstElementChild);

//metodo par eliminar 
//si queremos eliminar la ultima tarjeta
$cards.removeChild($cards.lastElementChild);

//existe un metodo que nos permite clonar un nodo , funciona muy parecido a import node
$cloneCards =$cards.cloneNode(true);//colocamos true para clonar el contenido de el nodo 

//insertamos ese clone al final  par areplicar todas las tarjetas
document.body.appendChild($cloneCards)