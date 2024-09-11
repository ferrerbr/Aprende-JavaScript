/**-----while--- */

let contador = 0;
while(contador < 10){
    console.log(contador);
    contador++; 
}
do {
    console.log("dowhile",contador);
    contador++
} while (contador < 20);

/**-----For--- */

// el inicializa la variable , despues la condicion, despues el incremento o decremento y finalmente la ejecucion de codigo

for(let i =0; i < 10; i++){
    console.log(i);
    
}

//for para recorer los elementos de una lista
let numeros = [10,20,30,40,50,60,70,80,90,];
for(let i = 0; i < numeros.length; i++ ){
    console.log(numeros[i]);  
}

//FOR-IN me va apermitir recorer las propiedades de un objetp
const bran ={
    nombre :"brandon",
    apellido :"ferrar",
    edad :26
}
// cuado estamos trabajando en in for-in par acceder ael valor de una propiedad
for(const propiedad in bran){
    console.log(`Key ${propiedad}, Value: ${bran[propiedad]}`);
    
}


//FOR-OF me permite recorrer todos los elementos de algo que sea iterable en JS

for(const elemento of numeros){
    console.log(elemento);
    
}
 let saludo = "Hola Mundo"
 for(const letra of saludo){
    console.log(letra);
    
 }