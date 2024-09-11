// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function longitud(palabra = "") {
    let arreglo = palabra.split(""),
     i = 0;
    arreglo.forEach(function(letra) {
        i++
    })
    
    console.log("la longitud de la cadena "+palabra + " es de " + i + "carcteres");
    
}

const longitud2 = (palabra = "") => {
    let arreglo = palabra.split("") 
    let i = 0;
    arreglo.forEach(function(letra) {
        i++
    })
    
    console.log("la longitud de la cadena "+palabra + " es de " + i + "carcteres");

}

function recortar(entrada,numero){
    let cortar = entrada.slice(0,numero)
    if(numero > entrada.length){
        console.log("el numero ingresado es mayor que la longitud de la cadena");
        
    }else{
        console.log(cortar);
        
    }
    

}

function separar(cadena,caracter){
    let lista = cadena.split(caracter);
    console.log(lista);
    

}
function repetirTexto(texto,repeticiones){
    for(let i = 1; i <= repeticiones;i++){
        console.log(texto);

        
    }
}



let a = "ferras"
let b = "hola a todas las personas de este lugar";


longitud(a);

longitud2(a);
recortar(a,3)
separar(b," ")
repetirTexto(b,5);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


 const invertir =(cadenaR = "" )=>{
    if (!cadenaR)  return console.warn("No ingresaste una cadena");
    cadenaR=cadenaR.split("").reverse();  
    console.info(cadenaR.join(""))
 }

 invertir("hola mundo");

 const contarC =(cadena="",palabra=undefined)=>{
    if(!cadena)  return console.warn("No ingresaste una cadena");
    if (palabra === undefined) return console.warn("No ingresaste un palabra para buscar");
    let contador1 =0

    cadena=cadena.split("")
   
    
    cadena.forEach((el)=> {
        if(el === palabra)
            contador1++
   
        
    })
    console.info(`la palabra ${palabra}  se repite ${contador1} veces`)
    
 }
let textoA ="hola que tal como estas , hola , hola ";
contarC(textoA,"tal");

const palindromo = (textoP = "")=>{
    if (!textoP) return console.warn("no ingresaste un texto");
      textoP = textoP.replaceAll(" ","").split("");
    console.log(textoP);

    let textoR =[...textoP];
    textoR = textoR.reverse();
    console.log(textoR)

    for (let i = 0 ; i < textoP.length ; i++ ){
        if (!(textoP[i] ===textoR[i]))return console.info("Tu palabra o frese no es un palindromo")
    }

    console.info("si es un palindromo y asi se ve alreves \n>>", textoR.join(""),"<<");

    
    

   
   
}

palindromo("esto ese otse");

const eliminarPatrones=(cadena = "", patron="")=>(!cadena)? console.warn("no ingresaste una cadena"):(!patron)?console.warn("no ingresaste una patron"):console.log(cadena.replaceAll(patron,""))   

eliminarPatrones("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const aleatorio501 = ()=>console.log("numero aleatorio =",Math.floor(Math.random()*100+501));


aleatorio501()

const capicula = (numero = undefined) =>{
    if(numero === undefined || numero === 0) return console.warn("no ingresaste un numero o ingresaste cero");

    let nuevoN =parseInt(numero.toString().split("").reverse().join(""));
    console.log(nuevoN);
    
    if(nuevoN === numero){
        console.log(`el numero ${numero} es capicula `)
    }else{
        console.log(`el numero ${numero}  NO es capicula `)

    }

}

capicula(15)


const factorial = numero =>{
    let i = 1;
    let fact = 1;
    while (i <= numero) { 
        fact*=i;
        i++; 
    }
    console.log(fact);
}

factorial(10);