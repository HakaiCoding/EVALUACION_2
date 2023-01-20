<?php

    $folder = "NuevaCarpeta";
    $createFolder = $_POST['createFolder'];
    $deleteFolder = $_POST['deleteFolder'];
    $listFolder = $_POST['listFolder'];


    if(isset($createFolder)){
        mkdir($folder, 0777);
        print "Carpeta creada con éxito";
    }

    if(isset($deleteFolder)){
        rmdir($folder);
        print "Se ha renombrado con éxito";
    }

    if(isset($listFolder)){
        scandir($folder);
        print "Se ha escaneado el contenido de la carpeta";
    }

?>
