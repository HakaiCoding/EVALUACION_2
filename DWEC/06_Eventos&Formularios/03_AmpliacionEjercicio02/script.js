//CAJAS
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

//BOTONES
let botonCambio = document.getElementById("cambioColor");

//RADIO BUTTONS
let cursos = document.getElementsByName("curso");

//Asigno por defecto la class verde
nombre.classList.add("verde");
apellido.classList.add("verde");

//Evento de cambio de color al hacer click
botonCambio.addEventListener("click", function (evento) {
    nombre.classList.toggle("verde");
    apellido.classList.toggle("verde");
    nombre.classList.toggle("morado");
    apellido.classList.toggle("morado");
});

//Eventos para cambiar el contenido de la caja Nombre por el value del radio button seleccionado
for (let curso of cursos) {
    curso.addEventListener("change", function (event) {
        nombre.value = curso.value;
    });
}