// Revela as seções ao rolar a página (uma única vez por elemento)
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Fecha o menu mobile ao escolher uma seção
const mainNav = document.getElementById('mainNav');

mainNav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        const collapse = bootstrap.Collapse.getInstance(mainNav);
        if (collapse) collapse.hide();
    });
});
