// Seleção dos elementos do formulário
const form = document.querySelector('form');
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-btn');

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

    // Impedir o envio do formulário se houver erros e mostrar uma mensagem de erro
    if (!valid) {
        event.preventDefault();
        setTimeout(() => {
            modalMessage.textContent = errorMessage;
            modal.style.display = "block";
        }, 100);
        setTimeout(() => {
            passwordInput.value = '';
        }, 200);
    
    // Se não houver erros, mostrar a modal com mensagem de sucesso
    } else {
        event.preventDefault();
        setTimeout(() => {
            modalMessage.textContent = "Login com sucesso";
            modal.style.display = "block";
        }, 100);
        setTimeout(() => {
            emailInput.value = ''
            passwordInput.value = '';
        }, 200);
    }

    // Fechar a modal após 3 segundos que a mensagem seja exibida
    setTimeout(() => {
        modal.style.display = "none";
    }, 3200)
});

// Fechar a modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fechar a modal se clicar fora dela
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})