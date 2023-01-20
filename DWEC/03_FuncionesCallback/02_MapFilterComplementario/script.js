// Ejercicio 2
// Investiga por tu cuenta los métodos .map y .filter de los arrays. Ambos utilizan funciones
// callback. Crea un array denominado misNumeros con valores numéricos y consigue
// generar un nuevo array denominado doble en el cúal cada elemento será el doble de los
// números contenidos en misNumeros, utilizando .map. Por otra parte, mediante el uso de
// .filter, genera un tercer array denominado mayorCinco, en el cual solo se guardarán los
// elemento de misNumeros que sean mayores que 5.

//ARRAY ORIGINAL
const MISNUMEROS = [2, 4, 6 ,8 ,10];

//NUEVO ARRAY CON VALORES ACTUALIZADOS POR LA FUNCIÓN
const MISNUMEROSDOBLE = MISNUMEROS.map(function(x) {
   return x * 2;
});


//NUEVO ARRAY CON VALORES QUE HAN CUMPLIDO LA CONDICIÓN DE LA FUNCIÓN
const MAYORCINCO = MISNUMEROS.filter(function(x) {
    return x > 5;
});



