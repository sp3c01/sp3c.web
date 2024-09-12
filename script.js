document.getElementById('searchButton').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');
    const query = searchBar.value;

    if (!query.trim()) {
        searchBar.reportValidity();
        return;
    }

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
