document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function showSection(hash) {
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const target = document.querySelector(hash);
        if (target) {
            target.style.display = 'block';
        }
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const hash = this.getAttribute('href');
            showSection(hash);
        });
    });

    showSection(window.location.hash || '#inicio');
});

var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

var buyButtons = document.getElementsByClassName("buy-btn");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].onclick = openModal;
}

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function copyBitcoinKey() {
    var bitcoinKey = document.getElementById("bitcoin-key");
    var tempInput = document.createElement("input");
    tempInput.value = bitcoinKey.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

var copyBtn = document.getElementById("copy-btn");
copyBtn.onclick = copyBitcoinKey;