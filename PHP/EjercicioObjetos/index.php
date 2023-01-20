<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clases y objetos</title>
    <style>
        form{
            width:350px;
        }
        label,input,select{
            margin-left:50px;
            margin-right:50px;
        }
        h2,h3{
            margin:auto;
            text-align:center;
        }
    </style>

</head>
<body>
    <Form action = "http://localhost/claseEstudiante.php" method = "post" enctype="multipart/form-data">
        <br>
            <h3>DATOS PERSONALES</h3><br>
            <Label>Nombre</Label><br>
            <Input name = "nombre" id ="n1" >

            <Label>Apellidos</Label><br>
            <Input name = "apellidos" id ="n2" >

            <Label>Codigo Postal</Label><br>
            <Input name = "codPostal" id ="n3" >
            <br><br>
            <Label>Elija curso</Label><br>
            <select name="cursos" id="desplegable">
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="C++">C++</option>
            </select>
           <br><br><br>

            <input type="submit" value="Enviar"><a src="http://localhost/claseEstudiante.php"></a></input>
            <br> <br>
        </Form>
    

</body>
</html>