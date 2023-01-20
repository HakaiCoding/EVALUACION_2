//Elementos DOM
let form = document.querySelector("#conform");
let formExamen = document.querySelector("#convisu");
let question = document.querySelector("#pregunta");
let answer = document.querySelector("#respuesta");
let guardar = document.querySelector("#guardar");
let preguntas_respuestas = document.getElementsByTagName("p");

//Array para almacenar objetos con pregunta/respuesta
let examen = [];

//Evento sobre el boton guardar
guardar.addEventListener("click", function (event) {
    //Anulamos que el formulario se envie al clickar
    event.preventDefault();

    //Añadimos al array examen el objeto con los valores de pregunta y respuesta
    examen.push({ pregunta: question.value, respuesta: answer.value });

    //Creacion de elemento <p> con su textNode que recibe el valor de la pregunta, se le asigna la classe hidden por defecto
    parrafo = document.createElement('p');
    contenidoParrafo = document.createTextNode(`Pregunta: ${question.value}`);
    parrafo.appendChild(contenidoParrafo);
    parrafo.classList.add("hidden");
    document.body.appendChild(parrafo);

    //Creacion de elemento <p> con su textNode que recibe el valor de la respuesta, se le asigna la classe hidden por defecto
    parrafo = document.createElement('p');
    parrafo.id = "respuesta";
    contenidoParrafo = document.createTextNode(`Resultado: ${answer.value}`);
    parrafo.appendChild(contenidoParrafo);
    parrafo.classList.add("hidden");
    document.body.appendChild(parrafo);

    //Reseteo los valores
    question.value = "";
    answer.value = "";

    //Condicion que examina que cuando haya 5 preguntas el formulario se oculte y el examen se muestre
    if (examen.length >= 5) {
        form.classList.add("hidden");
        formExamen.classList.remove("hidden");

        for (let i = 0; i <= preguntas_respuestas.length; i++) {
            preguntas_respuestas[i].classList.remove("hidden");
        }
    }
});

//Evento que elimina al hacer doble click sobre elementos del DOM que tengan un id="respuesta"
document.addEventListener("dblclick", function(event) {
    if (event.target.id === "respuesta") {
        event.target.remove();
    }
});