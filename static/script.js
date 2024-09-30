document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('entry-form');
    const entriesDiv = document.getElementById('entries');
    const passwordInput = document.getElementById('password');
    const submitPasswordButton = document.getElementById('submit-password');

    // Função para carregar entradas
    function loadEntries(password) {
        fetch(`https://veil-literate-ferry.glitch.me/entries?password=${password}`)
            .then(response => {
                if (!response.ok) {
                    alert("Senha incorreta");
                    throw new Error('Senha incorreta');
                }
                return response.json();
            })
            .then(data => {
                entriesDiv.innerHTML = '';
                data.forEach(entry => {
                    const div = document.createElement('div');
                    div.classList.add('entry');
                    div.innerHTML = `<strong>${entry.date}</strong><p>${entry.content}</p>`;
                    entriesDiv.appendChild(div);
                });
            })
            .catch(error => console.error(error));
    }

    // Acessar o diário
    submitPasswordButton.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password) {
            // Exibir o formulário e carregar as entradas
            form.style.display = 'block';
            loadEntries(password);
        } else {
            alert("Por favor, insira a senha.");
        }
    });

    // Adiciona entrada
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEntry = {
            date: document.getElementById('date').value,
            content: document.getElementById('content').value,
            password: passwordInput.value // Captura a senha do input
        };

        fetch('https://veil-literate-ferry.glitch.me/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        })
        .then(response => {
            if (!response.ok) {
                alert("Senha incorreta");
                throw new Error('Senha incorreta');
            }
            return response.json();
        })
        .then(() => {
            form.reset();
            loadEntries(passwordInput.value); // Recarrega as entradas
        })
        .catch(error => console.error(error));
    });
});