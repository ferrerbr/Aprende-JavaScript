/**1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/**Ejercicio 1.1 */

function numCaracteres (objeto){
    if(objeto ===""){
        console.log("Porfavor ingresa almenos un caracter");
        

    }else if((typeof objeto) === "string"){
        
        console.log("Esta cadena contiene ",objeto.length, " numero de caracteres");
    }else {
        console.error("Ingresaste algo que no es una cadena");
        
    }
}

let cadena ="hola mundo cruel"
let objeto = {hola:"buenos dias"}
let vacia = ""

numCaracteres(cadena);
numCaracteres(objeto);
numCaracteres(vacia)

/**Ejercicio 1.2 */

function recortarCadena (objeto,numero = 0 ){
    if(objeto ===""){
        console.log("Porfavor ingresa almenos un caracter");
        

    }else if((typeof objeto) === "string"){
        let retorno = [];
        for(let i = 0 ; i <= numero ; i++){
            retorno.push(objeto[i-1])
            
            
        }
        let nuevo = retorno.join("")
        console.log(nuevo);
        
        
        
        
    }else {
        console.error("Ingresaste algo que no es una cadena");
        
    }
}

recortarCadena(cadena,5)
 


/**Ejercicio 1.3 */
function separarCadena(objeto,caracter ){
    if(objeto ===""){
        console.log("Porfavor ingresa almenos un caracter");
        

    }else if((typeof objeto) === "string"){
        let primer = [];
        let segundo = []; 
        
        for(let i = 0 ; i <=objeto.length;i++  ){
            
            if(objeto[i] === caracter ||i ===(objeto.length) ){
                let primerAdjunto = primer.join("")
                segundo.push(primerAdjunto)
                //console.log(primerAdjunto);
                primer = []
                
            }else{
                primer.push(objeto[i])
                //console.log(primer);
            }
            
        }
        console.log(segundo);
        
        
        
        
        
        
    }else {
        console.error("Ingresaste algo que no es una cadena");
        
    }
}

let cadena3 ="Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores itaque omnis iste? Nulla, at labore! Saepe sint culpa, sapiente veritatis";/*  iste repellendus quam. Illo nesciunt neque earum repellat, maiores optio.";*/
separarCadena(cadena3," ")


/**Ejercicio 1.4 */

function repTexto (objeto,numero){
    if(objeto ===""){
        console.log("Porfavor ingresa almenos un caracter");
        

    }else if((typeof objeto) === "string"){
        let texto =[];
        for(let i = 0;i <=numero ; i++){
            texto.push(objeto);
            
        }
        let unido = texto.join(" ")
        console.log(unido);
        
    }else {
        console.error("Ingresaste algo que no es una cadena");
        
    }
}

let cadena4 = "Estereotipo";
repTexto(cadena4,5);






