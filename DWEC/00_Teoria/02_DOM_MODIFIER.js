/* SELECTORES */
document.querySelector("h1");
document.querySelectorAll("h2");//devuelve una coleccion estatica de nodos

/* MANIPULAR ATRIBUTOS */

let div1 = document.getElementById("div1");

div1.getAttribute("class"); // Devuelve el valor del atributo class o null si no esta definido
div1.setAttribute("class", "nuevaClase"); // Añade o modifica el atributo class
div1.removeAttribute("class"); // Elimina el atributo class
div1.toggleAttribute("class"); // Si el atributo class esta definido lo elimina, si no esta definido lo añade
div1.hasAttribute("class"); // Devuelve true si el atributo class esta definido, false si no esta definido
div1.attributes; // Devuelve un array con todos los atributos del elemento
div1.textContent; // Devuelve el texto del elemento
div1.innerHTML; // Devuelve el contenido del elemento
div1.style; // Devuelve un array con todos los estilos del elemento
div1.style.color = "red"; // Modifica el color del elemento
div1.nodeValue; // Devuelve el valor del nodo de tipo texto
div1.className; // Devuelve el valor del atributo class
div1.classList; // Devuelve un array con todos los valores del atributo class
div1.classList.add("nuevaClase"); // Añade una nueva clase al atributo class
div1.classList.remove("nuevaClase"); // Elimina una clase del atributo class
div1.classList.toggle("nuevaClase"); // Si la clase esta definida la elimina, si no esta definida la añade
div1.classList.contains("nuevaClase"); // Devuelve true si la clase esta definida, false si no esta definida
div1.classList.replace("nuevaClase", "otraClase"); // Reemplaza la clase nuevaClase por otraClase

/* PROPIEDADES PARA NAVEGAR POR EL DOM */
parentNode; // Devuelve el nodo padre
childNodes; // Devuelve un array con todos los nodos hijos
firstChild; // Devuelve el primer nodo hijo
lastChild; // Devuelve el ultimo nodo hijo
nextSibling; // Devuelve el nodo siguiente
previousSibling; // Devuelve el nodo anterior
firstElementChild; // Devuelve el primer nodo hijo de tipo elemento
lastElementChild; // Devuelve el ultimo nodo hijo de tipo elemento
childElementCount; // Devuelve el numero de nodos hijos de tipo elemento


/* INSERCIÓN DE NODOS EN POSICIONES CONCRETAS */
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

div1.insertBefore(div2, div1.firstChild); // Inserta el nodo div2 antes del primer nodo hijo de div1

/* REEMPLAZAR ELEMENTOS */
Node.replaceChild(newChild, oldChild); // Reemplaza el nodo oldChild por el nodo newChild

