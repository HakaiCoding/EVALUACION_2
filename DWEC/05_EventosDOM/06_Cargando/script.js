let loadingScreen = document.getElementById('cargando');


window.addEventListener('load', function() {
    loadingScreen.removeAttribute('id');
    loadingScreen.setAttribute('class', 'ocultar');
});