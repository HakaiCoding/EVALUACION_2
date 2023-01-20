<?php

//Extraer los datos del archivo JSON y convertirlos en un array
$json = file_get_contents('bbddCustYpersonas.json');
$arrayJSON = json_decode($json, true);

//Recorrer el array y extraer los datos de las tablas cuestionarios y personas
foreach ($arrayJSON as $tabla) {
    if (isset($tabla['name']) && $tabla['name'] == 'cuestionarios') {
        $cuestionarios = $tabla['data'];
    }
    if (isset($tabla['name']) && $tabla['name'] == 'personas') {
        $personas = $tabla['data'];
    }
}

//Recorrer el array de cuestionarios y contar los tipos de cuestionarios
$tipos = array();
foreach ($cuestionarios as $cuestionario) {
    if (array_key_exists($cuestionario['tipo'], $tipos)) {
        $tipos[$cuestionario['tipo']]++;
    } else {
        $tipos[$cuestionario['tipo']] = 1;
    }
}

//Ordenar el array de tipos de cuestionarios en orden descendente
krsort($tipos); 


//Imprimir los tipos de cuestionarios y su cantidad
print "Cuántos cuestionarios hay de cada tipo. El tipo debe aparecer ordenado en orden descendente" . "<br>";
foreach ($tipos as $tipo => $cantidad) {
    print "Hay " . $cantidad . " cuestionarios de tipo " . $tipo . "<br>";
}
print "<br>"."<br>";


//Recorrer el array de personas y contar las personas que no dijeron su oficio
foreach ($personas as $persona) {
    if ($persona['oficio'] == null) {
        $nombres[] = $persona['nombre'];
    }
}
//Ordenar el array de nombres de personas en orden ascendente
sort($nombres); 


//Imprimir los nombres de las personas que no dijeron su oficio
print "Nombre de las personas(ordenados ascendentemente) que no dijeron su oficio ('oficio': null)."."<br>";
foreach ($nombres as $nombre) {
    print $nombre . "<br>";
}

?>