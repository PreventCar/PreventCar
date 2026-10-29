// Tema, sidebar (offcanvas) e dropdown ficam a cargo de theme.js e do Bootstrap.

/* ---------- Notificações ---------- */
const STORAGE_KEY = 'preventcar:notifications';

const notifBtn = document.getElementById('notifBtn');
const notifList = document.getElementById('notifList');
const notifBadge = document.getElementById('notifBadge');
const notifMarkAll = document.getElementById('notifMarkAll');
const notifClear = document.getElementById('notifClear');

const minutes = n => Date.now() - n * 60 * 1000;

// Notificações iniciais (substitua por dados da sua API quando tiver backend)
function defaultNotifications() {
    return [
        { id: 1, type: 'danger',  icon: 'ph-drop',           title: 'Óleo vencido',        text: 'A troca de óleo do seu veículo está atrasada. Agende o quanto antes.', createdAt: minutes(12),   read: false },
        { id: 2, type: 'danger',  icon: 'ph-warning-circle', title: 'Pneu careca',         text: 'Um dos pneus atingiu o limite de desgaste. Troque por segurança.',     createdAt: minutes(95),   read: false },
        { id: 3, type: 'warning', icon: 'ph-file-text',      title: 'IPVA próximo',        text: 'O vencimento do IPVA está chegando. Fique atento ao prazo.',           createdAt: minutes(60*26), read: false },
        { id: 4, type: 'success', icon: 'ph-calendar-check', title: 'Revisão agendada',    text: 'Revisão de 20.000 km confirmada para 26 abr. 2026.',                  createdAt: minutes(60*50), read: true  },
    ];
}

function loadNotifications() {
    const raw = safeGet(STORAGE_KEY);
    if (!raw) return defaultNotifications();
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : defaultNotifications();
    } catch {
        return defaultNotifications();
    }
}

let notifications = loadNotifications();

function saveNotifications() {
    safeSet(STORAGE_KEY, JSON.stringify(notifications));
}

function timeAgo(timestamp) {
    const diff = Math.max(0, Date.now() - timestamp);
    const min = Math.floor(diff / 60000);
    if (min < 1) return 'agora mesmo';
    if (min < 60) return `há ${min} min`;
    const h = Math.floor(min / 60);
    if (h < 24) return `há ${h} h`;
    const d = Math.floor(h / 24);
    return d === 1 ? 'ontem' : `há ${d} dias`;
}

function renderNotifications() {
    const unread = notifications.filter(n => !n.read).length;

    // Contador
    notifBadge.textContent = unread > 9 ? '9+' : unread;
    notifBadge.hidden = unread === 0;
    notifBtn.setAttribute(
        'aria-label',
        unread ? `Notificações (${unread} não lidas)` : 'Notificações'
    );

    // Botões
    notifMarkAll.disabled = unread === 0;
    notifClear.disabled = notifications.length === 0;

    // Lista (textContent evita injeção de HTML)
    notifList.replaceChildren();

    if (notifications.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'notif-empty';
        empty.innerHTML = '<i class="ph ph-bell-slash"></i><span>Você não tem notificações</span>';
        notifList.appendChild(empty);
        return;
    }

    notifications.forEach(n => {
        const li = document.createElement('li');

        const item = document.createElement('button');
        item.type = 'button';
        item.className = `notif-item ${n.type}${n.read ? '' : ' unread'}`;
        item.dataset.id = n.id;

        const icon = document.createElement('span');
        icon.className = 'notif-icon';
        icon.innerHTML = `<i class="ph ${n.icon}"></i>`;

        const body = document.createElement('span');
        body.className = 'notif-body';

        const title = document.createElement('strong');
        title.textContent = n.title;
        const text = document.createElement('span');
        text.className = 'notif-text';
        text.textContent = n.text;
        const time = document.createElement('small');
        time.textContent = timeAgo(n.createdAt);

        body.append(title, text, time);
        item.append(icon, body);

        if (!n.read) {
            const dot = document.createElement('span');
            dot.className = 'notif-dot';
            dot.setAttribute('aria-label', 'Não lida');
            item.appendChild(dot);
        }

        li.appendChild(item);
        notifList.appendChild(li);
    });
}

