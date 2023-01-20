<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<title>Formulario de Datos Personales</title>
</head>
<body>

<form action="" method="post">
    <label>Nombre:</label>
    <input type="text" name="nombre">
    <br>
    <label>Telefono:</label>
    <input type="telefono" name="telefono">
    <br>
    <label>Género:</label>
    <input type="radio" name="genero" value="hombre"> Hombre
    <input type="radio" name="genero" value="mujer"> Mujer
    <br>
    <input type="submit" name="siguiente" value="Siguiente">
</form>

<?php
if (isset($_POST['nombre']) && isset($_POST['telefono']) && isset($_POST['genero'])) {
    $_SESSION['nombre'] = $_POST['nombre'];
    $_SESSION['telefono'] = $_POST['telefono'];
    $_SESSION['genero'] = $_POST['genero'];

    header('Location: actividades.php');
}
?>

</body>
</html>