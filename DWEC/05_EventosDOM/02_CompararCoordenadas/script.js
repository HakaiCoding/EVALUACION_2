// c. Comparar diferentes coordenadas
// Crea una página con mucho contenido. Asocia al evento mousemove del documento una
// función que visualiza en consola las propiedades de coordenadas del ratón: client, screen y
// page (tanto X como Y). Al ejecutar y comprobar el funcionamiento en el navegador, no lo
// tengas maximizado y muestra la consola para poder observar las coordenadas que van
// apareciendo.


// Añadimos un "escuchador" para el evento "mousemove" en el botón
document.addEventListener("mousemove", function(event) {
    console.log(event.clientX);
    console.log(event.clientY);
});