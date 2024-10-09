/** estos metodos son importantes para intactuar con el ususario y cuelgan del objeto window  en los mavegadores 
 * estos metodos no existen en Node.js  solo en JavaScript del navegador
 * 
*/


/*
console.log(window);
window.alert("Hola esto es una alerta");
window.confirm("Hola esto es un confirm");
window.prompt("Hola esto es un promp y le permite al usuario ingresar datos o valores");

*/
// estos metodos no es necesario usarlos con  el objeto window
/*
alert("Hola esto es una alerta");
confirm("Hola esto es un confirm");
prompt("Hola esto es un promp y le permite al usuario ingresar datos o valores");
*/

// lo mas recomendable es guardar estos en una variable 
let alerta  = alert("Hola esto es una alerta");
let confirmar = confirm("Hola esto es un confirm");
let  aviso = prompt("Hola esto es un promp y le permite al usuario ingresar datos o valores");

// los imprimimos 

console.log(alerta);// siempre sera un undefined 
console.log(confirmar);// guarda true o false dependiendo de el boton que presion en el navegador 
console.log(aviso);// podemos almancenar algo que escribe el usuario  y despues podemos presionar aceptar o cancelar , si el ususario no ingreso nada y presiona aceptar  gurdara una variable vacia pero si da cancelar entonces se guardara como null


