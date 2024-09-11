/** es una funcion que se ejecuta despues de que otra lo haga  */
//la recursividad es cuando una funcion se invoca a si misma es decir dentro de la funcion se invoca esta misma funcion

//esta funcion eleva un numero al cuadrado
function cuadradoCallback(value,callback) {
    setTimeout(() => {
        callback(value,value*value);
        
    }, 0|Math.random()*1000);

    
}

cuadradoCallback(0,(value,result)=>{
    console.log("Inicia callback");
    console.log(`CallBack ${value}, ${result}`);
    cuadradoCallback(1,(value,result)=>{
        console.log(`CallBack ${value}, ${result}`);
        cuadradoCallback(2,(value,result)=>{
            console.log(`CallBack ${value}, ${result}`);
            cuadradoCallback(3,(value,result)=>{
                console.log(`CallBack ${value}, ${result}`);
                cuadradoCallback(4,(value,result)=>{
                    console.log(`CallBack ${value}, ${result}`);
                    cuadradoCallback(5,(value,result)=>{
                        console.log(`CallBack ${value}, ${result}`);
                        console.log("fin del callback");
                        console.log("call back hell");
                        
                        
                    
                    })
                
                })
            
            })
        
        })
    
    })
})







//ejercios para comprender las callbacks
function ordenarNumeros(arreglo,callback) {
    console.log("inicia el ordenamiento de numoero pero la impresion no se realizara hasta desoues de 4 seg");
    
    arreglo = arreglo.sort()
    setTimeout(function () {
         callback(A)
    },4000);
   

    
    
}

function Imprimir(cosaAImprimir) {
    console.log(cosaAImprimir);
     
}
    
A = [1,2,9,7,6,5,4]
ordenarNumeros(A,Imprimir)


//ejercicio de una simulacion a un situo para descargar datos uyna vez descagados , se deben procesa

function simularDescarga(url,callback) {
    console.log(`Estamos accediendo al url ${url}`);
    console.log(`comienza la descarga de archivos tardara 10 segundos en completarse`);
    setTimeout(()=>{
        callback(url,procesamientoDatos)
    },10000)
}   
    
function descargaDatos(url,callback){
    console.log("Descarga finalizada");
    console.log(`estamos cerando el sitio ${url}`);
    console.log("inicaremos con el procesamiento de los datos descargados tardara otros 10 segundos");
    setTimeout(() => {
        callback(url)        
    }, 10000);
}

function procesamientoDatos(url) {
    console.log(`los datos de ${url} han sido procesados`);  
}


simularDescarga("www.ferrer.com",descargaDatos)