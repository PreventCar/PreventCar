/* ---------- Menu de perfil (topbar + sidebar) ---------- */
// shortcut: usuário fixo de demonstração; trocar pelos dados da API quando houver backend.
const PROFILE = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    plan: 'Plano Pro',
    avatar: 'images/foto-do-perfil.png',
};

document.querySelectorAll('[data-profile-menu]').forEach(menu => {
    menu.innerHTML = `
        <div class="profile-menu-header">
            <img class="user-avatar" alt="">
            <div class="user-info">
                <span class="user-name"></span>
                <span class="user-email"></span>
            </div>
        </div>
        <span class="badge rounded-pill status-badge profile-plan"></span>
        <hr class="dropdown-divider">
        <a class="dropdown-item profile-logout" href="login.html">
            <i class="ph ph-sign-out" aria-hidden="true"></i> Sair
        </a>`;
    menu.querySelector('img').src = PROFILE.avatar;
    menu.querySelector('.user-name').textContent = PROFILE.name;
    menu.querySelector('.user-email').textContent = PROFILE.email;
    menu.querySelector('.profile-plan').textContent = PROFILE.plan;
});
