<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<title>Actividades</title>
</head>
<body>

<form action="" method="post">
    <input type="radio" name="actividad" value="spinning"> Spinning
    <input type="radio" name="actividad" value="bodycombat"> BodyCombat
    <br>
    <input type="submit" name="siguiente" value="Siguiente">
</form>

<?php
if (isset($_POST['actividad'])) {
    $_SESSION['actividad'] = $_POST['actividad'];

    header('Location: finReserva.php');
}
?>

</body>
</html>