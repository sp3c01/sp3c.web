// script.js

const searchInput = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        try {
            const response = await fetch(`https://9dec6e04-153e-4f39-899a-08feef5db582-00-192ntprp6e48y.riker.replit.dev/search?q=${searchTerm}`);
            const data = await response.json();
            displaySearchResults(data);
        } catch (error) {
            console.error(error);
        }
    }
});

function displaySearchResults(data) {
    searchResults.innerHTML = '';
    data.forEach((item) => {
        const resultHTML = `
            <h2><a href="${item.link}">${item.name}</a></h2>
        `;
        searchResults.innerHTML += resultHTML;
    });
}