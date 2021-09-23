# Ceep_alura
*CURSO NA ALURA*
JS na Web: Manipule o DOM com JavaScript

  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./assets/css/style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=BioRhyme&amp;family=Space+Mono&amp;display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <title>Ceep</title>
</head>
<body style="background-color:#2c2c2c;">
  <div class="app">
    <div class="todo-list">
      <h1 class="title">
        Ceep
      </h1>
  
      <form class="form" action="">
        <input class="form-input" type="text" data-form-input>
        <button class="form-button" data-form-button> Novo Item </button>
      </form>

      <ul class="list" data-list>
        
      </ul>
    </div>
    <script type="module" src="listaDeTarefas.js"></script>
</body>
</html>
