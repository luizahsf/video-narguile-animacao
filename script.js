<script src="script.js"></script>
let currentScene = 0;
const scenes = document.querySelectorAll('.scene');
const nextButton = document.getElementById('nextScene');

// Mostrar a primeira cena
scenes[currentScene].classList.add('active');

nextButton.addEventListener('click', () => {
    // Esconder a cena atual
    scenes[currentScene].classList.remove('active');

    // Avançar para a próxima cena
    currentScene = (currentScene + 1) % scenes.length;

    // Mostrar a próxima cena
    scenes[currentScene].classList.add('active');
});
