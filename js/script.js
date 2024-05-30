const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Resetar as mensagens de erro
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    successMessage.textContent = '';

    // Validações
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, insira seu nome.';
        isValid = false;
    }

    if (!/^\d+$/.test(phoneInput.value)) {
        phoneError.textContent = 'Por favor, insira um número de telefone válido.';
        isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    if (isValid) {
        // Tratamento dos dados após o envio bem-sucedido
        // Por exemplo, enviar para um servidor ou armazenar em um banco de dados
        console.log('Dados enviados:', {
            nome: nameInput.value,
            telefone: phoneInput.value,
            email: emailInput.value
        });

        successMessage.textContent = 'Formulário enviado com sucesso!';
        form.reset(); // Limpar os campos do formulário
    }
});