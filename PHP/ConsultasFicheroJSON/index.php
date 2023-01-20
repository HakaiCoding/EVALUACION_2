<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <pre>
    1. Nombre de las personas que tienen estudios universitarios y estudios no universitarios (con más de 140 horas).
  
    2. Nombre de las personas que hablan 2 idiomas con un nivel avanzado
  
    3. El numero de participantes que tienen postgrado master en big data.
  
    4. Cuántas saben Alemán
  
    5. El estudio universitario que más candidatos ha estudiado junto con la universidad en la que lo hicieron.
  
    6. Nombre del candidato que más aficiones tiene.
  
    7. ¿Cuantos tienen estudios de postgrado?
  
    8. ¿Cuántas personas no tienen ninguna aficion?
  
    9. ¿Cuántos idiomas habla cada candidato?
  
    10. ¿Cuántos candidatos son de Villalba?
  
    11. Nombre de los candidatos cuyo dni comienza por 0.
    </pre>

    <form action="index.php" method="POST">
        <pre>
        <label for="consulta">¿Qué número de consulta quieres?</label>
        <input type="text" name="num" style="margin : 10px 10px 0 10px">
      </pre>

        <pre>
        <input type="submit" style="margin : 0px 20px">
        </pre>
    </form>
</body>
</html>
<?php

$numConsulta = 0;

if(isset($_POST['num'])){
  if(!empty($_POST['num'])){
    $numConsulta = intval($_POST['num']);
    if(!intval($numConsulta)){
      echo "<pre>   Número no válido, prueba otro.</pre>";
    }
    else{
      switch($numConsulta){
        case 1:
          include 'consultas/consulta1.php';
          break;
        case 2:
          include 'consultas/consulta2.php';
          break;
        case 3:
          include 'consultas/consulta3.php';
          break;
        case 4:
          include 'consultas/consulta4.php';
          break;
        case 5:
          include 'consultas/consulta5.php';
          break;
        case 6:
          include 'consultas/consulta6.php';
          break;
        case 7:
          include 'consultas/consulta7.php';
          break;
        case 8:
          include 'consultas/consulta8.php';
          break;
        case 9:
          include 'consultas/consulta9.php';
          break;
        case 10:
          include 'consultas/consulta10.php';
          break;
        case 11:
          include 'consultas/consulta11.php';
          break;
        default:
          echo "<pre>Número no válido, prueba otro.</pre>";
          break;
      }

    }
  }
}
?>