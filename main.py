<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>403 Forbidden</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #2c3e50;
            color: #ecf0f1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
            overflow: hidden; /* Desativa a rolagem */
        }
        .container {
            max-width: 600px;
        }
        .custom-loader {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: conic-gradient(#0000 10%, #766DF4);
            -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
            animation: s3 1s infinite linear;
            margin: 0 auto;
        }
        @keyframes s3 {
            to { transform: rotate(1turn); }
        }
        h2 {
            font-size: 24px; /* Tamanho menor */
            margin: 10px 0 20px;
        }
        p {
            font-size: 14px; /* Tamanho menor */
            margin: 20px 0;
        }
        a {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="custom-loader"></div>
        <h2>Forbidden</h2>
        <p>Você não tem permissão para acessar esta página.</p>
        <p><a href="/">Voltar para a página inicial</a></p>
    </div>
</body>
</html>
