/* Tradicionalmente se utiliza la propiedad name de los elementos para acceder a ellos. Esta
propiedad también se usa para enviar los datos al servidor cuando se pulsa submit.
 */
// <form action="http://www.ejemplo.com" method="get">
// <input type="text" name="nombre" value="Ejemplo">
// <input type="submit" value="Enviar">
// </form>

/* document.forms[0].nombre
document.forms[0] ["nombre"]
document.querySelector("[name='nombre']") */

/* VALIDAR FORMULARIOS */
//Hacer uso de preventDefault() para evitar que el formulario se envíe al servidor.

/* EVENTOS MAS USADOS EN FORMULARIOS */
// focus: cuando el usuario hace click en un elemento del formulario.
// blur: cuando el usuario hace click fuera de un elemento del formulario.
// change: cuando el usuario cambia el valor de un elemento del formulario.
// submit: cuando el usuario pulsa el botón submit del formulario.

/* PROPIEDADES O ATRIBUTOS DE CONTROLES DE FORMULARIO */
// value: devuelve el valor del control.
// checked: devuelve true si el control está marcado.
// selected: devuelve true si el control está seleccionado.
// disabled: devuelve true si el control está deshabilitado.
// readOnly: devuelve true si el control es de solo lectura.
// maxLength: devuelve el número máximo de caracteres que se pueden introducir en el control.
// size: devuelve el número de caracteres que se muestran en el control.
// name: devuelve el nombre del control.
// type: devuelve el tipo de control.
// id: devuelve el identificador del control.
// className: devuelve la clase del control.
// style: devuelve el estilo del control.
// required: devuelve true si el control es obligatorio.
// autofocus: devuelve true si el control tiene el foco al cargar la página.
// selectionStart: devuelve la posición del cursor en el control.
// selectionEnd: devuelve la posición del cursor en el control.
// min: devuelve el valor mínimo del control.
// max: devuelve el valor máximo del control.

/* METODOS DE CONTROLES DE FORMULARIO */
// focus(): pone el foco en el control.
//Ejemplo de uso: document.forms[0].nombre.focus();
// blur(): quita el foco del control.
// select(): selecciona el texto del control.
// click(): simula un click en el control.
// setSelectionRange(inicio,fin): establece la posición del cursor en el control.
