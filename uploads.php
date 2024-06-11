<?php
// Verifica se o arquivo foi enviado corretamente
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
        // Diretório onde os arquivos serão armazenados
        $uploadDir = 'uploads/';
        
        // Nome do arquivo enviado
        $fileName = basename($_FILES['file']['name']);
        
        // Caminho completo do arquivo no servidor
        $filePath = $uploadDir . $fileName;
        
        // Move o arquivo do diretório temporário para o diretório de uploads
        if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            echo "<p>Arquivo enviado com sucesso.</p>";

            // Lê o conteúdo do arquivo
            $fileContent = file_get_contents($filePath);

            // Atualiza o conteúdo da página principal com o conteúdo do arquivo enviado
            echo "<script>";
            echo "document.addEventListener('DOMContentLoaded', function() {";
            echo "    fetch('index.html', { method: 'GET' })";
            echo "    .then(response => response.text())";
            echo "    .then(data => {";
            echo "        document.body.innerHTML = data;";
            echo "    })";
            echo "    .catch(error => {";
            echo "        console.error('Erro ao carregar a página principal:', error);";
            echo "    });";
            echo "});";
            echo "</script>";
        } else {
            echo "<p>Erro ao enviar o arquivo.</p>";
        }
    } else {
        echo "<p>Erro ao processar o upload do arquivo.</p>";
    }
}
?>