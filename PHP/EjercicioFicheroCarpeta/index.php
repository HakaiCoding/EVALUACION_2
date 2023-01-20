<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: flex;
        }
        .container2{
            margin-left: 40px;
        }
    </style>
</head>
<body>
<div>    
    <h2>FICHEROS</h2>
    <form action="script.php" method="POST" enctype="multipart/form-data">
        <div>
            <label for="name">Crear fichero</label>
            <input type="checkbox" name="createFile" value="createFile">
        </div><br>
        <div>
            <label for="name">Copiar fichero</label>
            <input type="checkbox" name="copyFile" value="copyFile">
        </div><br>
        <div>
            <label for="name">Renombrar fichero</label>
            <input type="checkbox" name="renameFile" value="renameFile">
        </div><br>
        <div>
            <label for="name">Borrar fichero</label>
            <input type="checkbox" name="deleteFile" value="deleteFile">
        </div><br>
            <input type="submit" value="Realizar">
    </form>
</div>

<div class="container2">
    <h2>CARPETAS</h2>
    <form action="script2.php" method="POST" enctype="multipart/form-data">
        <div>
            <label for="name">Crear carpeta</label>
            <input type="checkbox" name="createFolder" value="createFolder">
        </div><br>
        <div>
            <label for="name">Borrar carpeta</label>
            <input type="checkbox" name="deleteFolder" value="deleteFolder">
        </div><br>
        <div>
            <label for="name">Listar contenido</label>
            <input type="checkbox" name="listFolder" value="listFolder">
        </div><br>
        <input type="submit" value="Realizar">
    </form>
</div>
</body>
</html>