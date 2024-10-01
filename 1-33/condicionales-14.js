/**Estructura de control 
 * if - else : me permite validar una condicion y dependiendo del resultado se ejecuta o no el codigo 
*/
let edad = 17;
if (edad > 17){
    console.log("es mayor de edad");
    
}else{
    console.log("es menor de edad");
    
}

//cuando usamos el operador reacional >=  incluimos el numero comparado
if (edad >= 18){//mayor o igual que 17
    console.log("es mayor de edad");
    
}else{
    console.log("es menor de edad");
    
}
//usando el menor que 
if (edad < 18){// estamos excuyendo el valor contra el que comparamos
    console.log("es menor de edad");
    
}else{
    console.log("es mayor de edad");
    
}
if (edad <= 17){
    console.log("es menor de edad");
    
}else{
    console.log("es mayor de edad");
    
}

// if anidados
//ejemplo : Mandar un mensaje dependiendo de la hora del dia 
let hora = 13;
if(hora >= 0 && hora<=5){
    console.log("¡Dejame dormir!");
    
}else if (hora >= 6 && hora <= 11 ){
    console.log("Buenos dias");
    
}else if(hora >=12 && hora <= 18){
    console.log("Buenas tardes");
    
} else{
    console.log("Buenas noches");
    
}

// operador ternario(condicion)?verdadero:falsa
console.log("Operador ternario");
let edad2=18;

let eresMayor=(edad2 >= 18)?"eres mayor de edad":"eres menor de edad";

console.log(eresMayor);

/**Switch - Case 
 * cuando tengamos diferentes valores para una misma varible
*/

/**ejemplo : determinar el dia de la semana */
let dia = 7;
switch(dia){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("El dia no existe");
        break;
}
        
        
        
        



