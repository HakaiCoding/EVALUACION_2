//ARRAY DE CICLOS DISPONIBLES
const CICLOS = ["DAW", "DAM", "ASIR"];

//Array que almacena objetos newAlumno
let alumnos = [];

//Array que almacena objetos notasAlumno
let notas = []

//Array que almacena matriculas de alumnos.
let matriculas = [];

//Objeto para guardas datos de un alumno
let newAlumno = {};

//Objeto para guardar notas alumno 2ºDAW
let notasAlumno = {};

//Variable para comprobaciones con regex
let regex = " ";

//Variable para comprobar si una matricula ya existe
let checkMatricula = " ";

let again = true;

do {

    let alumMat = String(prompt("Ingresar matrícula"));

    if(alumMat === "null"){
        again = false;
        break;
    }

    regex = /^[A-Z]{1}[0-9]{3}$/;
    checkMatricula = matriculas.includes(alumMat);
    let flag = false;

    while (flag === false) {

        checkMatricula = matriculas.includes(alumMat);

        if (regex.test(alumMat) === false) {
            alumMat = String(prompt("Matrícula inválida, ingresar una matrícula con el siguiente formato: A123"));
        }
        else if (checkMatricula === true) {
            alumMat = String(prompt("Esa matrícula ya existe, ingresa una diferente"));
        }
        else {
            flag = true;
            matriculas.push(alumMat);
        }
    }


    let alumName = String(prompt("Insertar nombre"));
    regex = /^[A-Z]{1}[a-z]+$/;
    while (regex.test(alumName) === false) {
        alumName = String(prompt("Nombre no válido, el nombre debe empezar por mayúscula"));
    }

    let alumSurname = String(prompt("Insertar apellidos"));
    regex = /^[A-Z]{1}[a-z]+(\s|-)[A-Z]{1}[a-z]+$/;
    while (regex.test(alumSurname) === false) {
        alumSurname = String(prompt("Apellidos no válidos, deben empezar por mayúscula y sólo se pueden incluir espacios y -"));
    }

    let alumCiclo = String(prompt("Ingresa ciclo"));
    let checkCiclo = CICLOS.includes(alumCiclo);
    while (checkCiclo != true) {
        alumCiclo = String(prompt("Ingresa un ciclo válido (DAW, DAM o ASIR"));
        checkCiclo = CICLOS.includes(alumCiclo);
    }

    let alumCurso = Number(prompt("Ingresa curso"));
    while (alumCurso != 1 && alumCurso != 2) {
        alumCurso = Number(prompt("Curso no válido, ingresa 1 o 2"));
    }

    if (alumCiclo === "DAW" && alumCurso === 2) {
        notasAlumno = {
            matricula: alumMat,
            diw: Number(prompt("Insertar nota DIW")),
            dwec: Number(prompt("Insertar nota DWEC")),
            dda: Number(prompt("Insertar nota DDA")),
            dws: Number(prompt("Insertar nota DWS")),
            eie: Number(prompt("Insertar nota EIE")),
            ing: Number(prompt("Insertar nota ING"))
        }
        notas.push(notasAlumno);
    }

    newAlumno = {
        matricula: alumMat,
        nombre: alumName,
        apellidos: alumSurname,
        ciclo: alumCiclo,
        curso: alumCurso
    };
    alumnos.push(newAlumno);

} while (again);

//Foor Loop que itera sobre array Alumnos, guarda matricula en variable match la cual se usa para buscar si en el array Notas se encuentra algun objeto
//con dicha matricula, de ser así imprime todos los datos y notas del alumno asociado a la matricula.
for (let i = 0; i < alumnos.length; i++) {

    let match = alumnos[i].matricula;

    for (let x = 0; x < notas.length; x++) {

        if (match === notas[x].matricula) {
            alert(`
            BOLETIN DE NOTAS
            Matricula: ${alumnos[i].matricula}
            Alumno: ${alumnos[i].nombre} ${alumnos[i].apellidos}
            Ciclo: ${alumnos[i].ciclo}
            Curso: ${alumnos[i].curso}

            NOTAS
            DIW: ${notas[x].diw}
            DWEC: ${notas[x].dwec}
            DDA: ${notas[x].dda}
            DWS: ${notas[x].dws}
            EIE: ${notas[x].eie}
            ING: ${notas[x].ing}
            `);
        }
    }

}