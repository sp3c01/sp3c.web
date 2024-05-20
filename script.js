document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Mostra a tela de carregamento
    preloader.style.display = "flex";

    // Simula um carregamento por 3 segundos
    setTimeout(function() {
        // Esconde a tela de carregamento e mostra o conteúdo do site
        preloader.style.display = "none";
        content.style.display = "block";
    }, 2000); // Tempo de espera de 3 segundos
});
