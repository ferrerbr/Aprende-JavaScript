/**Manejo de errores 
 * try 
 * catch 
 * finally
 * 
 * no permite evaluar codigos hasta que encuentre un error 
 */
console.log("----------Primer try");

try{
    console.log("en el TRY se agrega el codigo a evaluar ");
    

}catch(error){
    console.log("Catch captura cualquier error lanzado en el try");
    

}finally{
    console.log("El bloque finally se ejecutara  siempre al final de un bloque try-cath");
    
}

// ejecutamos el  bloque try-catch  con un error , es este caso  una variable s que no ha sido declarada
console.log("-----------Segundo try");
try{
    console.log("en el TRY se agrega el codigo a evaluar ");
    console.log(s);
    
    

}catch(error){
    console.log("Catch captura cualquier error lanzado en el try");
    

}finally{
    console.log("El bloque finally se ejecutara  siempre al final de un bloque try-cath");
    
}
// aqui mandamos a imprimir  el error
console.log("--------Tercer try");
try{
    console.log("en el TRY se agrega el codigo a evaluar ");
    console.log(s);
    
    

}catch(error){
    console.log("Catch captura cualquier error lanzado en el try");

    console.log(error);
    
    

}finally{
    console.log("El bloque finally se ejecutara  siempre al final de un bloque try-cath");
    
}
console.log("--------- Cuarto try");
try{
    console.log("en el TRY se agrega el codigo a evaluar ");
    console.log(s);
    console.log("Este codigo ya nos e ejecutara por que antes ocurre un error");
    
    
    

}catch(error){
    console.log("Catch captura cualquier error lanzado en el try");

    console.log(error);
    
    

}finally{
    console.log("El bloque finally se ejecutara  siempre al final de un bloque try-cath");
    
}
// podemos notar que el bloque try se ejecuta hasta que escuentra el error despues del error ya no ejecuta nada de ese bloque y se pasa a ejecutar el bloque catch


// podriamos lazar un error persoanalizado

try{
    let numero =10;
    if(isNaN(numero) ){
        throw new Error("El caracter introducido no es un número")
    }

    console.log(numero*numero);
    

}catch(error){
    console.log("se produjo el siginte error",error);
    

}


try{
    let numero ="s";
    if(isNaN(numero) ){
        throw new Error("El caracter introducido no es un número")
    }

    console.log(numero*numero);
    

}catch(error){
    console.log("se produjo el siginte error-",error);
    

}

// con este estructura podemos evaluar y preparar el codigo para posibles errores en determinadas partes 