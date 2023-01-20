/* METODOS DE ARRAYS */
// // 1. Array.isArray(variable): devuelve true si la variable es un array.
// // 2. array.push(elemento): añade un elemento al final del array.
// // 3. array.pop(): elimina el ultimo elemento del array y lo devuelve.
// // 4. array.unshift(elemento): añade un elemento al principio del array.
// // 5. array.shift(): elimina el primer elemento del array y lo devuelve.
// // 6. array.splice(posicion, numeroElementos, elemento1, elemento2, ...): elimina un numero de elementos a partir de una posicion y añade nuevos elementos.
// // 7. array.concat(array1, array2, ...): concatena uno o mas arrays y devuelve el resultado.
// // 8. array.join(separador): devuelve un string con los elementos del array separados por el separador.
// // 9. array.reverse(): invierte el orden de los elementos del array.
// // 10. array.sort(): ordena los elementos del array.
// // 11. array.slice(posicionInicial, posicionFinal): devuelve un array con los elementos del array original desde la posicionInicial hasta la posicionFinal.
// // 12. array.indexOf(elemento): devuelve la posicion del elemento en el array o -1 si no existe.
// // 13. array.lastIndexOf(elemento): devuelve la ultima posicion del elemento en el array o -1 si no existe.
// // 14. array.forEach(funcion): ejecuta la funcion para cada elemento del array.
// // 15. array.map(funcion): ejecuta la funcion para cada elemento del array y devuelve un array con los resultados.
// // 16. array.filter(funcion): ejecuta la funcion para cada elemento del array y devuelve un array con los elementos que devuelven true.
// // 17. array.every(funcion): ejecuta la funcion para cada elemento del array y devuelve true si todos los elementos devuelven true.
// // 18. array.some(funcion): ejecuta la funcion para cada elemento del array y devuelve true si algun elemento devuelve true.
// // 19. array.reduce(funcion, valorInicial): ejecuta la funcion para cada elemento del array y devuelve un valor.
// // 20. array.reduceRight(funcion, valorInicial): igual que reduce pero recorre el array de derecha a izquierda.



/* ARRAYS ASOCIATIVOS */
/* Declaracion */
// let array = new Array();
// array["nombre"] = "Pepe";
// array["edad"] = 23;
// array.direccion = "Calle falsa 123";



/* ARRAY DE OBJETOS */
/* Buscar un elemento en un array de objetos */
// let array = [
//     {nombre: "Pepe", edad: 23},
//     {nombre: "Juan", edad: 34},
//     {nombre: "Rosa", edad: 18},
//     {nombre: "Maria", edad: 45}
// ];
//array.find() devuelve el primer elemento que cumple la condicion
// let personaNombreRosa = array.find(item => item.nombre === "Rosa"); Resultado: {nombre: "Rosa", edad: 18} 



/* FUNCIONES CALLBACK */
/* Una funcion callback es aquella que es pasada como parametro. La funcion que recibe el callback se llama funcion de orden superior
 */


