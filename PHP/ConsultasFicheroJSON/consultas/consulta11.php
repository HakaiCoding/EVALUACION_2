<!-- 11. Nombre de los candidatos cuyo dni comienza por 0. -->




<?php
$json = file_get_contents("curriculums.json"); // Carga el fichero JSON
$data = json_decode($json, true); // Decodifica el JSON y almacena los datos en un array

$cont = 0;

foreach ($data["cvs"] as $cv) {

    $persona = $cv["nombre"];
    $dni = $cv["dni"];

    if (substr($dni, 0, 1) == "0") {
        print "El DNI de " . $persona . " comienza por 0. <br>";
    }
}

?>