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

                    // Cria o título "Tipo"
                    const resultTitle = document.createElement('h3');
                    resultTitle.textContent = "Tipo";

                    // Cria o separador (barra)
                    const resultSeparator = document.createElement('hr');

                    // Cria o link do item
                    const resultLink = document.createElement('a');
                    resultLink.href = item.url;
                    resultLink.textContent = item.name;
                    resultLink.target = '_blank'; // Abre o link em nova aba

                    // Adiciona os elementos ao contêiner
                    resultItem.appendChild(resultTitle);
                    resultItem.appendChild(resultSeparator);
                    resultItem.appendChild(resultLink);

                    // Adiciona o item de resultado ao contêiner de resultados
                    resultsDiv.appendChild(resultItem);
                });
            } else {
                // Se não houver resultados
                resultsDiv.textContent = 'Sem resultados para essa pesquisa.';
            }
        })
        .catch(error => console.error('Erro:', error));
});
