document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-query').value;

    const newUrl = '?query=' + encodeURIComponent(query);
    window.history.pushState({ path: newUrl }, '', newUrl);

    console.log('Fetching results for query:', query);  // Adicione esta linha

    fetch('https://oil-spot-pediatrician.glitch.me/search?query=' + encodeURIComponent(query))
        .then(response => {
            console.log('Response status:', response.status);  // Adicione esta linha
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);  // Adicione esta linha
            let resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.results.forEach(pdf => {
                let resultCard = document.createElement('div');
                resultCard.classList.add('result-card');

                let titleLink = document.createElement('a');
                titleLink.href = pdf.url;
                titleLink.textContent = pdf.title;
                titleLink.classList.add('result-title');

                let urlDiv = document.createElement('div');
                urlDiv.textContent = pdf.url;
                urlDiv.classList.add('result-url');

                let snippetDiv = document.createElement('div');
                snippetDiv.textContent = pdf.snippet;
                snippetDiv.classList.add('result-snippet');

                resultCard.appendChild(titleLink);
                resultCard.appendChild(urlDiv);
                resultCard.appendChild(snippetDiv);
                resultsDiv.appendChild(resultCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);  // Adicione esta linha
        });
});
