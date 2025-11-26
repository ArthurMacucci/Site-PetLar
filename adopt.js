// Seleciona todos os botões com a classe "btn-adotar"
const adoptionButtons = document.querySelectorAll('.btn-adotar');

// Adiciona um evento de clique a cada botão
adoptionButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Encontra o nome do animal (elemento <h4> anterior ao botão)
        const animalName = button.parentElement.querySelector('h4').textContent;

        // Exibe o alerta com o nome do animal
        alert(`Você demonstrou interesse em adotar ${animalName}!`);
    });
});