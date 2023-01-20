//Creacion de array Alumnos
let arrayAlumnos = new Array();

//Ingresar nombre alumno mediante prompt
let newAlumno = prompt("Introduce nombre del alumno");

//Se finaliza la introducción de nombres cuando el usuario pulse cancel.
let cont = 1;

while (newAlumno != null) {

    arrayAlumnos[cont] = newAlumno;
    cont++;

    newAlumno = prompt("Introduce nombre del siguiente alumno");
}

//Visualiza un mensaje con el número de alumnos matriculados.
alert(`Hay un total de ${arrayAlumnos.length - 1} alumnos matriculados`);

// Se realizará un nuevo bucle en el que se solicitará número de alumno. El número
// deberá estar entre 1 y el número de alumnos introducidos. Se visualizará el nombre
// correspondiente al número introducido. Está acción se repite hasta que el usuario
// contesta de forma negativa a una pregunta del tipo “¿Desea continuar consultando
// nombres de alumnos?”
do {
    let numAlumno = Number(prompt("Número del alumno"));

    while (numAlumno > arrayAlumnos.length || numAlumno < 1) {

        numAlumno = Number(prompt("Número no válido, ingresa un número entre 1 y el total de alumnos matriculados"));
    }

    alert(`El alumno con número ${numAlumno} se llama ${arrayAlumnos[numAlumno]}`);
} while (confirm("¿Desea continuar consultando nombres de alumnos?"));

// Por último se realizará un nuevo bucle en el que se solicitará número de alumno a
// dar de baja.El número deberá estar entre 1 y el número de alumnos introducidos. Se
// elimina el elemento correspondiente al número introducido. Está acción se repite
// hasta que el usuario contesta de forma negativa a una pregunta del tipo “¿Desea
// continuar dando de baja?”

do {
    let numAlumno = Number(prompt("Número del alumno que deseas eliminar"));

    while (numAlumno > arrayAlumnos.length || numAlumno < 1) {

        numAlumno = Number(prompt("Número no válido, ingresa un número entre 1 y el total de alumnos matriculados"));
    }

    arrayAlumnos[numAlumno] = null;
} while (confirm("¿Desea continuar dando de baja?"));

// Visualizar las posiciones que han quedado libres.

for(let i = 1; i < arrayAlumnos.length; i++) {

    if(arrayAlumnos[i] === null) {
        alert(`La posición ${i} está libre`);
    }
}

// Visualiza el nombre de los alumnos contenidos en la tabla. No deben aparecer los
// no definidos.

//For Loop
document.write(`<h2>For Loop</h2>`);
for(let i = 1; i < arrayAlumnos.length; i++) {

    if(arrayAlumnos[i] != null) {
        document.write(`En la posición ${i} está ${arrayAlumnos[i]} <br>`);
    }
}
console.table(arrayAlumnos);

//For..in Loop
document.write("<h2>For..in Loop</h2>");
for (let i in arrayAlumnos) {
    if(arrayAlumnos[i] != null) {
        document.write(`En la posición ${i} está ${arrayAlumnos[i]} <br>`);
    }
}

//For..of Loop
document.write("<h2>For..of Loop</h2>");
for (let i of arrayAlumnos) {
    if(i != null) {
        document.write(`El alumno es ${i} <br>`);
    }
}