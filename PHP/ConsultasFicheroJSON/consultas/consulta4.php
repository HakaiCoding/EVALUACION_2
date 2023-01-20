<!-- 4. Cuántas saben Alemán -->

<?php
// Carga el fichero JSON
$json = file_get_contents("curriculums.json");

// Decodifica el JSON y almacena los datos en un array
$data = json_decode($json, true);

//Contador que se incrementa cada vez que se encuentra una persona que habla Aleman
$cont = 0;

// Recorre cada CV
foreach ($data["cvs"] as $cv) {
    // Verifica si el CV tiene idiomas y si tiene 2 o más
    if (isset($cv["idiomas"])) {
        //Recorre los idiomas
        foreach ($cv["idiomas"] as $idioma){
            // Verifica si el idioma es Aleman
            if ($idioma["nombre"] == "Aleman") {
                $cont++;
            }
        }
    }  
}

print "Hay un total de " . $cont . " alumnos que hablan Aleman" . "<br>";

?>