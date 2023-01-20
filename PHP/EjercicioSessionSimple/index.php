<?php
    session_start(); //Se inicia/crea la sesión
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php

        //Comprobamos que se haya escrito algo en la caja de texto, de ser asi guardamos el dato en la variable global $_SESSION
        if(isset($_POST['name'])){
            $_SESSION['name'] = $_POST['name'];
        }

        //Comprobamos si el tiempo de expiración que hemos guardado en la cookie "inicio" tiene una diferencia de 20 segundos cuando se refresca la página
        if(isset($_SESSION['inicio']) && time() - $_SESSION['inicio'] > 20){
            session_unset();
            session_destroy();
            print "La sesión ha expirado despues de 20 segundos";
        }



        //Comprobamos que guardado un dato en la variable $_SESSION, de ser asi mostramos mensaje concatenado con lo que se escribió en la caja de texto.
        if(isset($_SESSION['name'])){
            
            print "Bienvenido de nuevo " . $_SESSION['name'];
        }
        //Si la condición anterior no se cumple, mostramos el formulario para que el usuario pueda escribir algo en la caja de texto
        else{
            print '<form action="index.php" method="post">
            <label for="name">Nombre <input type="text" name="name"></label>
            </form>';
        }

        $_SESSION['inicio'] = time(); //Creamos una cookie con nombre "inicio" que tendrá como valor la hora en la que se inicia la sesión

    ?>

</body>
</html>