// Seleção dos elementos do formulário
const form = document.querySelector('form');
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Função para validar e-mail
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Função para validar senha
function isValidPassword(password) {
    return password.length >= 6;
}