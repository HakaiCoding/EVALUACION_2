<!-- 10. ¿Cuántos candidatos son de Villalba? -->



<?php
$json = file_get_contents("curriculums.json"); // Carga el fichero JSON
$data = json_decode($json, true); // Decodifica el JSON y almacena los datos en un array

$cont = 0;

foreach ($data["cvs"] as $cv) {

    if($cv["codigo_postal"] == "28400"){
        $cont++;
    }
}

print "Hay " . $cont . " candidatos de Villalba.";

?>