/* ASIGNAR EVENTOS */

let div1 = document.getElementById("div1");

div1.addEventListener("click", function () {
    console.log("Click en div1");
}, false);
//El tercer parametro es opcional y es un booleano que indica si el evento se ejecuta en fase de burbuja o de captura


/* ANULAR UN EVENTO (No se puede usar con funciones anonimas) */
div1.removeEventListener("click", nombreFuncionAnular, false);

/* OBJETO EVENTO (pasa como parametro a la funcion callback) */
// 1. Propiedades
// 1.1. target: elemento que ha disparado el evento
// 1.2. type: tipo de evento
// 1.3. currentTarget: elemento que esta ejecutando el evento
// 1.4. timeStamp: marca de tiempo del evento
// 1.5. bubbles: indica si el evento se ejecuta en fase de burbuja
// 1.6. cancelable: indica si el evento se puede cancelar
// 1.7. defaultPrevented: indica si el evento se ha cancelado
// 1.8. eventPhase: fase en la que se ejecuta el evento
// 1.9. isTrusted: indica si el evento es de confianza
// 1.10. returnValue: indica si el evento se ha cancelado
// 1.11. srcElement: elemento que ha disparado el evento
// 1.12. view: ventana que ha disparado el evento
// 1.13. which: boton del raton que ha disparado el evento
// 1.14. keyCode: codigo de la tecla que ha disparado el evento
// 1.15. charCode: codigo del caracter que ha disparado el evento
// 1.16. altKey: indica si se ha pulsado la tecla alt
// 1.17. ctrlKey: indica si se ha pulsado la tecla ctrl
// 1.18. shiftKey: indica si se ha pulsado la tecla shift
// 1.19. metaKey: indica si se ha pulsado la tecla meta
// 1.20. button: boton del raton que ha disparado el evento
// 1.21. buttons: botones del raton que se han pulsado
// 1.22. clientX: posicion del raton en el eje x
// 1.23. clientY: posicion del raton en el eje y
// 1.24. offsetX: posicion del raton en el eje x relativa al elemento
// 1.25. offsetY: posicion del raton en el eje y relativa al elemento
// 1.26. pageX: posicion del raton en el eje x relativa a la pagina
// 1.27. pageY: posicion del raton en el eje y relativa a la pagina
// 1.28. screenX: posicion del raton en el eje x relativa a la pantalla
// 1.29. screenY: posicion del raton en el eje y relativa a la pantalla
// 1.30. x: posicion del raton en el eje x relativa a la pagina
// 1.31. y: posicion del raton en el eje y relativa a la pagina
// 1.32. movementX: movimiento del raton en el eje x
// 1.33. movementY: movimiento del raton en el eje y
// 1.34. relatedTarget: elemento relacionado con el evento
// 1.35. dataTransfer: objeto que contiene los datos que se han arrastrado
// 1.36. data: datos que se han arrastrado
// 1.37. effectAllowed: efecto que se aplica al arrastrar
// 1.38. files: ficheros que se han arrastrado
// 1.39. items: elementos que se han arrastrado
// 1.40. types: tipos de elementos que se han arrastrado
// 1.41. clipboardData: datos del portapapeles
// 1.42. data: datos del portapapeles
// 1.43. types: tipos de datos del portapapeles
// 1.44. detail: numero de veces que se ha pulsado el boton del raton
// 1.45. key: tecla que ha disparado el evento
// 1.46. location: localizacion de la tecla que ha disparado el evento
// 1.47. repeat: indica si la tecla se ha pulsado varias veces
// 1.48. locale: idioma del teclado
// 1.49. char: caracter que ha disparado el evento
// 1.50. code: codigo de la tecla que ha disparado el evento
// 1.51. isComposing: indica si se esta componiendo un caracter
// 1.52. data: datos que se han copiado
// 1.53. origin: origen del mensaje
// 1.54. lastEventId: identificador del ultimo evento
// 1.55. source: origen del mensaje
// 1.56. ports: puertos del mensaje


/* PreventDefault y stopPropagation */

