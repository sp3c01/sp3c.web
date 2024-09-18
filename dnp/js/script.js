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
            resultsDiv.innerHTML = ''; // Limpa os resultados anteriores

            if (data.results.length > 0) {
                data.results.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');

                    const resultLink = document.createElement('a');
                    resultLink.href = item.url;
                    resultLink.textContent = item.name;
                    resultLink.target = '_blank';
                    resultLink.classList.add('result-link');

                    resultItem.appendChild(resultLink);
                    resultsDiv.appendChild(resultItem);
                });

                resultsDiv.style.display = 'block';
            } else {
                const noResultsMessage = document.createElement('div');
                noResultsMessage.textContent = 'Sem resultados para essa pesquisa.';
                noResultsMessage.style.textAlign = 'center'; // Centraliza o texto
                noResultsMessage.style.padding = '20px'; // Adiciona padding ao redor da mensagem
                noResultsMessage.style.backgroundColor = '#FFF5EE'; // Cor de fundo semelhante ao bloco

                resultsDiv.style.display = 'block'; // Exibe o bloco de resultados
                resultsDiv.innerHTML = ''; // Limpa o conteúdo do bloco
                resultsDiv.appendChild(noResultsMessage); // Adiciona a mensagem de "sem resultados" ao bloco
            }
        })
        .catch(error => console.error('Erro:', error));
});

document.getElementById('results').style.display = 'none';
