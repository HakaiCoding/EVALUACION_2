<!-- 5. El estudio universitario que más candidatos ha estudiado junto con la universidad en la que lo hicieron. -->


<?php
$json = file_get_contents("curriculums.json"); // Carga el fichero JSON
$data = json_decode($json, true); // Decodifica el JSON y almacena los datos en un array

$cont = 0; //Contador que se incrementa cada vez que una carrera de una universidad aparece en el array $carreras
$vecesRep = 0;//Esta variable el valor de $cont una vez que termina una vuelta del bucle for anidado

$contadores = array();//Array que almacena el valor de $vecesRep una vez que el bucle for principal da una vuelta.
$carreras = array();//Array que almacena $carrera(nombre y universidad)



// Recorre cada CV
foreach ($data["cvs"] as $cv) {
    // Verifica si el CV tiene estudios universitarios
    if (isset($cv["estudios"]["universitarios"])) {
        //Recorre los estudios universitarios y los guarda en el array $carreras
        foreach ($cv["estudios"]["universitarios"] as $carrera){
            array_push($carreras, $carrera);  
        }
    } 
}



for($i = 0; $i < count($carreras); $i++){
    $nombreCarrera = $carreras[$i]["nombre"];
    $nombreUniversidad = $carreras[$i]["universidad"];

    $cont = 0; //Reinicia el contador a 0

    for($j = 0; $j < count($carreras); $j++){

        if($carreras[$j]["nombre"] == $nombreCarrera && $carreras[$j]["universidad"] == $nombreUniversidad){
            $cont++;
            $vecesRep = $cont;
        }
    }

    array_push($contadores, $vecesRep);
}

//indice del valor que mas se repite en el array $contadores
$repetido = array_search(max($contadores), $contadores); 

print "La carrera que mas se repite es " . $carreras[$repetido]["nombre"] . " en la universidad " . $carreras[$repetido]["universidad"] . "<br>";

?>