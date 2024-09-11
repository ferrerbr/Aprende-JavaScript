const $cards =document.querySelector(".cards");
console.log($cards);// accedemos  la etiqueta que tiene el id cards
console.log($cards.children);// aqui podemos acceder a cada una de la figues que se encuentran en cards
//aqui accedemos al hijo niumero 3 por la notacion de accedes a los items
console.log($cards.children[2]);
//para accder al elemento padre de cards 
console.log($cards.parentElement);
//si queremos acceder al alemento padre node
console.log($cards.parentNode);


//podemos acceder al ultimo elemento hijo o al primero 
console.log($cards.firstChild);//aqui me regresa el primer nodo hijo(el primer nodo es un salto de linea)
//si queremos detectar el porimer elemento 
console.log($cards.firstElementChild);
//si queremos acceder al ultimo  elemento
console.log($cards.lastElementChild);


//tambien podemos detectar el elemto hermano anterior y el posterior
console.log($cards.previousElementSibling);
//tambien podemos detectar el siguient elemento 
console.log($cards.nextElementSibling);

//el metodo closest es un metodo  va buscar el ancestro  mas cercano
console.log($cards.closest("div"));// aqui y busca mi etiqueta hacua afuera mas cercana


//
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));












