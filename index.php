<?php
// Pega o endereço IP do visitante
$ip_address = $_SERVER['REMOTE_ADDR'];

// Define o email destinatário
$to = "seuemail@exemplo.com";

// Define o assunto do email
$subject = "Novo visitante no site";

// Define a mensagem do email
$message = "Um novo visitante acessou seu site com o endereço IP: $ip_address";

// Define os cabeçalhos do email
$headers = "From: noreply@seudominio.com\r\n";
$headers .= "Reply-To: noreply@seudominio.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envia o email
mail($to, $subject, $message, $headers);
?>
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DarkNetPirates</title>
<style>
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Courier New', Courier, monospace; /* Fonte estilo terminal */
  }

  #gif-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10; /* Coloque atrás de tudo, incluindo o universo */
    background-image: url('https://i.im.ge/2024/05/17/KoRae1.1000050573.png');
    background-size: cover;
    background-position: center;
    opacity: 5; /* Ajuste a opacidade conforme desejado */
  }

  #sidebar {
    position: fixed;
    top: 0;
    left: -200px; /* Inicialmente oculta */
    height: 100%;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.8); /* Cor de fundo da aba */
    color: #ffffff; /* Cor do texto verde */
    overflow-y: auto; /* Adicionado rolagem vertical se necessário */
    transition: left 0.3s; /* Adicionado transição suave para abrir/fechar */
    z-index: 1; /* Colocado abaixo do botão */
    border-top-right-radius: 15px; /* Borda superior direita arredondada */
    border-bottom-right-radius: 15px; /* Borda inferior direita arredondada */
    font-family: 'Netflix Sans', sans-serif; /* Adicionando a fonte da Netflix */
    /* Se a fonte 'Netflix Sans' não estiver disponível, o navegador usará uma fonte sans-serif padrão */
  }

  #sidebar.open {
    left: 0; /* Exibir a aba quando a classe "open" for adicionada */
  }

  .pdf-item {
    cursor: pointer;
    margin-bottom: 10px;
  }

  .pdf-item:hover {
    text-decoration: underline;
  }

  .login-container {
    display: none; /* Oculta o container de login */
  }

  h1 {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    max-width: 90%; /* Definindo uma largura máxima */
    text-align: center;
    margin: 0;
    padding: 10px 0;
    font-size: 3em;
    z-index: 4; /* Título fica na frente de tudo */
    animation: entrada 1.5s ease-in-out forwards;
  }
  @keyframes entrada {
    0% {
      transform: translateX(-50%) scale(0);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }

  /* Estilo do botão de abrir PDF */
  .switch {
    display: block;
    background-color: black;
    width: 80px;
    height: 80px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0 1px 2px black,
      inset 0 2px 2px -2px white, inset 0 0 2px 15px #47434c,
      inset 0 0 2px 22px black;
    border-radius: 5px;
    padding: 20px;
    perspective: 700px;
    position: fixed;
    bottom: 50px;
    left: 80%;
    transform: translateX(-50%);
    z-index: 3;
    cursor: pointer;
  }

  .switch input {
    display: none;
  }

  .switch input + .button {
    transform-origin: center center -20px;
    transform: translateZ(20px) rotateX(-25deg);
    transform-style: preserve-3d;
    background-color: #03a614;
    height: 100%;
    position: relative;
    cursor: pointer;
    background: linear-gradient(
      #02961d 0%,
      #005e02 30%,
      #006300 70%,
      #009100 100%
    );
    background-repeat: no-repeat;
  }

  .switch input:checked + .button {
    transform: translateZ(20px) rotateX(25deg);
    box-shadow: 0 -10px 20px #1cff42;
  }

  .switch .button::before {
    content: "";
    background: linear-gradient(
          rgba(255, 255, 255, 0.8) 10%,
          rgba(255, 255, 255, 0.3) 30%,
          #055c00 75%,
          #022e00
        )
        50% 50%/97% 97%,
      #00b00f;
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    transform-origin: top;
    transform: rotateX(-90deg);
    position: absolute;
    top: 0;
  }

  .switch .button::after {
    content: "";
    background-image: linear-gradient(#006600, #003008);
    width: 100%;
    height: 50px;
    transform-origin: top;
    transform: translateY(50px) rotateX(-90deg);
    position: absolute;
    bottom: 0;
    box-shadow: 0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .switch .light {
    opacity: 0;
    animation: light-off 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#7dff83, #1bff17 40%, transparent 70%);
  }

  .switch .dots {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(transparent 30%, rgba(6, 97, 0, 0.7) 70%);
    background-size: 10px 10px;
  }

  .switch .characters {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(white, white) 50% 20%/5% 20%,
      radial-gradient(
          circle,
          transparent 50%,
          white 52%,
          white 70%,
          transparent 72%
        )
        50% 80%/33% 25%;
    background-repeat: no-repeat;
  }

  .switch .shine {
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    opacity: 0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(white, transparent 3%) 50% 50%/97% 97%,
      linear-gradient(
          rgba(255, 255, 255, 0.5),
          transparent 50%,
          transparent 80%,
          rgba(255, 255, 255, 0.5)
        )
        50% 50%/97% 97%;
    background-repeat: no-repeat;
  }

  .switch .shadow {
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8));
    background-repeat: no-repeat;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes light-off {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }
  }

  /* Estilo da imagem na aba */
  .imagem-aba.imagem-aba {
    width: 150px;
    margin-top: 20px;
    margin-left: 20px; /* Movendo a imagem um pouco para a direita */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra suave */
    transition: transform 0.3s ease-in-out; /* Adiciona transição suave ao passar o mouse */
  }

  .imagem-aba:hover {
    transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
  }

</style>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet">
<!-- Adicionando fonte da Netflix -->
<link href="https://fonts.googleapis.com/css2?family=Netflix+Sans:wght@400;700&display=swap" rel="stylesheet">
<!-- Adicionando fonte de ícones -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>

<div id="gif-background"></div>

<div id="sidebar">
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/toy-story-4-2019-movie-ha-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1ffF-d32W0alBLqurZx6dftXO02DCkE7g/view?usp=drivesdk', 'Toy Story 4 PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/scooby-doo-on-zombie-island-ny-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1HmoJwEpUs6kuMbLQjcw1k90DfadBlEgZ/view?usp=drivesdk', 'Scooby doo PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/the-simpsons-tv-series-4k-v6-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1Oivn9FQlVG_-61xh5zByo_3bn8bEnqag/view?usp=drivesdk', 'Os Simpsons PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/wall-e-2008-5k-22-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1VqgRUBoCFZ-RzJAqA8bnoc645klrCwCj/view?usp=drivesdk', 'Wall-e PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/zootopia-judy-hopps-and-nick-hd-640x960.jpg" alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/12p3t7dLypVfa5aAesAC03hNQ7AZo8quQ/view?usp=drivesdk', 'Zootopia PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/inside-out-2-movie-2024-w4-640x960.jpg" alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1IqmbGx12gUcMgjJEkqRB8uRIUt0_Hr85/view?usp=drivesdk', 'Divertidamente PDF')">
  
  <img class="imagem-aba" src="https://i.im.ge/2024/05/06/ZRWoyK.1000042235.jpeg"  alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1YnsuBzUPZwbNgYFIS1YU08lHUT_XLIpJ/view?usp=drivesdk', 'Ben 10 O Segredo Do Omnitrix PDF')">
  
  <img class="imagem-aba" src="https://i.im.ge/2024/05/06/ZRZOSL.1000042237.jpeg"  alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1u5yzYkKw6l1hUI0R-NNQBlhCwyJyGJW2/view?usp=drivesdk', 'Ben 10 E Mutante Rex - Heróis Unidos PDF')">
  
  <img class="imagem-aba" src="https://i.im.ge/2024/05/18/KXfA8z.1000050972.jpeg" alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1oCfyKhBC3zwI_02x-QUhf0ROezTaDrK2/view?usp=drivesdk', 'Barbie 2023')">
</div>

<label class="switch">
  <input type="checkbox" />
  <div class="button" onclick="toggleSidebar()">
    <div class="light"></div>
    <div class="dots"></div>
    <div class="shadow"></div>
    <div class="characters"></div>
    <div class="shine"></div>
  </div>
</label>

<script>
  // Função para abrir ou fechar a aba lateral
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }

  // Função para abrir PDF em uma nova aba
  function openPDF(url, title) {
    window.open(url, '_blank');
  }

