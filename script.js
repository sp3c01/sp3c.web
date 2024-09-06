const links = [
    { name: 'Link 1', url: 'http://example.com/1' },
    { name: 'Link 2', url: 'http://example.com/2' },
    { name: 'Link 3', url: 'http://example.com/3' },
    { name: 'Link 4', url: 'http://example.com/4' },
    { name: 'Link 5', url: 'http://example.com/5' },
    { name: 'Link 6', url: 'http://example.com/6' },
    { name: 'Link 7', url: 'http://example.com/7' },
    { name: 'Link 8', url: 'http://example.com/8' },
    { name: 'Link 9', url: 'http://example.com/9' },
    { name: 'Link 10', url: 'http://example.com/10' },
    { name: 'Divertida Mente', url: 'https://abrir.link/lgBMj' },
    { name: 'Divertida Mente 2', url: 'http://example.com/divertida-mente-2' }
];

function search() {
    const searchBox = document.getElementById('search-box');
    const query = searchBox.value.toLowerCase();
    const results = document.getElementById('results');

    results.innerHTML = '';

    // Verifica se o campo está vazio
    if (query.trim() === '') {
        return false; // Retorna false para evitar o envio do formulário
    }

    // Usando um Set para garantir resultados únicos
    const uniqueLinks = new Set(
        links.filter(link => link.name.toLowerCase().includes(query))
    );

    if (uniqueLinks.size > 0) {
        uniqueLinks.forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.className = 'link';
            linkElement.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
            results.appendChild(linkElement);
        });
    } else {
        results.innerHTML = 'Nenhum resultado encontrado.';
    }

    return false; // Retorna false para evitar o envio do formulário
}