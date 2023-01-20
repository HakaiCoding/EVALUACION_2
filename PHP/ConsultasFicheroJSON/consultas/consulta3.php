<!-- 3. El numero de participantes que tienen postgrado Master en Big Data. -->

<?php
// Carga el fichero JSON
$json = file_get_contents("curriculums.json");

// Decodifica el JSON y almacena los datos en un array
$data = json_decode($json, true);

//Contador que se incrementa cada vez que se encuentra una persona con postgrado Master en Big Data
$cont = 0;

// Recorre cada CV
foreach ($data["cvs"] as $cv) {
    // Verifica si el CV tiene estudios de postgrado
    if (isset($cv["estudios"]["postgrado"])) {
        //Guarda el nombre del alumno
        $alumno = $cv['nombre'];
        print "El alumno " . $alumno . " tiene estudios de postgrado" . "<br>";
        //Recorre los postgrados
        foreach ($cv["estudios"]["postgrado"] as $postgrado){
            // Verifica si postgrado es Master en Big Data
            if ($postgrado["nombre"] == "Master en Big Data") {
                $cont++;
            }
        }
    }  
}

print "Hay un total de " . $cont . " alumnos con postgrado Master en Big Data." . "<br>";
?>