// 2. Metodos
// 2.1. preventDefault(): cancela el evento
// 2.2. stopPropagation(): cancela la propagacion del evento
// 2.3. stopImmediatePropagation(): cancela la propagacion del evento y evita que se ejecuten los demas eventos


/* LANZAR EVENTOS */
// 3. Lanzar eventos
//Hay que crear un objeto de tipo Event,KeyboardEvent, MouseEvent y pasarle como parametro el tipo de evento que queremos lanzar y para lanzarlo usamos el metodo dispatchEvent
//objeto = new Event("tipo de evento");
// 3.1. dispatchEvent(evento): lanza un evento

/* TIPOS DE EVENTO */
// 4. Tipos de evento

// 4.1. Eventos de raton
// 4.1.1. click: se dispara cuando se hace click sobre un elemento
// 4.1.2. dblclick: se dispara cuando se hace doble click sobre un elemento
// 4.1.3. mousedown: se dispara cuando se pulsa un boton del raton sobre un elemento
// 4.1.4. mouseup: se dispara cuando se suelta un boton del raton sobre un elemento
// 4.1.5. mouseover: se dispara cuando el raton pasa por encima de un elemento
// 4.1.6. mouseout: se dispara cuando el raton sale de un elemento
// 4.1.7. mousemove: se dispara cuando el raton se mueve sobre un elemento
// 4.1.8. mouseenter: se dispara cuando el raton entra en un elemento
// 4.1.9. mouseleave: se dispara cuando el raton sale de un elemento
// 4.1.10. contextmenu: se dispara cuando se pulsa el boton derecho del raton sobre un elemento
// 4.1.11. wheel: se dispara cuando se mueve la rueda del raton sobre un elemento

/* Arrastre de elementos */
// 4.1.12. drag: se dispara cuando se empieza a arrastrar un elemento
// 4.1.13. dragend: se dispara cuando se termina de arrastrar un elemento
// 4.1.14. dragenter: se dispara cuando el raton entra en un elemento arrastrado
// 4.1.15. dragexit: se dispara cuando el raton sale de un elemento arrastrado
// 4.1.16. dragleave: se dispara cuando el raton sale de un elemento arrastrado
// 4.1.17. dragover: se dispara cuando el raton se mueve sobre un elemento arrastrado
// 4.1.18. dragstart: se dispara cuando se empieza a arrastrar un elemento
// 4.1.19. drop: se dispara cuando se suelta un elemento arrastrado

/* Eventos de teclado */
// 4.2. Eventos de teclado
// 4.2.1. keydown: se dispara cuando se pulsa una tecla
// 4.2.2. keyup: se dispara cuando se suelta una tecla
// 4.2.3. keypress: se dispara cuando se pulsa una tecla

/* Eventos de formulario */
// 4.3. Eventos de formulario
// 4.3.1. blur: se dispara cuando un elemento pierde el foco
// 4.3.2. change: se dispara cuando un elemento cambia
// 4.3.3. focus: se dispara cuando un elemento recibe el foco
// 4.3.4. focusin: se dispara cuando un elemento recibe el foco
// 4.3.5. focusout: se dispara cuando un elemento pierde el foco
// 4.3.6. input: se dispara cuando un elemento cambia
// 4.3.7. invalid: se dispara cuando un elemento no es valido
// 4.3.8. reset: se dispara cuando se pulsa el boton de reset de un formulario
// 4.3.9. search: se dispara cuando se pulsa el boton de buscar de un formulario
// 4.3.10. select: se dispara cuando se selecciona un elemento
// 4.3.11. submit: se dispara cuando se pulsa el boton de enviar de un formulario

/* Eventos de carga */
// 4.4. Eventos de carga
// 4.4.1. load: se dispara cuando se carga un recurso
// 4.4.2. error: se dispara cuando se produce un error al cargar un recurso
// 4.4.3. abort: se dispara cuando se cancela la carga de un recurso
// 4.4.4. beforeunload: se dispara cuando se cierra una ventana
// 4.4.5. unload: se dispara cuando se cierra una ventana

