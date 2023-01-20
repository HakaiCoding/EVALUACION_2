// completa la etiqueta script de tal manera que cuando se pulse una
// tecla, si resulta ser la tecla flecha hacia arriba, se incrementa en 1 la velocidad mostrada en
// el span. Nunca sobrepasará 120. Si la tecla pulsada es la flecha hacia abajo, se resta 1.
// Nunca se visualizará un valor menor que 0.

let speed = document.getElementsByTagName('span');
let speedNumber = Number(speed[0].textContent);


document.addEventListener('keydown', function (event) {

    if (event.key === 'ArrowUp' && speedNumber < 120) {
        speedNumber++;
        speed[0].textContent = speedNumber;
    }

    if (event.key === 'ArrowDown' && speedNumber > 0) {
        speedNumber--;
        speed[0].textContent = speedNumber;
    }
});