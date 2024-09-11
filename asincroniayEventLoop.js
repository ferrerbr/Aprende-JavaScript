/**Procesamiento single thread
 * Operaciondes de CPU y operaciones  de I/O
 * Operaciones concurrentes y Paralelas.
 * Operaciones bloqueantes y No Bloqueantes
 * Operaciones Sincronas y Asincronas
 * 
 * 
 * JavaScript usa un modelo asincrono No Bloqueante
 * con un loop de eventos implementando en un solo hilo (single Thread)
 * para operaciones de entrada y salida(input / output)
 * 
 *  sitio para ver  graficamente la ejecucion de las tareas
 * http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 */
 
 /**Codigo Sincrono Bloqueante */


 (()=>{
    console.log("Codigo Sincrono");
    console.log("inicio");

    function dos() {
        console.log("Dos");
        
    }

    function uno() {
        console.log("uno");
        dos();
        console.log("tres");
        
        
    }

    uno() 
    console.log("Fin");
    
 })();

 console.log("****************************");
 
 /**Codigo Asincrono No-Bloquante */

 (()=>{
console.log("Codigo Asincrono");
console.log("inico");
function dos(){
    setTimeout(function() {
        console.log("dos");
        
    }, 1000);
}

function uno() {
    setTimeout(function(){
        console.log("uno");
        
    },0);
    dos();
    console.log("tres");   
}
uno();
console.log("Fin");

 })()