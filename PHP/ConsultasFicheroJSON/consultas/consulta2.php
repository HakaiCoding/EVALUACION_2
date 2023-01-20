<!-- 2. Nombre de las personas que hablan 2 idiomas con un nivel Avanzado -->


<?php
// Carga el fichero JSON
$json = file_get_contents("curriculums.json");

// Decodifica el JSON y almacena los datos en un array
$data = json_decode($json, true);

//Contador que se incrementa cada vez que se encuentra un idioma con nivel avanzado
$cont = 0;

// Recorre cada CV
foreach ($data["cvs"] as $cv) {
    // Verifica si el CV tiene idiomas y si tiene 2 o más
    if (isset($cv["idiomas"]) && (count($cv["idiomas"]) >= 2)) {
        //Guarda el nombre del alumno
        $alumno = $cv['nombre'];

        foreach ($cv["idiomas"] as $idioma) {
            // Verifica si el nivel de idiomas es avanzado
            if ($idioma["nivel"] == "Avanzado") {
                $cont++;
            }
        }
        if($cont >= 2){
            print "El alumno con nombre " . $alumno . ", habla 2 o más idiomas con nivel Avanzado." . "<br>";
        }
        else {
            print "No hay ningun alumno con 2 o más idiomas con nivel Avanzado." . "<br>";
        }
    }  
}
?>