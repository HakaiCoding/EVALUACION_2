<!-- 8. ¿Cuántas personas no tienen ninguna aficion? -->

<?php
$json = file_get_contents("curriculums.json"); // Carga el fichero JSON
$data = json_decode($json, true); // Decodifica el JSON y almacena los datos en un array

$cont = 0;

foreach ($data["cvs"] as $cv) {

    if(!isset($cv["aficiones"])){
        $cont++;
    }
}

print "Hay " . $cont . " personas sin aficiones.";

?>