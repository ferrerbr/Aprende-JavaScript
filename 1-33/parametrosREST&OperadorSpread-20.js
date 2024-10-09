/**Los parametros REST son una foprma de  virtualmente ir agregando parametros a una función o dentro de una variable 
 * cuando no sabemso extactamente cuantos parametros vamos a recibir
 */
function sumar(a,b,...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n
    })
    return resultado;

}
 console.log(sumar(1,2));
 console.log(sumar(1,2,3,4));
 console.log(sumar(1,4,7,2,5,8));

 //si nosotros ya tubieramos una reglo para evitar contatenar podemos  usar los spread operator(operador de propagacion)

 let arr1 = [1,2,3,4,5,6];
 let arr2 = [7,8,9,10,11];
//si quieramos crear un nuevo arreglo de stos elementos podriamos concatenarlos 
let arr3 = [arr1,arr2];
console.log(arr3);
//usando el spread operator
let arr4 = [...arr1,...arr2];
console.log(arr4);


 
 
 