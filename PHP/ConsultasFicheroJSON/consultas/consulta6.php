<!-- 6. Nombre del candidato que más aficiones tiene. -->

<?php
$json = file_get_contents("curriculums.json"); // Carga el fichero JSON
$data = json_decode($json, true); // Decodifica el JSON y almacena los datos en un array

$personaAficiones = [];
$maxAficiones = 0;

foreach ($data["cvs"] as $cv) {

    $nombre = $cv["nombre"];
    $numAficiones = count($cv["aficiones"]);

    array_push($personaAficiones, ['nombre' => $nombre, 'numAficiones' => $numAficiones]);
}

//for loop para recorrer el array y comparar los valores de numAficiones
for ($i = 0; $i < count($personaAficiones); $i++) {
    if($personaAficiones[$i]['numAficiones'] > $maxAficiones){
        $maxAficiones = $personaAficiones[$i]['numAficiones'];
    }
}


$indexOfmaxAficiones = array_search($maxAficiones, array_column($personaAficiones, 'numAficiones'));

print "La persona " . $personaAficiones[$indexOfmaxAficiones]['nombre'] . " tiene el mayor número de aficiones con " . $personaAficiones[$indexOfmaxAficiones]['numAficiones'] . " aficiones.";

?>