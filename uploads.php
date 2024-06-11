<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
        
        $uploadDir = 'uploads/';
        
        $fileName = basename($_FILES['file']['name']);
        
        $filePath = $uploadDir . $fileName;
        
        if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            echo "<p>Arquivo enviado com sucesso.</p>";

            $fileContent = file_get_contents($filePath);
            
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
