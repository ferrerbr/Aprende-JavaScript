/*hay 3 maneras de definir eventos en  js
https://developer.mozilla.org/en-US/docs/Web/Events*/

function holaMundo (){
    alert ("Hola mundo desde Java script");
    console.log(event);

}

const $eventoS =document.getElementById("eventoSemnatico");
$eventoS.onclick = holaMundo;//sin parentesis para que no se ejecute al cargar nuestra pagina
 //solo se pouede definir una funcion por evento
$eventoS.onclick =function(e) {

    alert("hola mundo manejador de eventos semanticos");//
    console.log(e);
    console.log(Event)
    
}

//si queremos manejar mas de un evento 

const $eventoM =document.getElementById("eventoMultiple");

// puede recibir varios eventos
$eventoM.addEventListener("click",holaMundo)
$eventoM.addEventListener("click",(e)=>{
    alert("Hola mundo manejador de eventosMultiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
    
    
    
    
})
