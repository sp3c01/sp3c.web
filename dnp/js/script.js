const API_KEY = 'AIzaSyBfBiCU8lbIcryMfL2ojgwd-vYn2bO3Suk';
const videoContainer = document.getElementById('video-container');
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const videoPlayer = document.getElementById('video-player');

function searchVideos(query) {
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=${API_KEY}`;
    
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.items.length === 0) {
                videoContainer.innerHTML = '<p>Nenhum vídeo encontrado.</p>';
                return;
            }
            displayVideos(data.items);
        })
        .catch(error => console.error('Erro ao buscar vídeos:', error));
}

function displayVideos(videos) {
    videoContainer.innerHTML = '';
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        
        videoItem.innerHTML = `
            <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
            <h3>${video.snippet.title}</h3>
        `;

        videoItem.addEventListener('click', () => {
            playVideo(video.id.videoId);
        });
        
        videoContainer.appendChild(videoItem);
    });
}

function playVideo(videoId) {
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
    videoPlayer.style.display = 'block';

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function loadInitialVideos() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('search') || 'Peppa Pig';
    searchVideos(query);
    searchBar.value = query; // Define a barra de pesquisa para o termo atual
}

function updateURL(query) {
    const newUrl = `?search=${encodeURIComponent(query)}`;
    window.history.pushState({ search: query }, '', newUrl);
}

searchButton.addEventListener('click', () => {
    const query = searchBar.value;
    if (query) {
        searchVideos(query);
        videoPlayer.style.display = 'none';
        updateURL(query);
    }
});

window.onload = loadInitialVideos;
