<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
        <div>
            <label for="name">Nombre</label>
            <input type="text" name="name">
        </div>
        <div>
            <label for="provincia">Provincia</label>
            <input type="text" name="provincia">
        </div>
        <div>
            <span>CV:</span>
            <input type="file" name="uploadFile" />
        </div>
        <input type="submit" name="uploadBtn" value="Enviar" />
    </form> 
    <?php

        if(isset($_GET["mensaje"])){
            print $_GET["mensaje"];
        }

    ?>
</body>

</html>