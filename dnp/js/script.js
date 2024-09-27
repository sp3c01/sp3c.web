
const API_KEY = 'AIzaSyC2oj32EFUyYhAsmN1H1LshSz7HuKLDCtM';
const CX_KEY = 'a230bcd809ae047f3';
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const backendURL = 'https://aware-winter-tarsal.glitch.me/log';

const urlParams = new URLSearchParams(window.location.search);
const queryParam = urlParams.get('query');
if (queryParam) {
    searchInput.value = queryParam;
    logInteraction(queryParam);
    searchPDFs(queryParam);
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        updateURL(query);
        logInteraction(query);
        searchPDFs(query);
    }
});

async function logInteraction(query) {
    try {
        await fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action: 'search', query: query })
        });
    } catch (error) {
        console.error('Erro ao registrar a interação:', error);
    }
}

function updateURL(query) {
    const newUrl = `${window.location.pathname}?query=${encodeURIComponent(query)}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

async function searchPDFs(query) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_KEY}&q=${query}+filetype:pdf`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        displayResults(data.items);
    } catch (error) {
        console.error('Erro ao buscar PDFs:', error);
        resultsDiv.innerHTML = 'Erro ao buscar PDFs. Tente novamente.';
    }
}

function displayResults(items) {
    resultsDiv.innerHTML = '';

    if (!items) {
        resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
        return;
    }

    items.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
            <p>${item.snippet}</p>
        `;
        resultsDiv.appendChild(resultItem);
        
        logInteraction(`Clicou no resultado: ${item.title}`);
    });
}
