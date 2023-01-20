// Realiza una página web que vaya pidiendo las temperaturas máximas del mes de
// octubre y las vaya guardando en un array de 31 elementos. Utilizar el método push.
let tempOctubre = new Array();

let cont = 0;
let newTemp;

while(cont < 31) {
    newTemp = Number(prompt(`Ingresa temperatura del día ${cont+1}`));
    tempOctubre.push(newTemp);
    cont++;   
}
// console.table(tempOctubre);


// Comprueba si en la segunda quincena del mes se encuentra la temperatura 21
// grados. Utilizar método includes.
if(tempOctubre.includes(21, 15)) {
        console.log(`En la segunda quincena hay al menos un día que hace 21 grados`);
}


// Comprueba si existe la temperatura de 8 grados. Utilizar método indexof. Repite con
// el método lastindexof y por último con includes.
if(tempOctubre.includes(8)) {
    console.log(`Hay por lo menos un día que hace 8 grados`);
}

if(tempOctubre.indexOf(8) != -1) {
    console.log(`El día ${tempOctubre.indexOf(8) + 1} hace 8 grados.`);
}

if(tempOctubre.lastIndexOf(8) != -1) {
    console.log(`El día ${tempOctubre.lastIndexOf(8) + 1} hace 8 grados.`);
}


// Comprueba si existe la temperatura de 10 grados. Utilizar método indexof. En caso
// de existir modifica la temperatura a 11 utilizando el método splice
if(tempOctubre.indexOf(10) != -1) {
    tempOctubre.splice(tempOctubre.indexOf(10), 1, 11);
}


// Elimina las temperaturas de los días 8 y 9 de octubre y sustituyelas por dos nuevas
// temperaturas. Las temperaturas borradas se guardarán en una nueva tabla. Utilizar
// método splice.
let borrados = new Array();

borrados.push(tempOctubre.splice(7, 1, 99));
borrados.push(tempOctubre.splice(8, 1, 99));
// console.table(tempOctubre);
// console.table(borrados);


//  Elimina la primera y la última temperatura del array. Utilizar métodos pop y shift.
tempOctubre.pop();
tempOctubre.shift();
// console.table(tempOctubre);


// Convierte el array en un string, asignando como carácter separador |. Utilizar el método join.
let stringTempOctubre = tempOctubre.join('|');
// console.table(stringTempOctubre);


// Ordena el array con el método sort.
let sortTempOctubre = tempOctubre.sort((a, b) => a - b);
// console.table(sortTempOctubre);


// Invierte el orden del array. Utilizar método reverse.
let reverseTempOctubre = tempOctubre.reverse();


// Añade al final las temperaturas mínimas del mes de octubre. Utilizar método concat.



