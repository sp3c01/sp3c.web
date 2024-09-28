document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('search-query').value;

  if (!query) {
    alert('Por favor, insira um termo de pesquisa.'); // Alerta se a consulta estiver vazia
    return;
  }

  const newUrl = '?query=' + encodeURIComponent(query);
  window.history.pushState({ path: newUrl }, '', newUrl);

  fetch('https://oil-spot-pediatrician.glitch.me/search?query=' + encodeURIComponent(query))
    .then(response => response.json())
    .then(data => {
      let resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
      if (data.error) {
        resultsDiv.innerHTML = '<p>' + data.error + '</p>'; // Exibir mensagem de erro
        return;
      }
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
        snippetDiv.textContent = pdf.snippet || 'Snippet não disponível'; // Exibir mensagem se o snippet não estiver presente
        snippetDiv.classList.add('result-snippet');

        resultCard.appendChild(titleLink);
        resultCard.appendChild(urlDiv);
        resultCard.appendChild(snippetDiv);
        resultsDiv.appendChild(resultCard);
      });
    });
});
