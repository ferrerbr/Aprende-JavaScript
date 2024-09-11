/**una promesa si se realiza se ejecuta el result, si no se ejecuta el reject */
//-----elevar un numero al cuadrado-------
// function cuadradoPromise(value) {
//     if (typeof value !== "number"){
//          return Promise.reject(`Error el valor "${value}"  ingresado no es un numero`)
//     }


//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 value,
//                 result:value*value
//             })
//         }, 0|Math.random()*1000);
//     })
    
// }


// cuadradoPromise(0)
//     .then((obj)=>{
//         console.log("inicia promise");
//         console.log(`promise ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(1);
        
        
//     })
//     .then(obj=>{
       
//         console.log(`promise ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(2);

//     })
//     .then(obj=>{
       
//         console.log(`promise ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(3);

//     })
//     .then(obj=>{
       
//         console.log(`promise ${obj.value}, ${obj.result}`);
//         return cuadradoPromise("4");

//     })
//     .then(obj=>{
       
//         console.log(`promise ${obj.value}, ${obj.result}`);
//         return cuadradoPromise(5);

//     })
//     .then(obj=>{
       
//         console.log(`promise ${obj.value}, ${obj.result}`);
//         return cuadradoPromise("Fin de la promesa");

//     })
//     .catch(err=> console.error(err));


// console.log();

// let promesa = new Promise((resolve, reject) => {
//     let exito = false;
        
//     if (exito) {
//         resolve("Operación exitosa");
//     } else {
//         reject("Hubo un error");
//     }
// });

    
// promesa.then((resultado) => {
//     console.log(resultado);  // "Operación exitosa"
// }).catch((error) => {
//     console.log(error);  // "Hubo un error"
// }).finally(() => {
//     console.log("Operación completada");  // Se ejecuta siempre
// });


// //ejercicios para comprender promesas
// function ordenarA(arreglo){
//     return new Promise((resolve,reject)=>{
//          console.log("inicamos con el ordenamiento de la lista");
//         setTimeout(() => {
//             if(Array.isArray(arreglo) ){
//                 arreglo = arreglo.sort()
//                 resolve(arreglo)
//             }else{
//                 reject("el dato ingresado no es aceptado")
//             }
//         }, 5000);
           
            

//     })
// }


// let arregloB = {};
// ordenarA(arregloB)
//     .then((resultado)=>{
//         console.log(resultado)
//     })
//     .catch((error)=>{
//         console.log(error);
            
//     });


    ///--------------------------------------------------
    function simularDescarga(url) {
        return new Promise((resolve,reject)=>{
            console.log("inicio");
            console.log(`Estamos accediendo al url ${url}`);
            setTimeout(() => {
                if (typeof url === "string") {
                    resolve(url)
                }else{
                reject(` la url "${url}" no es un sitio valido`)
                }
            }, 5000);
        
        })
        
    }   
        
    function descargaDatos(url){
        return new Promise((resolve,reject)=>{
            console.log("comenzaremos con la descarga de datos tardara 5s");
            setTimeout(() => {
                
                resolve (`terminamos con la descarga de datos del sitio ${url}`)
            }, 5000);
        })
    }
    

    function procesamientoDatos() {
        return new Promise((resolve, reject) => {
            console.log("comenzaremos con el procesamieneto de los datos");
            
            setTimeout(() => {
                resolve (`los datos de  han sido procesados`)
            }, 5000);
        })
      
    }
    
    
simularDescarga("www.brandon.com")
    .then((sitio)=>{
        console.log("Acceso exitoso");
        
        return descargaDatos(sitio);
    })
    .then((estado)=>{
        console.log("descarga exitosa");
        
        console.log(estado);
        return procesamientoDatos()
    })
    .then((final)=>{
        console.log(final);
        
    })
    .catch((error)=>{
        console.log(error);
        

    })



        


    
    


