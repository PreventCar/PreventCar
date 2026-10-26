const html = document.documentElement;
const safeGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
const safeSet = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
const savedTheme = safeGet('preventcar:theme');
html.classList.toggle('light-mode', savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches));
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) themeToggle.addEventListener('click', () => {
    const light = !html.classList.contains('light-mode');
    html.classList.toggle('light-mode', light);
    safeSet('preventcar:theme', light ? 'light' : 'dark');
});
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const menu = document.getElementById('mobileMenuBtn');
if (menu) menu.addEventListener('click', () => { sidebar.classList.toggle('active'); overlay.classList.toggle('active'); });
if (overlay) overlay.addEventListener('click', () => { sidebar.classList.remove('active'); overlay.classList.remove('active'); });

document.querySelectorAll('[data-filter-target]').forEach(input => input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    document.querySelectorAll(input.dataset.filterTarget).forEach(item => { item.hidden = !item.textContent.toLowerCase().includes(query); });
}));
document.querySelectorAll('.toggle').forEach(toggle => toggle.addEventListener('click', () => {
    toggle.classList.toggle('on');
    toggle.setAttribute('aria-pressed', toggle.classList.contains('on'));
}));
document.querySelectorAll('.calendar-grid .day').forEach(day => day.addEventListener('click', () => {
    document.querySelectorAll('.calendar-grid .selected').forEach(item => item.classList.remove('selected'));
    day.classList.add('selected');
}));
document.querySelectorAll('.time-grid button').forEach(time => time.addEventListener('click', () => {
    document.querySelectorAll('.time-grid .selected').forEach(item => item.classList.remove('selected'));
    time.classList.add('selected');
}));

function showToast(message) {
    const current = document.querySelector('.toast');
    if (current) current.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2800);
}

function closeFakeModal() {
    const modal = document.querySelector('.modal-backdrop');
    if (modal) modal.remove();
}

function showVehicleModal() {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
        <form class="modal" aria-label="Adicionar veículo">
            <div class="modal-header">
                <h2>Adicionar veículo</h2>
                <button class="modal-close" type="button" aria-label="Fechar">&times;</button>
            </div>
            <div class="field"><label for="vehicle-brand">Marca e modelo</label><input id="vehicle-brand" required placeholder="Ex.: Peugeot 206"></div>
            <div class="field"><label for="vehicle-year">Ano</label><input id="vehicle-year" type="number" min="1900" max="2100" required placeholder="2020"></div>
            <div class="modal-actions"><button class="outline-action" type="button" data-close-modal>Cancelar</button><button class="primary-action" type="submit">Adicionar</button></div>
        </form>`;
    document.body.appendChild(backdrop);
    backdrop.querySelector('.modal-close').addEventListener('click', closeFakeModal);
    backdrop.querySelector('[data-close-modal]').addEventListener('click', closeFakeModal);
    backdrop.addEventListener('click', event => { if (event.target === backdrop) closeFakeModal(); });
    backdrop.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        closeFakeModal();
        showToast('Veículo adicionado com sucesso.');
    });
}

document.querySelectorAll('[data-action="add-vehicle"]').forEach(button => {
    button.addEventListener('click', showVehicleModal);
});