// Atualiza os horários relativos sempre que o dropdown abre
notifBtn.addEventListener('show.bs.dropdown', renderNotifications);

// Clique numa notificação: marca como lida
notifList.addEventListener('click', e => {
    const item = e.target.closest('.notif-item');
    if (!item) return;
    const notif = notifications.find(n => String(n.id) === item.dataset.id);
    if (notif && !notif.read) {
        notif.read = true;
        saveNotifications();
        renderNotifications();
    }
});

notifMarkAll.addEventListener('click', () => {
    notifications.forEach(n => { n.read = true; });
    saveNotifications();
    renderNotifications();
});

notifClear.addEventListener('click', () => {
    notifications = [];
    saveNotifications();
    renderNotifications();
});

renderNotifications();

/* ---------- Busca nas manutenções ---------- */
const searchInput = document.getElementById('searchInput');
const maintenanceItems = document.querySelectorAll('.maintenance-item');
const maintenanceEmpty = document.getElementById('maintenanceEmpty');

searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    let visible = 0;
    maintenanceItems.forEach(item => {
        const match = item.textContent.toLowerCase().includes(term);
        item.hidden = !match;
        if (match) visible++;
    });
    maintenanceEmpty.hidden = visible > 0;
});

/* ---------- Gráfico de gastos mensais ---------- */
const monthlySpending = [
    { month: 'Jan', value: 420 },
    { month: 'Fev', value: 780 },
    { month: 'Mar', value: 760 },
    { month: 'Abr', value: 540 },
    { month: 'Mai', value: 770 },
    { month: 'Jun', value: 1010 },
];

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const num = new Intl.NumberFormat('pt-BR');

function renderChart(data) {
    const plot = document.getElementById('chartPlot');
    const labels = document.getElementById('chartLabels');
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const W = 1000, H = 300;

    // Escala: arredonda o máximo para cima, em passos de 200
    const step = 200;
    const max = Math.max(step, Math.ceil(Math.max(...data.map(d => d.value)) / step) * step);
    const ticks = max / step;

    plot.replaceChildren();
    labels.replaceChildren();
    labels.style.gridTemplateColumns = `repeat(${data.length}, 1fr)`;

    // Linhas de grade + valores do eixo Y
    for (let i = 0; i <= ticks; i++) {
        const line = document.createElement('div');
        line.className = 'chart-grid-line';
        line.style.bottom = `${(i / ticks) * 100}%`;
        const label = document.createElement('span');
        label.textContent = num.format(i * step);
        line.appendChild(label);
        plot.appendChild(line);
    }

    // Coordenadas: cada mês fica no centro da sua coluna
    const pts = data.map((d, i) => ({
        x: ((i + 0.5) / data.length) * W,
        y: H - (d.value / max) * H,
    }));

    // Curva suave sem "estourar" os valores (tangentes horizontais)
    let line = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
        const mid = (pts[i - 1].x + pts[i].x) / 2;
        line += ` C ${mid},${pts[i - 1].y} ${mid},${pts[i].y} ${pts[i].x},${pts[i].y}`;
    }
    const area = `${line} L ${pts[pts.length - 1].x},${H} L ${pts[0].x},${H} Z`;

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = `
        <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
            </linearGradient>
        </defs>
        <path class="chart-area" d="${area}"/>
        <path class="chart-line" d="${line}"/>`;
    plot.appendChild(svg);

    // Pontos interativos (hover e foco por teclado mostram o valor)
    data.forEach((d, i) => {
        const point = document.createElement('button');
        point.type = 'button';
        point.className = 'chart-point';
        point.style.left = `${(pts[i].x / W) * 100}%`;
        point.style.top = `${(pts[i].y / H) * 100}%`;
        point.dataset.tooltip = `${d.month}: ${brl.format(d.value)}`;
        point.setAttribute('aria-label', `${d.month}: ${brl.format(d.value)}`);
        plot.appendChild(point);

        const month = document.createElement('span');
        month.textContent = d.month;
        labels.appendChild(month);
    });

    const total = data.reduce((sum, d) => sum + d.value, 0);
    document.getElementById('chartTotal').textContent = `Total no período: ${brl.format(total)}`;
    document.getElementById('yearTotal').textContent = brl.format(total);
}

renderChart(monthlySpending);