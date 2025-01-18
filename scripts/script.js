// Seleção dos elementos do formulário
const form = document.querySelector('form');
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const colseModal = document.getElementById('close-btn');

// Função para validar e-mail
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Função para validar senha
function isValidPassword(password) {
    return password.length >= 6;
}

// Adicionar evento de submissão ao formulário
form.addEventListener('submit', (event) => {
    let valid = true;
    let errorMessage = '';

    // Validação do campo de e-mail
    if (!isValidEmail(emailInput.value)) {
        valid = false;
        errorMessage += 'Por favor, insira um e-mail válido (Ex.: usuario@dominio.com)\n';
    }

    // Validação do campo de senha
    if (!isValidPassword(passwordInput.value)) {
        valid = false;
        errorMessage += 'A senha deve ter pelo menos 6 caracteres\n';
    }

    // Impedir o envio do formulário se houver erros
    if (!valid) {
        event.preventDefault();
        passwordInput.value = '';
        setTimeout(() => {
            alert(errorMessage);
        }, 10);
    }
});