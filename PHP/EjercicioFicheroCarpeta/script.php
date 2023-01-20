<?php

    $fp = "prueba.txt";
    $createFile = $_POST['createFile'];
    $copyFile = $_POST['copyFile'];
    $renameFile = $_POST['renameFile'];
    $deleteFile = $_POST['deleteFile'];


    if(isset($createFile)){
        fopen($fp, "w");
        print "Fichero creado con éxito";
    }


    if(isset($copyFile)){
        copy($fp, "copiaPrueba.txt");
        print "Se ha copiado con éxito";
    }

    if(isset($renameFile)){
        rename($fp, "renamePrueba.txt");
        print "Se ha renombrado con éxito";
    }

    if(isset($deleteFile)){
        unlink($fp);
        print "Se ha eliminado con éxito";
    }

?>
