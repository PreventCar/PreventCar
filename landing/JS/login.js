// 1. Lógica do olhinho da senha
const togglePasswords = document.querySelectorAll('.toggle-password');

togglePasswords.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';

        input.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});

// 2. Lógica do Botão de Tema (Modo Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');

// Só executa se o botão realmente existir na página
if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector('i');

    // Ajusta o ícone inicial com base no tema atual
    if (document.documentElement.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');

        if (document.documentElement.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}