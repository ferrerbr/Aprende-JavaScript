/** El constructor DATE */
console.log(Date);// Output  ƒ Date() { [native code] }
console.log(Date());

// lo ideal es guardar en una varible 
let fecha = new Date(); // tiene que declararse desde el constructor
console.log(fecha);

//si soloo quiero el  dia del mes 
console.log(fecha.getDate());

//el dia de la semana D L M Mi J VS D- 0 1 2 3 4 5 6 
console.log(fecha.getDay());

// obtener el mes   Ene Feb Mar Abr  May Jun Jul Ago Sep Oct Nov Dic - 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());

// para obteer el año  es mejor usar fullYear
console.log(fecha.getFullYear());

// obtener la hora en formato de 24 horas
console.log(fecha.getHours());

//obtener los minutos 
console.log(fecha.getMinutes());

// obtener  los segundos 
console.log(fecha.getSeconds());

// obtener  la hora mediente el metodo toString
console.log(fecha.toString());
console.log(fecha.toDateString());

//
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());


//metodo  para saber el uso horario que nos encontramos 
console.log(fecha.getTimezoneOffset());//360 (minutos de difernecia con el  meridiano de greenwich )

// si quisieramos obtener los datos de la zona cero
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

console.log(Date.now());// esta es la manera de representar  cuantos segundos han pasado de el primero de enero de 1970


// si se quisera hacer sumas o restas de fechas  lo mas recomdable es convertir a time stamp 

//como podriamos calcular los años que han pasado desde mi fecha de nacimiento 

let nacimiento = new Date(1997,9,6)
console.log(nacimiento);
















