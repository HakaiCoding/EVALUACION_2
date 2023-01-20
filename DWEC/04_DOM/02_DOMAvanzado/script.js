// Ejercicio 1
// Visualiza mediante console.log() el número de elementos de la página que tienen asignada
// la clase css .titulonav

let elements = document.getElementsByClassName('titulonav');
console.log(elements.length);

// Ejercicio 2
// Visualiza mediante console.log() el número de elementos de la página que tienen asignado
// el selector #nav

let elementsNav = document.querySelectorAll('#nav');
console.log(elementsNav.length);

// Ejercicio 3
// Visualiza mediante console.log() el valor de los atributos id, data-atributo-que-no-existe,
// data-atributo-sin-valor y name del elemento ejemplo al que seleccionaremos con
// querySelector().
let atributo = document.querySelector('#ejemplo');
console.log(atributo.getAttribute("id"));
console.log(atributo.getAttribute("name"));
console.log(atributo.getAttribute("data-atributo-sin-valor name"));
console.log(atributo.getAttribute("data-atributo-sin-valor"));

// Ejercicio 4
// Asigna al atributo data-atributo-que-no-existe el valor “ahora existo” del elemento ejemplo,
// seleccionado en el ejercicio 3.
// Asígnale el valor “Ahora tengo valor” al atributo data-atributo-sin-valor del mismo elemento.
atributo.setAttribute("data-atributo-que-no-existe", "Ahora existo");
console.log(atributo.getAttribute("data-atributo-que-no-existe"));

atributo.setAttribute("data-atributo-sin-valor", "Ahora tengo valor");
console.log(atributo.getAttribute("data-atributo-sin-valor"));


// Ejercicio 5
// Quita el atributo class a todos los elementos a los que se le aplique la clase .cuerporec
// mediante el uso de .removeAttribute.
// Vuelvelo a poner con .setAttribute.
// Vuelvelo a quitar con .toggleAttribute.
let elementsCuerporec = document.querySelectorAll('.cuerporec');
console.log(elementsCuerporec.length);
elementsCuerporec[0].removeAttribute('class');
elementsCuerporec[1].removeAttribute('class');
console.log(elementsCuerporec.length); //No actualiza el tamaño porque es una Node List, si uso getElementsByClassName actualiza datos en vivo

elementsCuerporec[0].setAttribute('class', 'cuerporec');
elementsCuerporec[1].setAttribute('class', 'cuerporec');


elementsCuerporec[0].toggleAttribute('class');
elementsCuerporec[1].toggleAttribute('class');
console.table(elementsCuerporec);

// Ejercicio 6
// Visualiza los atributos, nombre y valor del elemento caja de texto con identificador “edad”.
let edad = document.getElementById('edad');
let attr = edad.attributes;
for(let i=0; i < attr.length; i++){
    console.log(`Atributo: ${attr[i].name} | Valor: ${attr[i].value}`);
}

// Ejercicio 7
// Asigna a todos los enlaces de la página el color de fondo gris mediante el uso de .style
let enlaces = document.getElementsByTagName('a');
for(let i= 0; i < enlaces.length; i++){
    enlaces[i].style.background = 'grey';
}

// Ejercicio 8.
// Anula el estilo aplicado mediante .style, en el ejercicio anterior. A continuación, crea una
// clase CSS a tu gusto para enlaces y asígnasela a todos los enlaces de la página mediante
// el uso de .className.
for(let i= 0; i < enlaces.length; i++){
    enlaces[i].removeAttribute('style');
}

for(let i= 0; i < enlaces.length; i++){
    enlaces[i].className = "fondoEnlaces";
}