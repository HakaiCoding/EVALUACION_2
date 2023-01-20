/* TIPOS DE NODOS*/
// 1. Document nodo raiz.
// 2. Elemento nodo representado por una etiqueta, es el unico que puede tener atributos y puede tener hijos.
// 3. Atributo nodo que contiene el valor de un atributo de un elemento.
// 4. Texto nodo que contiene el texto de un elemento.
// 5. Comentario nodo que contiene el texto de un comentario.

/* ACCESO A LOS NODOS */

// 1. Por su nombre de etiqueta, devuelve un array de nodos. Objeto NodeList
document.getElementsByTagName("h1");

// 2. Por atributo id
document.getElementById("id");



/* CREACION DE ELEMENTOS SIMPLES XHTML*/

// 1. Crear un nodo de un tipo element
var nodo = document.createElement("h1");

// 2. Crear un nodo de tipo text
var nodo = document.createTextNode("texto");

// 3. Aadir un nodo hijo a un nodo padre
nodoPadre.appendChild(nodoHijo);

// 4. Añadir un nodo a la pagina
document.body.appendChild(nodo);



/* ELIMINACIÓN DE NODOS */
let nodo = document.getElementById("id");
nodo.parentNode.removeChild(nodo);

