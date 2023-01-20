<?php
// Obtener contenido del fichero JSON
$json = file_get_contents('excursiones.json');

// Convertir contenido del fichero a un array
$rutas = json_decode($json, true);

//Definir contador para saber cuantas rutas estan completas
$cont = 0;

// Recorrer cada una de las rutas
foreach ($rutas['excursiones'] as $ruta) {
    // Mostrar información de la ruta
    echo "Nombre de la ruta: " . $ruta['nombreRuta'] . "<br>";
    echo "Precio: " . $ruta['precio'] . "<br>";
    echo "Número de participantes: " . $ruta['numParticipantes'] . "<br>";
    echo "Completa: " . ($ruta['completa'] ? "Sí" : "No") . "<br>";

    //Si la ruta está completa(true) el contador se incrementa
    if($ruta['completa']){
        $cont++;
    }
    echo "Itinerario:<br>";
    // Recorrer itinerario de la ruta
    foreach ($ruta['itinerario'] as $lugar) {
        // Mostrar lugar del itinerario
        echo "&nbsp;&nbsp;- " . $lugar . "<br>";
    }
    echo "<br>";
}

echo "Hay un total de " . $cont . " rutas completas";
?>
