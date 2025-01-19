// Seleção dos elementos do formulário
const form = document.querySelector('form');
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-btn');
const successVideo = document.getElementById('success-video');
const errorVideo = document.getElementById('error-video');



// Função para validar e-mail
async function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isAValidFormat = emailPattern.test(email);
    if (isAValidFormat) {
        const apiKey = "9a2861daae7a46ecb6d36b6cecd79f4c";
        const apiUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;
    
        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Analisa o resultado da API
            if (data.deliverability === "DELIVERABLE") {
                return true;
            } else {
                return false;
            }
        } catch(error) {
            console.error("Erro ao validar o e-mail:", error.message);
            return false;
        }
    } else {
        return false;
    }
}

// Função para validar senha
function isValidPassword(password) {
    return password.length >= 6;
}

// Fechar a modal após 3 segundos
function closeModalOn3Seconds() {
    setTimeout(() => {
        modal.style.display = "none";
    }, 3200)
}

// Adicionar evento de submissão ao formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let valid = true;
    let errorMessage = '';

    // Validação do campo de e-mail (aguardando a API)
    const emailValid = await isValidEmail(emailInput.value);
    if (!emailValid) {
        valid = false;
        errorMessage += 'Por favor, insira um e-mail válido (Ex.: usuario@dominio.com)<br>';
    }

    // Validação do campo de senha
    if (!isValidPassword(passwordInput.value)) {
        valid = false;
        errorMessage += 'A senha deve ter pelo menos 6 caracteres';
    }

    // Mostrar mensagens de erro ou sucesso
    if (!valid) {
        modalMessage.innerHTML = errorMessage;
        modal.style.display = "block";
        successVideo.style.display = "none";
        passwordInput.value = '';
        closeModalOn3Seconds();
    } else {
        modalMessage.innerHTML = "Login com sucesso";
        modal.style.display = "block";
        errorVideo.style.display = "none";
        emailInput.value = '';
        passwordInput.value = '';
        closeModalOn3Seconds();
    }
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