// Ejercicio 3.
// Utilizando la propiedad innerHTML de los nodos, añade texto al elemento <div> que vaya
// mostrando la siguiente información:

// ● Número de párrafos existentes en la página.
console.log("Número de párrafos existentes en la página.");
let numParrafos = document.getElementsByTagName('p');
console.log(numParrafos.length);

// ● Texto del primer nodo.
console.log("Texto del primer nodo");
console.log(numParrafos[0].textContent);

// ● Texto de cada nodo. (propiedad textContent)
console.log("Texto de cada nodo");
for(let i=0; i < numParrafos.length; i++){
    console.log(numParrafos[i].textContent);
}

// ● Número de párrafos contenidos en article
console.log("Número de párrafos contenidos en article");
let pInArticle = document.getElementById('articulo').getElementsByTagName('p');
console.log(pInArticle.length);

// ● Contenido del último párrafo de la página
console.log("Contenido del último párrafo de la página");
console.log(numParrafos[3].textContent);

// ● Contenido del último párrafo de article
console.log("Contenido del último párrafo de article");
pInArticle = document.getElementById('articulo').getElementsByTagName('p');
console.log(pInArticle[2].textContent);

// Ejercicio 4
// ● Crea un párrafo que contenga el texto “Hola gatito” y añadelo al final de la página.
let parrafo = document.createElement('p');
let contenido = document.createTextNode('Hola gatito');
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);

// ● Añade dos párrafos en article. Uno con el texto “hola gatito” y otro con el texto”hola
// minino” en negrita.
let articulo = document.getElementById('articulo');

let parrafo1 = document.createElement('p');
let contenido1 = document.createTextNode('hola gatito');
parrafo1.appendChild(contenido1);
articulo.appendChild(parrafo1);

let parrafo2 = document.createElement('p');
let contenido2 = document.createTextNode('hola minino');
parrafo2.style.fontWeight = 'bolder';

parrafo2.appendChild(contenido2);
articulo.appendChild(parrafo2);


// Ejercicio 5
// ● Elimina el elemento identificado como logo-header.
let logo = document.getElementById('logo-header');
// logo.parentNode.removeChild(logo);


// ● Añádelo al final del elemento main-content.
let main = document.getElementById('main-content');
main.appendChild(logo);


// Ejercicio 6
// ● Asigna a todos los enlaces de la página la dirección www.google.com
let enlaces = document.getElementsByTagName('a');
for(let i=0; i < enlaces.length; i++){
    enlaces[i].href ="https://www.google.com/";
}

// ● Asigna al tercer enlace la dirección de la página web del instituto.
console.log(enlaces.length);
enlaces[2].href="https://www.w3schools.com/";