// Al pulsar la combinación de teclas Alt+F12 una imagen ocupará el fondo. Puedes asignar a
// una imagen aleatoria proporcionada por el servicio gratuito unsplash
// (https://source.unsplash.com/random)

let page = document.getElementById('page');

let altKey = false;
let F12Key = false;

document.addEventListener("keydown", function(event) {
    if(event.key === "Alt"){
        altKey = true;
    }

    if(event.key === "F12"){
        F12Key = true;
    }

    if(altKey === true && F12Key === true){
      page.style.background = "url('https://source.unsplash.com/random')"
    }
});