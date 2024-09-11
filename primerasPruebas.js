const $botonP = document.getElementById("boton-botoncito")
const $division =document.querySelector(".centar")
console.log($botonP);

$botonP.addEventListener("click",function () {
    const mensajeEX = document.querySelector(".mensaje")
    console.log(mensajeEX);
    
    if (mensajeEX){
        const $cajaP =document.querySelector(".acomodar")
        $cajaP.removeChild(mensajeEX)
    
    }else{
        const mensaje = document.createElement("div");
    mensaje.textContent="Felicidades amigo"
    mensaje.classList.add("mensaje")
    $division.insertAdjacentElement("afterend",mensaje)
    }
    
});


//beforebegin -   !=  - afterend
// afterbegin -   !=  - beforeend