/**Booleans solo existen dos tipos de datos  True y False */
console.log(true, false);

let verdadero = true;
console.log(typeof verdadero);

// valores que tienden a falso 

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean((document.all) [1]));


//Valores que tienden a verdadero
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(42));// cualquier numero positivo
console.log(Boolean(-42)); // cualquier numero negativo
console.log(Boolean("cadena")); // culquier cadena no vacia
console.log(Boolean(new Date()));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));