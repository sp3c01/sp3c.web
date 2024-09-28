document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('search-query').value;

  if (!query) {
    alert('Por favor, insira um termo de pesquisa.');
    return;
  }

  const newUrl = '?query=' + encodeURIComponent(query);
  window.history.pushState({ path: newUrl }, '', newUrl);

  fetch('https://oil-spot-pediatrician.glitch.me/search' + newUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
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
      console.error('Error:', error);
    });
});
