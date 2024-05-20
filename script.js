document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Mostra a tela de carregamento
    preloader.style.display = "flex";

    // Simula um carregamento por 3 segundos
    setTimeout(function() {
        // Esconde a tela de carregamento e mostra os resultados da pesquisa após um pequeno intervalo de tempo
        setTimeout(function() {
            preloader.style.display = "none";
            content.style.display = "block";
        }, 1000); // Pequeno intervalo de espera para dar tempo de a tela de carregamento ser vista
    });

    // Seleciona o campo de entrada da barra de pesquisa
    const input = document.querySelector('header input[type="text"]');

    // Adiciona um evento de digitação ao campo de entrada
    input.addEventListener('input', function() {
        const searchTerm = input.value.toLowerCase(); // Obtém o valor digitado e converte para minúsculas
        filterCategories(searchTerm); // Chama a função para filtrar as categorias
    });

    // Função para filtrar as categorias
    function filterCategories(searchTerm) {
        const categories = document.querySelectorAll('.link-category'); // Seleciona todas as categorias
        
        // Itera sobre as categorias
        categories.forEach(category => {
            const categoryName = category.querySelector('h2').textContent.toLowerCase(); // Obtém o texto do título da categoria e converte para minúsculas
            
            // Verifica se o texto do título da categoria contém o termo de pesquisa
            if (categoryName.includes(searchTerm)) {
                category.style.display = 'block'; // Mostra a categoria se corresponder ao termo de pesquisa
            } else {
                category.style.display = 'none'; // Oculta a categoria se não corresponder ao termo de pesquisa
            }
        });
    }
});
