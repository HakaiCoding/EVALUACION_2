<!-- 1. Nombre de las personas que tienen estudios universitarios y estudios no universitarios (con más de 140 horas). -->

<?php
// Carga el fichero JSON
$json = file_get_contents("curriculums.json");

// Decodifica el JSON y almacena los datos en un array
$data = json_decode($json, true);

// Recorre cada CV
foreach ($data["cvs"] as $cv) {
    // Verifica si el CV tiene estudios universitarios
    if (isset($cv["estudios"]["universitarios"]) && (isset($cv["estudios"]["no_universitarios"]))) {
        //Guarda el nombre del alumno
        $alumno = $cv['nombre'];

        foreach ($cv["estudios"]["universitarios"] as $universitarios) {
            // Verifica si la duración de la universitarios es mayor o igual a 160 horas
            if ($universitarios["duracion_horas"]  >= 140) {
            
                foreach ($cv["estudios"]["no_universitarios"] as $noUniversitarios) {
                    // Verifica si la duración de la carrera es mayor o igual a 160 horas
                    if ($noUniversitarios["duracion_horas"]  >= 140) { 
                        print "El alumno con nombre: " . $alumno . " tiene estudios universitarios y estudios no universitarios con más de 140 horas." . "<br>";
                    }
                }
            }
        }
    }
    else{
        print "No hay ningun alumno con estudios universitarios y estudios no universitarios con más de 140 horas." . "<br>";  
    }
}



?>