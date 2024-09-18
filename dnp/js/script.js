document.getElementById('searchButton').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');
    const resultsDiv = document.getElementById('results');

    if (!searchBar.checkValidity()) {
        searchBar.reportValidity();
        return;
    }

    const query = searchBar.value;

    fetch(`https://valiant-grey-jingle.glitch.me/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            // Limpa resultados anteriores e mensagem de "sem resultados"
            resultsDiv.innerHTML = '';
            const noResultsMessage = document.getElementById('noResultsMessage');
            if (noResultsMessage) {
                noResultsMessage.remove();
            }

            if (data.results.length > 0) {
                data.results.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');

                    const resultHeader = document.createElement('div');
                    resultHeader.classList.add('result-header');
                    resultHeader.textContent = 'Nome:';

                    const resultLink = document.createElement('a');
                    resultLink.href = item.url;
                    resultLink.textContent = item.name;
                    resultLink.target = '_blank';
                    resultLink.classList.add('result-link');

                    resultItem.appendChild(resultHeader);
                    resultItem.appendChild(resultLink);
                    resultsDiv.appendChild(resultItem);
                });

                resultsDiv.style.display = 'block'; // Exibe o bloco de resultados
            } else {
                // Cria e exibe a mensagem de "sem resultados"
                resultsDiv.style.display = 'none'; // Oculta o bloco de resultados

                const noResultsMessage = document.createElement('div');
                noResultsMessage.id = 'noResultsMessage';
                noResultsMessage.textContent = 'Sem resultados para essa pesquisa.';
                noResultsMessage.style.textAlign = 'center';
                noResultsMessage.style.padding = '20px';
                noResultsMessage.style.backgroundColor = '#f4f4f4';

                // Adiciona a mensagem de "sem resultados" ao corpo da página, fora do bloco de resultados
                document.body.appendChild(noResultsMessage);
            }
        })
        .catch(error => console.error('Erro:', error));
});

document.getElementById('results').style.display = 'none';
