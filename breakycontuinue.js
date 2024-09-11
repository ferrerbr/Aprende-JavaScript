
const numeros = [1,2,3,4,5,6,7,8,9,10];

//brack y contunue  solo se puede usar en estructuras de control y no en metodos como el foreach


// es este break le dice que se salga de la estructura de control
console.log("-----continue------");

for(let i = 0; i < numeros.length;i++ ){
    if (i===5){
        break;
    }
    console.log(numeros[i]);
}

// continue le dice que ya no ejecutes el resto de cogdigo y que continues con la siguiente iteracion
console.log("----continue----");

for(let i = 0; i < numeros.length;i++ ){
    if (i===5){
        continue;
    }
    console.log(numeros[i]);
}

