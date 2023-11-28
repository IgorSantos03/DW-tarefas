<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<Div class="container">
        <div class="links">
            <div class="logo">"A Carne" - Júlio Ribeiro</div>
            <div class="menu-desktop">
                <div><a href="index.php"><Button class="bt-link">Autor</Button></a></div>
                <div><a href="index.php?page=resumo"><button class="bt-link">Resumo</button></a></div>
                <div><select name="cartas" id="cartas" onchange="location.href=this.value" class="bt-link">
                    <option value="">Cartas</option>
                    <option value="">Carta1</option>
                    <option value="">Carta2</option>
                </select></div>
                <div><a href="index.php?page=autores"><button class="bt-link">Alunos</button></a></div>
            </div>
        </div>
        <br>
        <?php 
            if (isset($_GET['page']) && $_GET['page'] != "") {
                    $page = $_GET['page'];
                } else {
                    $page = "autor";
                }
                
                include  $page . ".html"; 
                ?>
               

</Div>
</body>
</html>