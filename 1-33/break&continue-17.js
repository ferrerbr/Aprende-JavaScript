/**break y continue 
 * // Nos permiten controlar mejor  nuestras estructuras de control
 * 
*/

const numeross = [1,2,3,4,5,6,7,8,9,10];
 for (let i = 0;i < 10;i++ ){
    if(i=== 5){
        break;
    }
    console.log("For con un break",numeross[i]);
    
 }
 for(let i = 1; i < 10; i++){
    if(i ===5){
        continue;
    }
    console.log("For con un continue",numeross[i]);
    
 }


 //break rompe el siclo cuando encuentra una coincidencia un se cumple una condicion y no se ejecuta mas el cliclo 
 //continue  solo se salta la ejecucion de  cuando encuntra una coincidencia  o una condicion se cumple , pero continua ejecutanto el ciclo