document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    fetch(`https://project-name.glitch.me/search?query=${encodeURIComponent(query)}`)  // Substitua "project-name" pelo nome do seu projeto Glitch
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (data.results.length === 0) {
                resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
                return;
            }

            data.results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<a href="${item.link}" target="_blank">${item.name}</a>`;
                resultsDiv.appendChild(resultItem);
            });
        })
        .catch(error => {
            console.error('Erro:', error);
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = 'Houve um erro ao buscar os dados. Verifique o console para mais informações.';
        });
});
