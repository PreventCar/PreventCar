/* ---------- Utilidades de armazenamento (compartilhadas) ---------- */
function safeGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
}
function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage indisponível */ }
}

/* ---------- Tema (Dark / Light) ---------- */
// O <head> de cada página já aplica o tema salvo antes da pintura;
// aqui só sincronizamos os botões e tratamos o clique.
const THEME_KEY = 'preventcar:theme';

function currentTheme() {
    return document.documentElement.getAttribute('data-bs-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
        btn.setAttribute('aria-pressed', theme === 'light');
    });
}

applyTheme(currentTheme());

document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
        const next = currentTheme() === 'light' ? 'dark' : 'light';
        applyTheme(next);
        safeSet(THEME_KEY, next);
    });
});
