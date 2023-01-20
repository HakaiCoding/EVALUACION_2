// Ejercicio complementario
// Una vez cargados los datos se desea visualizar lo siguiente:

// Un listado de todos los alumnos en el que aparezca el nombre del alumno y su nota media.

// Un listado de todos los alumnos en el que aparezca el nombre del alumno y su nota media en letras (SB,NT,BI,SF,IN,MD).

// El nombre del alumno con la nota más alta en cualquiera de las evaluaciones.

// Se solicita un nombre de alumno y una evaluación y se visualiza la nota.

// Se solicita un nombre de alumno y se visualiza su nota media o un mensaje de error si no existe.

// Se solicita una evaluación y se visualiza el número de alumnos suspensos y una lista con los nombres de los alumnos suspensos.

// Se solicita una evaluación y se visualiza la media de los alumnos aprobados en dicha evaluación.






//ARRAY QUE GUARDA NOMBRE DE ALUMNO
let nombreAlumnos = []

// OBJETO QUE GUARDA NOTAS DE ALUMNO
let notasAlumnos = []

//ARRAY BIDIMENSIONAL DONDE SE ALMACENAN ALUMNOS CON NOTAS
let alumnos = [nombreAlumnos.length][notasAlumnos.length];


let nombre = String(prompt("nombre"));
nombreAlumnos.push(nombre);

nombre = String(prompt("nombre"));
nombreAlumnos.push(nombre);

console.table(nombreAlumnos);


let eva1 = Number(prompt("nota 1"));
let eva2 = Number(prompt("nota 2"));
let eva3 = Number(prompt("nota 3"));

notas = {
    eva1: eva1,
    eva2: eva2,
    eva3: eva3
}
notasAlumnos.push(notas);
console.table(notasAlumnos);




