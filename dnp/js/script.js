document.getElementById('searchButton').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');

    // Verifica se o campo de busca é válido
    if (!searchBar.checkValidity()) {
        searchBar.reportValidity();
        return;
    }

    const query = searchBar.value;

    // Faz a requisição para a API de busca
    fetch(`https://valiant-grey-jingle.glitch.me/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Limpa os resultados anteriores

            if (data.results.length > 0) {
                data.results.forEach(item => {
                    // Cria o contêiner para cada item de resultado
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item'); // Adiciona a classe CSS

                    // Cria o texto "Nome:"
                    const resultText = document.createElement('span');
                    resultText.textContent = "Nome: ";
                    resultText.classList.add('result-text');

                    // Cria o link do item
                    const resultLink = document.createElement('a');
                    resultLink.href = item.url;
                    resultLink.textContent = item.name;
                    resultLink.target = '_blank'; // Abre o link em nova aba
                    resultLink.classList.add('result-link'); // Classe para estilo

                    // Agrupa o texto "Nome" e o link no contêiner
                    const resultContent = document.createElement('div');
                    resultContent.classList.add('result-content');
                    resultContent.appendChild(resultText);
                    resultContent.appendChild(resultLink);

                    // Adiciona o conteúdo ao bloco de resultados
                    resultItem.appendChild(resultContent);

                    // Adiciona o item de resultado ao contêiner de resultados
                    resultsDiv.appendChild(resultItem);
                });

                // Mostra a área de resultados
                resultsDiv.style.display = 'block';
            } else {
                // Se não houver resultados
                resultsDiv.textContent = 'Sem resultados para essa pesquisa.';
            }
        })
        .catch(error => console.error('Erro:', error));
});

// Inicialmente esconde os resultados
document.getElementById('results').style.display = 'none';
