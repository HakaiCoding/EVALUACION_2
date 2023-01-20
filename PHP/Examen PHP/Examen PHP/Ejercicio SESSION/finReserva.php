<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<title>Datos de la reserva</title>
</head>
<body>

<?php

    print 'Datos de la reserva:' . '<br>';

    print 'Código promocional: ' . $_SESSION['codigoPromocional'] . '<br>';

    print 'Nombre: ' . $_SESSION['nombre'] . '<br>';

    print 'Teléfono: ' . $_SESSION['telefono'] . '<br>';

    print 'Género: ' . $_SESSION['genero'] . '<br>';

    print 'Actividad: ' . $_SESSION['actividad'] . '<br>';

?>

</body>
</html>