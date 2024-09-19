document.getElementById('searchButton').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');
    const resultsDiv = document.getElementById('results');

    if (!searchBar.checkValidity()) {
        searchBar.reportValidity();
        return;
    }

    const query = searchBar.value;

    // Função para fazer requisição à API
    function fetchFromAPI(apiUrl) {
        return fetch(`${apiUrl}?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                console.log('Resposta da API:', data); // Adiciona o log aqui
                return data;  // Certifique-se de retornar os dados aqui
            });
    }

    // Primeira tentativa na primeira API
    fetchFromAPI('https://valiant-grey-jingle.glitch.me/search')
        .then(handleResults)
        .catch(() => {
            console.error('Primeira API falhou, tentando a segunda API...');
            return fetchFromAPI('https://api2-srk9.onrender.com/search');
        })
        .then(handleResults)
        .catch(error => {
            console.error('Ambas as APIs falharam:', error);
            displayNoResultsMessage('Erro ao buscar resultados. Tente novamente mais tarde.');
        });

    // Função para lidar com os resultados da API
    function handleResults(data) {
        resultsDiv.innerHTML = '';
        const noResultsMessage = document.getElementById('noResultsMessage');
        if (noResultsMessage) {
            noResultsMessage.remove();
        }

        if (data && data.results && data.results.length > 0) {
            data.results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                const resultHeader = document.createElement('div');
                resultHeader.classList.add('result-header');
                resultHeader.textContent = 'Name:';

                resultHeader.style.fontSize = '11px';   
                resultHeader.style.fontWeight = 'bold'; 
                resultHeader.style.color = '#00008B';   

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
            displayNoResultsMessage('Sem resultados para essa pesquisa.');
        }
    }

    // Função para exibir a mensagem de "Sem resultados"
    function displayNoResultsMessage(message) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.id = 'noResultsMessage';
        noResultsMessage.textContent = message;
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.padding = '20px';
        noResultsMessage.style.backgroundColor = '#f4f4f4';

        document.body.appendChild(noResultsMessage);
    }
});
