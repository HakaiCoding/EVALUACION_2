// c. Generar tabla
// Crea una función javascript que permite dibujar una tabla en un página web,
// utilizando document.write para generarla. Como parámetros se indican el
// número de filas y el de columnas con dos números. Por defecto la función
// tomará 10 filas y 4 columnas. La tabla se crea con un borde del color
// indicado en un tercer parámetro. Si no se especifica el color, por defecto el
// borde será negro. El borde tendrá 1px de grosor.La tabla ocupa el ancho de
// la página.
// Usaremos la función para:
// ● Crear una tabla con borde negro de 10 filas por 4 columnas.
// ● Generar una tabla de 20 filas, 10 columnas y borde negro.
// ● Generar una tabla de 10 filas, 5 columnas y borde verde.


function createTable(filas = 3, columnas = 10, color = "red"){

    document.write("<table>");

    for(let i=0; i < filas; i++){
        document.write("<tr>");

        for(let x=0; x < columnas; x++){
            document.write(`<td style='border: 1px solid ${color}'>`);
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

createTable();
createTable(3, 10, "green");
createTable(3, 10, "purple");