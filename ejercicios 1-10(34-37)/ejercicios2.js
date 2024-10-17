/**




/**5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
const invertir = (cadena = undefined)=>{
    if(!cadena){
        return console.warn("No ingresaste una cadena de texto o ingresaste una cadena vacia")
    }
    let cadenaList=cadena.split("")
    cadenaList.reverse()
    cadenaList = cadenaList.join("")
    console.log(cadenaList);
    

}
invertir("")
invertir("Hola mundo")

/**6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
const contarP = (cadena = undefined, caracter = undefined)=>{
    if (!cadena) {
        return console.warn("No ingresaste una cadena de texto")
        
    }
    if (!caracter) {
        return console.warn("No ingresaste el patron  a buscar ")
    }

    let repeticion =cadena.split(caracter).length-1
    console.log(`El patron "${caracter}"  se encuentra ${repeticion} veces`);
}
contarP()
contarP("")
contarP("  at  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore alias odio tempora nisi officia consequuntur dolores at eveniet aliquam, nesciunt non aspernatur. Optio temporibus libero blanditiis quis in illo.", "at")



/**7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (cadena = undefined)=>{
    if(!cadena){
        return console.warn("No ingresaste una cadena")
    }
    
    let cadenaList =(cadena.toUpperCase()).replaceAll(" ","").split()
    cadenaList.reverse();
    cadenaList = cadenaList.join("");

    if(cadenaList === cadena.toUpperCase().replaceAll(" ","")){
        console.log( `la palabra "${cadena}" ES un palindromo`);
        
    }else{
        console.log(`La palabra "${cadena}" NO es un palindromo`);
        
    }

}
palindromo()
palindromo("Hola aloh")
palindromo("anita lava la tina")

/**8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.  */


const del = (cadena = undefined, caracter = undefined)=>{
    if (!cadena) {
        return console.warn("No ingresaste una cadena de texto")
        
    }
    if (!caracter) {
        return console.warn("No ingresaste el patron  a eliminar ")
    }

    let lista =cadena.split(caracter)
    lista = lista.join("")
    console.log(lista);
}

del("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy")