// 1. Mostrar / ocultar senha
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('input');
        const show = input.type === 'password';
        const icon = button.querySelector('i');

        input.type = show ? 'text' : 'password';
        icon.classList.toggle('fa-eye', !show);
        icon.classList.toggle('fa-eye-slash', show);
        button.setAttribute('aria-label', show ? 'Ocultar senha' : 'Mostrar senha');
        button.setAttribute('aria-pressed', show);
    });
});

// 2. Confirmação de senha (só existe no cadastro)
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

function checkPasswordMatch() {
    if (!confirmInput) return;
    const mismatch = confirmInput.value && confirmInput.value !== passwordInput.value;
    confirmInput.setCustomValidity(mismatch ? 'As senhas não coincidem.' : '');
}

if (confirmInput) {
    passwordInput.addEventListener('input', checkPasswordMatch);
    confirmInput.addEventListener('input', checkPasswordMatch);
}

// 3. Validação do Bootstrap; sem backend, um envio válido segue para o dashboard
document.querySelectorAll('form.needs-validation').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        checkPasswordMatch();

        if (form.checkValidity()) {
            window.location.href = form.dataset.redirect || 'dashboard.html';
            return;
        }
        form.classList.add('was-validated');
    });
});
