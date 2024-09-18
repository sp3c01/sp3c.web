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

                    // Alterando o estilo diretamente no JS
                    resultHeader.style.fontSize = '11px';   // Diminui o tamanho da fonte
                    resultHeader.style.fontWeight = 'bold'; // Define a fonte em negrito
                    resultHeader.style.color = '#00008B';   // Muda a cor para azul

                    const resultLink = document.createElement('a');
                    resultLink.href = item.url;
                    resultLink.textContent = item.name;
                    resultLink.target = '_blank';
                    resultLink.classList.add('result-link');

                    resultItem.appendChild(resultHeader);
                    resultItem.appendChild(resultLink);
                    resultsDiv.appendChild(resultItem);
                });

                resultsDiv.style.display = 'block'; 
            } else {
                resultsDiv.style.display = 'none'; 

                const noResultsMessage = document.createElement('div');
                noResultsMessage.id = 'noResultsMessage';
                noResultsMessage.textContent = 'Sem resultados para essa pesquisa.';
                noResultsMessage.style.textAlign = 'center';
                noResultsMessage.style.padding = '20px';
                noResultsMessage.style.backgroundColor = '#f4f4f4';

                document.body.appendChild(noResultsMessage);
            }
        })
        .catch(error => console.error('Erro:', error));
});
