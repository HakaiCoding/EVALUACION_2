//CAJAS
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

//BOTONES
let botonVerde = document.getElementById("verde");
let botonMorado = document.getElementById("morado");

//Asigno por defecto la class verde
nombre.classList.add("verde");
apellido.classList.add("verde");

//Eventos de cambio de color al hacer click
botonVerde.addEventListener("click", function (event) {
    nombre.classList.remove("morado");
    apellido.classList.remove("morado");
    nombre.classList.add("verde");
    apellido.classList.add("verde");
});

botonMorado.addEventListener("click", function (event) {
    nombre.classList.remove("verde");
    apellido.classList.remove("verde");
    nombre.classList.add("morado");
    apellido.classList.add("morado");
    event.preventDefault();
});
