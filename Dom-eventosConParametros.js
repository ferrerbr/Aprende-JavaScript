//cualquier eventento solo puede recibir  com parametro un parametro  el paramaetro evento 


//manejador mulyiple
function  saludar(nombre ="desconocido"){
    alert(`hola ${nombre} `)
}
const $eventoM = document.getElementById("eventoMultiple");



$eventoM.addEventListener("click",(e)=>{
    alert("Hola mundo manejador de eventosMultiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event); 
    
})
$eventoM.addEventListener("click",()=>{//creamos una funcion flecha para que podamos mandar aa llamar a nuestra otra funcion del evento las veces que queramos
    saludar();
    saludar("brandon");

})

//podemos eliminar eventos de un elemento
//solo se puded hacer con eventos multiples

const $eventoRemover = document.getElementById("eventoRemover");

const removerDClick = (e)=>{
    alert(`removiendo el evento de tipo ${e}`);
    $eventoRemover.removeEventListener("dblclick",removerDClick);
    $eventoRemover.disabled =true;

}

$eventoRemover.addEventListener("dblclick",removerDClick);
