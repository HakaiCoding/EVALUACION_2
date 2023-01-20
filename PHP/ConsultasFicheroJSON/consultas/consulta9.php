<!-- 9. ¿Cuántos idiomas habla cada candidato? -->


<?php
$json = file_get_contents("curriculums.json"); // Carga el fichero JSON
$data = json_decode($json, true); // Decodifica el JSON y almacena los datos en un array

$cont = 0;

foreach ($data["cvs"] as $cv) {

    $persona = $cv["nombre"];
    $idiomas = count($cv["idiomas"]);

    print $persona . " habla " . $idiomas . " idiomas." . "<br>";
}


?>