// Modificaremos el color de fondo del contenedor cuando ocurran los siguientes eventos:
// ➢ El cursor del ratón entra en el contenedor -> fondo verde
// ➢ El cursor del ratón sale en el contenedor -> fondo transparente
// ➢ Se presiona un botón del ratón sobre el contenedor:
// a. Botón principal -> fondo rojo
// b. Botón secundario -> fondo azul
// ➢ Se suelta un botón del ratón en el contenedor -> fondo verde y además se desea
// que no aparezca el menú contextual, que es el evento por defecto.

let box = document.getElementById('caja');
console.log(box);

//La caja cambia a color verde cuando el ratón entra
box.addEventListener('mouseenter', function(event) {
    box.style.backgroundColor = 'green';
})

//La caja cambia a color blanco cuando el ratón sale
box.addEventListener('mouseleave', function(event) {
    box.style.backgroundColor = 'white';
})

//Al clickar con el botón izquierdo en la caja cambia a color rojo, click derecho azul
box.addEventListener('mousedown', function(event) {
    if(event.button === 0){
        box.style.backgroundColor = 'red';
    }
    else if(event.button === 2){
        box.style.backgroundColor = 'blue';
    }
})

box.addEventListener('mouseup', function(event) {
    box.style.backgroundColor = 'green';
})