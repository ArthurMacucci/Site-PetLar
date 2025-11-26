document.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    if (!greetingEl) return;
    const hour = new Date().getHours();
    let saudacao = 'Olá';
    if (hour >= 5 && hour < 12) saudacao = 'Bom dia';
    else if (hour >= 12 && hour < 18) saudacao = 'Boa tarde';
    else saudacao = 'Boa noite';
    greetingEl.textContent = `${saudacao}!`;
});