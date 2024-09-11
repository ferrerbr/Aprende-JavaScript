//parametros REST
//son una forma de virtualmente ir agregando parametros 
function sumar(a,b){
    return a+b
}

function sumarRest(a,b,...c){// c se maneja como un arreglo que agrega un  numero al final del arreglo
    let resultado = a + b;
    c.forEach(function(n){
        resultado+=n
    });
    return resultado
}
console.log(sumarRest(1,2));
console.log(sumarRest(1,2,3));
console.log(sumarRest(1,2,1,2));


//-------Spread Operator------

const arr1 = [1, 2, 3, 4, 5];
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);// se imprimen dos arreglos

const arr3 =[arr1,arr2];// se crea un arreglo de dos posiciones cada una es  un arreglo
 console.log(arr3);
 
//usamo el spread operator
const arr4 =[...arr1,...arr2];
console.log(arr4);



