
//en el try se agrega el codigo  a evaluar 

//el catch captura cualquiere error surgido o lanzado del try

//el finally se ejecutara siempre al final del try catch 
console.log("-----se ejecuta el try-----");
try {
    console.log("en el try se agrega el codigo  a evaluar");
    
} catch (error) {
    console.log("el catch captura cualquiere error surgido o lanzado del try");

}finally{
    console.log("el finally se ejecutara siempre al final del try catch" );
    
}


console.log("-----se ejecuta el catch-----");

try {
    console.log("en el try se agrega el codigo  a evaluar");
    noexiste;// el try se ejecuta hasta que encuentra el error y en ese momeno se sale
    
} catch (error) {
    console.log("el catch captura cualquiere error surgido o lanzado del try");
    console.log(error);
}finally{
    console.log("el finally se ejecutara siempre al final del try catch" );
    
}



try {
    let numero = "diez";
    console.log("iniciando el try");
    

    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero*numero);
    
    
} catch (error) {
    console.log(`se produjo el siguiente error ${error}`);
    
}