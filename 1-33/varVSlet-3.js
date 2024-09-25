/**En JavaScript no tenia ambito de bloque  y cuando  declarabamos  variables demtro de funciones for while y siempre ocurria el hoisting (elevacion de variables) , pero con ECMAscript 6  ahora debemos declarar la variable con let 
 * var = se usa para declara varibles globales 
 * let = se usa para declarar varibles locales 
 */


// ambito de bloque  {}
// al usar VAR  la varible no respeta el ambito de bloque y cuando sale del ambito la variable vale lo que se declaro dentro del bloque;
var musica = "Rock";
console.log("Variable musica antes del bloque", musica);
{
    var musica = "pop";
    console.log("Variable musica dentro del bloque", musica);

}
console.log("Variable musica despues del bloque", musica);


//Al usar LET  respeta el ambito de bloque y la varible dog adentro y afuera del ambito son diferentes, por lo que la variable dog afuera conserva su valor

let dog = "chihuahua";
console.log("Variable musica antes del bloque", dog);
{
    let dog = "border collie";
    console.log("Variable musica dentro del bloque", dog);

}
console.log("Variable musica despues del bloque", dog);


//Es por esta razón  que es una mala prctica usar VAR actualmente
