document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const courseList = document.getElementById('course-list');
    const filterSelect = document.getElementById('filter');

    function getUserAgent(platform) {
        switch(platform) {
            case 'windows':
                return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36';
            case 'android':
                return 'Mozilla/5.0 (Linux; Android 10; Pixel 3 XL Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Mobile Safari/537.36';
            case 'linux':
                return 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0';
            default:
                return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36';
        }
    }

    function fetchCourses(query = '', category = '', platform = 'windows') {
        const userAgent = getUserAgent(platform);
        fetch(`https://plum-stingy-gas.glitch.me/courses?search=${query}&category=${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': userAgent
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede.');
            }
            return response.json();
        })
        .then(data => {
            courseList.innerHTML = '';
            if (data.length === 0) {
                courseList.innerHTML = '<li>Nenhum curso encontrado.</li>';
            } else {
                data.forEach(course => {
                    const li = document.createElement('li');
                    li.className = 'card';

                    const courseTitle = document.createElement('h3');
                    courseTitle.innerText = course.name;

                    const courseDescription = document.createElement('p');
                    courseDescription.innerText = course.description;

                    const courseLink = document.createElement('a');
                    courseLink.href = course.url;
                    courseLink.target = '_blank';
                    courseLink.innerText = 'Ver Curso';

                    li.appendChild(courseTitle);
                    li.appendChild(courseDescription);
                    li.appendChild(courseLink);
                    courseList.appendChild(li);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao buscar cursos:', error);
            courseList.innerHTML = '<li>Não foi possível encontrar cursos.</li>';
        });
    }

    fetchCourses();

    searchInput.addEventListener('input', function() {
        const query = searchInput.value;
        const category = filterSelect.value;
        fetchCourses(query, category, 'windows');
    });

    filterSelect.addEventListener('change', function() {
        const query = searchInput.value;
        const category = filterSelect.value;
        fetchCourses(query, category, 'windows');
    });
});