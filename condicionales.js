/**---------If Else------ */

let edad = 26;
if(edad>17){
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de edad");
}

// cuando agregamos el = incluye l numero que estamos evaluando
if(edad>=18){
    console.log("Eres mayor de edad");
} else{
    console.log("No eres mayor de edad");
}
/**---------If Else,If-Else------ */

//cuando  tenenemos mas de una opcion podemos usar el else-if

let hora = 22;
if ( hora <=5) {
    console.log("Dejame dormir");
} else if (hora < 12 ){
    console.log("buenos dias");
} else if(hora < 19){
    console.log("buenas tardes");
} else{
    console.log("buenas noches");
    
}

/**---------operador ternario------ */

console.log("operador ternario");
let eresMayor =(edad>=18)
    ?"Eres mayor de edad":// primerop se coloca la parte verdadera y depues la falsa
    "No eres mayor de edad";
console.log(eresMayor);

/**---------SWITCH case------ */
console.log("switch case");



let dia = 7;
switch (dia) {
    case 0:
        console.log("domingo");
        
        break;
    case 1:
        console.log("Lunes");
        
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
     case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    default:
        console.log("El dia no existe");
        
        break;
}







