document.getElementById('searchButton').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');

    if (!searchBar.checkValidity()) {
        searchBar.reportValidity();
        return;
    }

    const query = searchBar.value;

    fetch(`https://valiant-grey-jingle.glitch.me/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; 

            if (data.results.length > 0) {
                data.results.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item'); 

                    const resultText = document.createElement('span');
                    resultText.textContent = "Nome: ";
                    resultText.classList.add('result-text');

                    const resultLink = document.createElement('a');
                    resultLink.href = item.url;
                    resultLink.textContent = item.name;
                    resultLink.target = '_blank'; 
                    resultLink.classList.add('result-link'); 

                    const resultContent = document.createElement('div');
                    resultContent.classList.add('result-content');
                    resultContent.appendChild(resultText);
                    resultContent.appendChild(resultLink);

                    resultItem.appendChild(resultContent);

                    resultsDiv.appendChild(resultItem);
                });

                resultsDiv.style.display = 'block';
            } else {
                resultsDiv.textContent = 'Sem resultados para essa pesquisa.';
            }
        })
        .catch(error => console.error('Erro:', error));
});

// Inicialmente esconde os resultados
document.getElementById('results').style.display = 'none';
