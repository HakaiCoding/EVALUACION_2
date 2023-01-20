<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<title>Inicio Reserva</title>
</head>
<body>

<a href="datosPersonales.php?codigoPromocional=0">Sin Código Promocional</a>
<br>
<a href="datosPersonales.php?codigoPromocional=112">Con Código Promocional</a>

<?php

if (isset($_GET['codigoPromocional'])) {
    $_SESSION['codigoPromocional'] = $_GET['codigoPromocional'];

    header ('Location: datosPersonales.php');
}

?>

</body>
</html>