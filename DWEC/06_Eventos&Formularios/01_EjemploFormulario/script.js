// e. Ejercicio submit.

let formulario = document.getElementById("formulario");
let password = document.getElementById("contraseña");
let cajaTexto = document.getElementById("comentarios");

formulario.addEventListener("submit", function (event) {
    if (password.value === "") {
        event.preventDefault();
        password.focus();
    }

    if (cajaTexto.value === "") {
        if (!confirm("Comentarios vacío, ¿Realmente desea enviar?")) {
        event.preventDefault();
        cajaTexto.focus();
        }
    }
});