/* Eventos de tiempo */
// 4.5. Eventos de tiempo
// 4.5.1. DOMContentLoaded: se dispara cuando el documento se ha cargado y esta listo para ser interactuado
// 4.5.2. hashchange: se dispara cuando cambia el hash de la url
// 4.5.3. message: se dispara cuando se recibe un mensaje
// 4.5.4. offline: se dispara cuando el navegador se desconecta de la red
// 4.5.5. online: se dispara cuando el navegador se conecta a la red
// 4.5.6. pagehide: se dispara cuando se oculta una pagina
// 4.5.7. pageshow: se dispara cuando se muestra una pagina
// 4.5.8. popstate: se dispara cuando se cambia el estado de la pagina
// 4.5.9. resize: se dispara cuando se cambia el tamaño de la ventana
// 4.5.10. scroll: se dispara cuando se hace scroll sobre la pagina
// 4.5.11. storage: se dispara cuando se cambia el almacenamiento local
// 4.5.12. unload: se dispara cuando se cierra una ventana

/* Eventos de animacion */
// 4.6. Eventos de animacion
// 4.6.1. animationstart: se dispara cuando se empieza una animacion
// 4.6.2. animationend: se dispara cuando se termina una animacion
// 4.6.3. animationiteration: se dispara cuando se repite una animacion

/* Eventos de transicion */
// 4.7. Eventos de transicion
// 4.7.1. transitionstart: se dispara cuando
// 4.7.2. transitionend: se dispara cuando
// 4.7.3. transitionrun: se dispara cuando

/* Eventos de multimedia */
// 4.8. Eventos de multimedia
// 4.8.1. abort: se dispara cuando se cancela la carga de un recurso
// 4.8.2. canplay: se dispara cuando se puede reproducir un recurso
// 4.8.3. canplaythrough: se dispara cuando se puede reproducir un recurso sin interrupciones
// 4.8.4. durationchange: se dispara cuando cambia la duracion de un recurso
// 4.8.5. emptied: se dispara cuando se vacia un recurso
// 4.8.6. ended: se dispara cuando se termina de reproducir un recurso
// 4.8.7. loadeddata: se dispara cuando se cargan los datos de un recurso
// 4.8.8. loadedmetadata: se dispara cuando se cargan los metadatos de un recurso
// 4.8.9. loadstart: se dispara cuando se empieza a cargar un recurso
// 4.8.10. pause: se dispara cuando se pausa un recurso
// 4.8.11. play: se dispara cuando se empieza a reproducir un recurso
// 4.8.12. playing: se dispara cuando se empieza a reproducir un recurso
// 4.8.13. progress: se dispara cuando se carga un recurso
// 4.8.14. ratechange: se dispara cuando cambia la velocidad de reproduccion de un recurso
// 4.8.15. seeked: se dispara cuando se termina de buscar en un recurso
// 4.8.16. seeking: se dispara cuando se empieza a buscar en un recurso
// 4.8.17. stalled: se dispara cuando se produce un retraso en la reproduccion de un recurso
// 4.8.18. suspend: se dispara cuando se suspende la carga de un recurso
// 4.8.19. timeupdate: se dispara cuando cambia el tiempo de reproduccion de un recurso
// 4.8.20. volumechange: se dispara cuando cambia el volumen de un recurso
// 4.8.21. waiting: se dispara cuando se espera a que se carguen los datos de un recurso

/* Eventos de drag and drop */
// 4.9. Eventos de drag and drop
// 4.9.1. drag: se dispara cuando se arrastra un elemento
// 4.9.2. dragend: se dispara cuando se termina de arrastrar un elemento
// 4.9.3. dragenter: se dispara cuando se entra en un elemento
// 4.9.4. dragleave: se dispara cuando se sale de un elemento
// 4.9.5. dragover: se dispara cuando se arrastra un elemento sobre un elemento
// 4.9.6. dragstart: se dispara cuando se empieza a arrastrar un elemento
// 4.9.7. drop: se dispara cuando se suelta un elemento sobre un elemento





