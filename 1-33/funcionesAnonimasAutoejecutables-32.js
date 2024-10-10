/**es una funcion en la cual englobas todo el codigo que quieres ejecutar 
 * creas una capsula 
 * 
 * crea un contexto
 * 
 *  no entran en conflico la funcion A Y B
 * 
 * 
 */
// dentro de las funciones anonimas autoejecutables se debe poner punto y coma (;)
(function(){
    console.log("Mi primer IIFE(Inmediatly Invoked Function Executable");
    

})();
(function(d,w,c){
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("este es un console log")
    
    
    


})(document,window,console);

//Formas de escribir una funcion anonima autoejecutable

//clasica
(function(){
    console.log("Version clasica");
    
})();


//Crockford (Javascript the Good Parts)
((function () {
    console.log("Version Crockford");
    
})());


//Unaria
+function () {
    console.log("Versión Unaria");
    
}();


//Facebook
!function () {
    console.log("Version Facebook");
    
}();