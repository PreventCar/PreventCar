// --- MENU MOBILE ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar-links');
const navActions = document.getElementById('navbar-actions');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navActions.classList.toggle('active');
    });
}

// --- ANIMAÇÃO DE ROLAGEM (Intersection Observer) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.15 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- MODO ESCURO / CLARO ---
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector('i');

    // Verifica se já carregou no modo claro e ajusta o ícone
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