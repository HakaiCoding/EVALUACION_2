// Array plantas vacío
let plantas = [];

//Objetos planta
let rosa = {
    Nombre: "Rosa",
    solDirecto: true,
    regadoAbundante: true,
    bajasTemperaturas: false,
    Foto: "rosa.jpg"
};
plantas.push(rosa);

let amapola = {
    Nombre: "Amapola",
    solDirecto: true,
    regadoAbundante: false,
    bajasTemperaturas: true,
    Foto: "amapola.jpg"
};
plantas.push(amapola);

let margarita = {
    Nombre: "Margarita",
    solDirecto: false,
    regadoAbundante: true,
    bajasTemperaturas: false,
    Foto: "margarita.jpg"
};
plantas.push(margarita);

//Crear elemento ul y añadirlo al body
let ul = document.createElement("ul");
ul.setAttribute("id", "plant-list");
document.body.appendChild(ul);


// Recorrer el array "plantas"
for (let i = 0; i < plantas.length; i++) {
    // Obtener el nombre de la planta actual
    let plantName = plantas[i].Nombre;

    // Crear un elemento li
    let listItem = document.createElement("li");
    let listItemText = document.createTextNode(plantName);
    listItem.appendChild(listItemText);

    // Añadir el elemento li al elemento con id "plant-list"
    document.getElementById("plant-list").appendChild(listItem);
}


//Elemento de botón en HTML con id "info-button"
let infoButton = document.createElement("button");
infoButton.setAttribute("id", "info-button");
let infoButtonText = document.createTextNode("Información");
infoButton.appendChild(infoButtonText);
document.body.appendChild(infoButton);


//Elemento div vacío para mostrar la información de la planta
let plantaInfo = document.createElement("div");
plantaInfo.setAttribute("id", "plant-info");
document.body.appendChild(plantaInfo);

// Contador de plantas consultadas
let plantConsulted = 0;

// Recorrer el array "plantas"
for (let i = 0; i < plantas.length; i++) {
    // Obtener la planta actual
    let planta = plantas[i];

    //Guardar el elemento li en una variable
    let listItem = document.getElementsByTagName("li")[i];
    listItem.addEventListener("click", function (event) {
        // Mostrar la información de la planta en el elemento div
        plantaInfo.innerHTML = "Nombre: " + planta.Nombre + "<br>" +
            "Admite sol directo: " + (planta.solDirecto ? "Si" : "No") + "<br>" +
            "Necesita riego abundante: " + (planta.regadoAbundante ? "Si" : "No") + "<br>" +
            "Aguanta heladas: " + (planta.bajasTemperaturas ? "Si" : "No") + "<br>" +
            "Foto: <img src='" + planta.Foto + "' id='plant-img'>";

        //Incrementar el contador de plantas consultadas
        plantConsulted++;

        //Evento "dblclick" a la imagen
        let plantImg = document.getElementById("plant-img");
        plantImg.addEventListener("dblclick", function (event) {
            //Cambiar el color de fondo del elemento div en base al regado
            if (planta.regadoAbundante) {
                plantaInfo.classList.remove("fondoGris");
                plantaInfo.classList.add("fondoAzul");
            } else {
                plantaInfo.classList.remove("fondoAzul");
                plantaInfo.classList.add("fondoGris");
            }
        });
    });
}

//Evento "click" al botón "info-button"
//NOTA!!: al haber aplicado un estilo al boton, no se aprecia el disabled,
//puedes comprobarlo eliminando la sentencia "botonConsulta.disabled = false;" del codigo y pulsando el boton para ver que no funciona
botonConsulta = document.getElementById("info-button");
botonConsulta.addEventListener("click", function (event) {
    if (plantConsulted > 0) {
        botonConsulta.disabled = true;
        alert("Has consultado " + plantConsulted + " planta(s)");
        botonConsulta.disabled = false;
    } else {
        botonConsulta.disabled = true;
        alert("Todavía no has consultado nada");
        botonConsulta.disabled = false;
    }
});
