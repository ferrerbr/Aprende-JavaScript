/********   ETIQUETA TEMPLATE ******/
//es un modelo a seguir  para estructurar codigo 

const $cards = document.querySelector(".cards");//variable que punte a cards
const $template = document.getElementById("template-card").content;//una variable que apunte al  contenido del template 
const $fragment = document.createDocumentFragment();// cremos un fragmento para agregarle el codigo html comoforme se vaya generando 


//creamos un arreglo de objetos
const cardContent = [
    {
      title: "Tecnología",
      img: "https://picsum.photos/200"
    },
    {
      title: "Animales",
      img: "https://picsum.photos/201"
    },
    {
      title: "Arquitectura",
      img: "https://picsum.photos/202"
    },
    {
      title: "Gente",
      img: "https://picsum.photos/203"
    },
    {
      title: "Naturaleza",
      img: "https://picsum.photos/204"
    },
  ];


//recorremos nuestro arreglo de imagenes 
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);//le decimos ue encuentre la etiqueta img y le vamos a colocar en su atrbuto src el vaslor de img  de nuestris arreglo 

    $template.querySelector("img").setAttribute("alt",el.title);//asi mismo para el title 

    $template.querySelector("figcaption").textContent = el.title;// buscamos la etiqueta figcaption y en la propiedad texcontent ponemos el titulo de cada imagen

    let $clone = document.importNode($template,true);// aqui le decimos que copies troda la estructura de template, al decirle true le decimos que copie toda la estructura interna

    $fragment.appendChild($clone);


    
});

$cards.appendChild($fragment);