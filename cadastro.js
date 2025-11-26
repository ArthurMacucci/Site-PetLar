class MinimalLoginForm {
    constructor() {
        this.form = document.getElementById('loginForm');

        // Inputs
        this.nomeInput = document.getElementById('nome');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.telefoneInput = document.getElementById('telefone');

        // Botão
        this.submitButton = this.form.querySelector('.login-btn');

        // Mensagem de sucesso
        this.successMessage = document.getElementById('successMessage');

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        this.nomeInput.addEventListener('blur', () => this.validateNome());
        this.emailInput.addEventListener('blur', () => this.validateEmail());
        this.passwordInput.addEventListener('blur', () => this.validatePassword());
        this.telefoneInput.addEventListener('blur', () => this.validateTelefone());

        this.nomeInput.addEventListener('input', () => this.clearError('nome'));
        this.emailInput.addEventListener('input', () => this.clearError('email'));
        this.passwordInput.addEventListener('input', () => this.clearError('password'));
        this.telefoneInput.addEventListener('input', () => this.clearError('telefone'));
    }

    /* ----------- Validações ----------- */

    validateNome() {
        const nome = this.nomeInput.value.trim();

        if (!nome) {
            this.showError('nome', 'O nome é obrigatório');
            return false;
        }

        this.clearError('nome');
        return true;
    }

    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            this.showError('email', 'O email é obrigatório');
            return false;
        }

        if (!emailRegex.test(email)) {
            this.showError('email', 'Digite um email válido');
            return false;
        }

        this.clearError('email');
        return true;
    }

    validatePassword() {
        const password = this.passwordInput.value;

        if (!password) {
            this.showError('password', 'A senha é obrigatória');
            return false;
        }

        if (password.length < 6) {
            this.showError('password', 'A senha deve ter ao menos 6 caracteres');
            return false;
        }

        this.clearError('password');
        return true;
    }

    validateTelefone() {
        const telefone = this.telefoneInput.value.trim();

        if (!telefone) {
            this.showError('telefone', 'O telefone é obrigatório');
            return false;
        }

        if (telefone.length < 8) {
            this.showError('telefone', 'Digite um telefone válido');
            return false;
        }

        this.clearError('telefone');
        return true;
    }

    /* ----------- Erros ----------- */

    showError(field, message) {
        const input = document.getElementById(field);
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        formGroup.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    clearError(field) {
        const input = document.getElementById(field);
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        formGroup.classList.remove('error');
        errorElement.classList.remove('show');

        setTimeout(() => errorElement.textContent = '', 200);
    }

    /* ----------- Envio ----------- */

    async handleSubmit(e) {
        e.preventDefault();

        const isValid =
            this.validateNome() &&
            this.validateEmail() &&
            this.validatePassword() &&
            this.validateTelefone();

        if (!isValid) return;

        this.setLoading(true);

        try {
            // Simula API
            await new Promise(resolve => setTimeout(resolve, 1500));

            this.showSuccess();
        } catch (err) {
            this.showError('password', 'Houve um erro. Tente novamente.');
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(loading) {
        this.submitButton.classList.toggle('loading', loading);
        this.submitButton.disabled = loading;
    }

    showSuccess() {
        this.form.style.display = 'none';
        this.successMessage.classList.add('show');

        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MinimalLoginForm();
});