</script>
<body>
 
  <div id="Willer" style="position: fixed; bottom: 10px; right: 25px; color: white; font-size: 16px;">
    Willer-☠
  </div>

</body>
</html><?php
// Pega o endereço IP do visitante
$ip_address = $_SERVER['REMOTE_ADDR'];

// Define o email destinatário
$to = "seuemail@exemplo.com";

// Define o assunto do email
$subject = "Novo visitante no site";

// Define a mensagem do email
$message = "Um novo visitante acessou seu site com o endereço IP: $ip_address";

// Define os cabeçalhos do email
$headers = "From: noreply@seudominio.com\r\n";
$headers .= "Reply-To: noreply@seudominio.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envia o email
mail($to, $subject, $message, $headers);
?>
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DarkNetPirates</title>
<style>
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Courier New', Courier, monospace; /* Fonte estilo terminal */
  }

  #gif-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10; /* Coloque atrás de tudo, incluindo o universo */
    background-image: url('https://i.im.ge/2024/05/17/KoRae1.1000050573.png');
    background-size: cover;
    background-position: center;
    opacity: 5; /* Ajuste a opacidade conforme desejado */
  }

  #sidebar {
    position: fixed;
    top: 0;
    left: -200px; /* Inicialmente oculta */
    height: 100%;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.8); /* Cor de fundo da aba */
    color: #ffffff; /* Cor do texto verde */
    overflow-y: auto; /* Adicionado rolagem vertical se necessário */
    transition: left 0.3s; /* Adicionado transição suave para abrir/fechar */
    z-index: 1; /* Colocado abaixo do botão */
    border-top-right-radius: 15px; /* Borda superior direita arredondada */
    border-bottom-right-radius: 15px; /* Borda inferior direita arredondada */
    font-family: 'Netflix Sans', sans-serif; /* Adicionando a fonte da Netflix */
    /* Se a fonte 'Netflix Sans' não estiver disponível, o navegador usará uma fonte sans-serif padrão */
  }

  #sidebar.open {
    left: 0; /* Exibir a aba quando a classe "open" for adicionada */
  }

  .pdf-item {
    cursor: pointer;
    margin-bottom: 10px;
  }

  .pdf-item:hover {
    text-decoration: underline;
  }

  .login-container {
    display: none; /* Oculta o container de login */
  }

  h1 {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    max-width: 90%; /* Definindo uma largura máxima */
    text-align: center;
    margin: 0;
    padding: 10px 0;
    font-size: 3em;
    z-index: 4; /* Título fica na frente de tudo */
    animation: entrada 1.5s ease-in-out forwards;
  }
  @keyframes entrada {
    0% {
      transform: translateX(-50%) scale(0);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }

  /* Estilo do botão de abrir PDF */
  .switch {
    display: block;
    background-color: black;
    width: 80px;
    height: 80px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0 1px 2px black,
      inset 0 2px 2px -2px white, inset 0 0 2px 15px #47434c,
      inset 0 0 2px 22px black;
    border-radius: 5px;
    padding: 20px;
    perspective: 700px;
    position: fixed;
    bottom: 50px;
    left: 80%;
    transform: translateX(-50%);
    z-index: 3;
    cursor: pointer;
  }

  .switch input {
    display: none;
  }

  .switch input + .button {
    transform-origin: center center -20px;
    transform: translateZ(20px) rotateX(-25deg);
    transform-style: preserve-3d;
    background-color: #03a614;
    height: 100%;
    position: relative;
    cursor: pointer;
    background: linear-gradient(
      #02961d 0%,
      #005e02 30%,
      #006300 70%,
      #009100 100%
    );
    background-repeat: no-repeat;
  }

  .switch input:checked + .button {
    transform: translateZ(20px) rotateX(25deg);
    box-shadow: 0 -10px 20px #1cff42;
  }

  .switch .button::before {
    content: "";
    background: linear-gradient(
          rgba(255, 255, 255, 0.8) 10%,
          rgba(255, 255, 255, 0.3) 30%,
          #055c00 75%,
          #022e00
        )
        50% 50%/97% 97%,
      #00b00f;
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    transform-origin: top;
    transform: rotateX(-90deg);
    position: absolute;
    top: 0;
  }

  .switch .button::after {
    content: "";
    background-image: linear-gradient(#006600, #003008);
    width: 100%;
    height: 50px;
    transform-origin: top;
    transform: translateY(50px) rotateX(-90deg);
    position: absolute;
    bottom: 0;
    box-shadow: 0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .switch .light {
    opacity: 0;
    animation: light-off 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#7dff83, #1bff17 40%, transparent 70%);
  }

  .switch .dots {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(transparent 30%, rgba(6, 97, 0, 0.7) 70%);
    background-size: 10px 10px;
  }

  .switch .characters {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(white, white) 50% 20%/5% 20%,
      radial-gradient(
          circle,
          transparent 50%,
          white 52%,
          white 70%,
          transparent 72%
        )
        50% 80%/33% 25%;
    background-repeat: no-repeat;
  }

  .switch .shine {
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    opacity: 0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(white, transparent 3%) 50% 50%/97% 97%,
      linear-gradient(
          rgba(255, 255, 255, 0.5),
          transparent 50%,
          transparent 80%,
          rgba(255, 255, 255, 0.5)
        )
        50% 50%/97% 97%;
    background-repeat: no-repeat;
  }

  .switch .shadow {
    transition: all 0.3s cubic-bezier(1, 0, 1, 1);
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8));
    background-repeat: no-repeat;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0.8;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes light-off {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }
  }

  /* Estilo da imagem na aba */
  .imagem-aba.imagem-aba {
    width: 150px;
    margin-top: 20px;
    margin-left: 20px; /* Movendo a imagem um pouco para a direita */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adiciona sombra suave */
    transition: transform 0.3s ease-in-out; /* Adiciona transição suave ao passar o mouse */
  }

  .imagem-aba:hover {
    transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
  }

</style>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet">
<!-- Adicionando fonte da Netflix -->
<link href="https://fonts.googleapis.com/css2?family=Netflix+Sans:wght@400;700&display=swap" rel="stylesheet">
<!-- Adicionando fonte de ícones -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>

<div id="gif-background"></div>

<div id="sidebar">
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/toy-story-4-2019-movie-ha-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1ffF-d32W0alBLqurZx6dftXO02DCkE7g/view?usp=drivesdk', 'Toy Story 4 PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/scooby-doo-on-zombie-island-ny-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1HmoJwEpUs6kuMbLQjcw1k90DfadBlEgZ/view?usp=drivesdk', 'Scooby doo PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/the-simpsons-tv-series-4k-v6-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1Oivn9FQlVG_-61xh5zByo_3bn8bEnqag/view?usp=drivesdk', 'Os Simpsons PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/wall-e-2008-5k-22-640x960.jpg" alt="Imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1VqgRUBoCFZ-RzJAqA8bnoc645klrCwCj/view?usp=drivesdk', 'Wall-e PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/zootopia-judy-hopps-and-nick-hd-640x960.jpg" alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/12p3t7dLypVfa5aAesAC03hNQ7AZo8quQ/view?usp=drivesdk', 'Zootopia PDF')">
  
  <img class="imagem-aba" src="https://images.hdqwalls.com/download/inside-out-2-movie-2024-w4-640x960.jpg" alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1IqmbGx12gUcMgjJEkqRB8uRIUt0_Hr85/view?usp=drivesdk', 'Divertidamente PDF')">
  
  <img class="imagem-aba" src="https://i.im.ge/2024/05/06/ZRWoyK.1000042235.jpeg"  alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1YnsuBzUPZwbNgYFIS1YU08lHUT_XLIpJ/view?usp=drivesdk', 'Ben 10 O Segredo Do Omnitrix PDF')">
  
  <img class="imagem-aba" src="https://i.im.ge/2024/05/06/ZRZOSL.1000042237.jpeg"  alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1u5yzYkKw6l1hUI0R-NNQBlhCwyJyGJW2/view?usp=drivesdk', 'Ben 10 E Mutante Rex - Heróis Unidos PDF')">
  
  <img class="imagem-aba" src="https://i.im.ge/2024/05/18/KXfA8z.1000050972.jpeg" alt="imagem na aba" onclick="openPDF('https://drive.google.com/file/d/1oCfyKhBC3zwI_02x-QUhf0ROezTaDrK2/view?usp=drivesdk', 'Barbie 2023')">
</div>

<label class="switch">
  <input type="checkbox" />
  <div class="button" onclick="toggleSidebar()">
    <div class="light"></div>
    <div class="dots"></div>
    <div class="shadow"></div>
    <div class="characters"></div>
    <div class="shine"></div>
  </div>
</label>

<script>
  // Função para abrir ou fechar a aba lateral
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }

  // Função para abrir PDF em uma nova aba
  function openPDF(url, title) {
    window.open(url, '_blank');
  }

</script>
<body>
 
  <div id="Willer" style="position: fixed; bottom: 10px; right: 25px; color: white; font-size: 16px;">
    Willer-☠
  </div>

</body>
</html>
