document.getElementById('searchButton').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');

    if (!searchBar.checkValidity()) {
        // Se o campo não for válido, exibe o aviso
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
                    const link = document.createElement('a');
                    link.href = item.link;
                    link.textContent = item.name;
                    link.target = '_blank';
                    resultsDiv.appendChild(link);
                    resultsDiv.appendChild(document.createElement('br'));
                });
            } else {
                resultsDiv.textContent = 'Nenhum resultado encontrado.';
            }
        })
        .catch(error => console.error('Erro:', error));
});
