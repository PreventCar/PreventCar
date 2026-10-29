// Tema, sidebar (offcanvas), modal e toast ficam a cargo de theme.js e do Bootstrap.

/* ---------- Toast ---------- */
function showToast(message) {
    let toast = document.getElementById('appToast');
    if (!toast) {
        const container = document.createElement('div');
        container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        container.innerHTML = `
            <div id="appToast" class="toast app-toast border-0" role="status" aria-live="polite" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body"></div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
                </div>
            </div>`;
        document.body.appendChild(container);
        toast = document.getElementById('appToast');
    }
    toast.querySelector('.toast-body').textContent = message;
    bootstrap.Toast.getOrCreateInstance(toast, { delay: 2800 }).show();
}

// Botões simples que só dão um retorno visual
document.querySelectorAll('[data-toast]').forEach(button => {
    button.addEventListener('click', () => showToast(button.dataset.toast));
});

/* ---------- Filtros (busca + selects) ---------- */
// A barra declara quais itens filtrar; cada <select data-filter-attr="x">
// compara o seu valor com o data-x do item (valor vazio = todos).
function setupFilterBar(bar) {
    const selector = bar.dataset.filterGroup;
    const search = bar.querySelector('input[type="search"]');
    const selects = bar.querySelectorAll('select[data-filter-attr]');
    const empty = document.getElementById(bar.dataset.emptyTarget);

    function apply() {
        const term = search ? search.value.trim().toLowerCase() : '';
        let visible = 0;
        document.querySelectorAll(selector).forEach(item => {
            const matchText = item.textContent.toLowerCase().includes(term);
            const matchSelects = [...selects].every(s => !s.value || item.dataset[s.dataset.filterAttr] === s.value);
            item.hidden = !(matchText && matchSelects);
            if (!item.hidden) visible++;
        });
        if (empty) empty.hidden = visible > 0;
    }

    if (search) search.addEventListener('input', apply);
    selects.forEach(select => select.addEventListener('change', apply));
}

document.querySelectorAll('[data-filter-group]').forEach(setupFilterBar);

/* ---------- Veículos: modal "Adicionar veículo" ---------- */
const vehicleForm = document.getElementById('vehicleForm');

function createVehicleCard({ name, year, plate, km }) {
    const col = document.createElement('div');
    col.className = 'col vehicle-item';
    col.dataset.type = 'Carro';
    col.dataset.status = 'Em dia';
    col.innerHTML = `
        <article class="vehicle-card">
            <div class="vehicle-image vehicle-image-placeholder"><i class="ph ph-car-profile" aria-hidden="true"></i></div>
            <div class="vehicle-body">
                <div class="vehicle-title"><h2></h2><span class="badge rounded-pill status-badge status-ok">Em dia</span></div>
                <span class="vehicle-model"></span>
                <span class="vehicle-km"></span>
            </div>
            <div class="vehicle-footer">
                <span><i class="ph ph-calendar-blank" aria-hidden="true"></i>Próximo serviço</span>
                <span><i class="ph ph-clock-counter-clockwise" aria-hidden="true"></i>Último serviço</span>
            </div>
        </article>`;
    // textContent evita injeção de HTML com o que o usuário digitou
    col.querySelector('h2').textContent = name;
    col.querySelector('.vehicle-model').textContent = plate ? `${year} · ${plate.toUpperCase()}` : year;
    col.querySelector('.vehicle-km').textContent = `${new Intl.NumberFormat('pt-BR').format(km || 0)} km`;
    return col;
}

if (vehicleForm) {
    const modalEl = document.getElementById('vehicleModal');

    vehicleForm.addEventListener('submit', event => {
        event.preventDefault();
        if (!vehicleForm.checkValidity()) {
            vehicleForm.classList.add('was-validated');
            return;
        }
        const data = new FormData(vehicleForm);
        const card = createVehicleCard({
            name: data.get('name').trim(),
            year: data.get('year'),
            plate: data.get('plate').trim(),
            km: Number(data.get('km')),
        });
        document.getElementById('addVehicleCol').before(card);
        bootstrap.Modal.getOrCreateInstance(modalEl).hide();
        showToast('Veículo adicionado com sucesso.');
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
        vehicleForm.reset();
        vehicleForm.classList.remove('was-validated');
    });
}

/* ---------- Agendamentos: calendário, horários e resumo ---------- */
const calendarGrid = document.getElementById('calendarGrid');

if (calendarGrid) {
    const monthLabel = document.getElementById('calendarMonth');
    const summary = {
        service: document.getElementById('summaryService'),
        date: document.getElementById('summaryDate'),
        time: document.getElementById('summaryTime'),
        shop: document.getElementById('summaryShop'),
        cost: document.getElementById('summaryCost'),
    };
    const serviceSelect = document.getElementById('service');
    const shopSelect = document.getElementById('shop');
    const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const monthFormat = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' });
    const dateFormat = new Intl.DateTimeFormat('pt-BR');
    const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    let selectedDate = new Date(2026, 4, 13);
    let viewYear = selectedDate.getFullYear();
    let viewMonth = selectedDate.getMonth();

    function sameDay(a, b) {
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    function renderCalendar() {
        const month = monthFormat.format(new Date(viewYear, viewMonth, 1));
        monthLabel.textContent = month.charAt(0).toUpperCase() + month.slice(1);
        calendarGrid.replaceChildren();

        WEEKDAYS.forEach(name => {
            const cell = document.createElement('span');
            cell.className = 'weekday';
            cell.textContent = name;
            calendarGrid.appendChild(cell);
        });

        const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
        for (let i = 0; i < firstWeekday; i++) calendarGrid.appendChild(document.createElement('span'));

        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(viewYear, viewMonth, d);
            const day = document.createElement('button');
            day.type = 'button';
            day.className = 'day';
            day.textContent = d;
            day.setAttribute('aria-label', dateFormat.format(date));
            if (sameDay(date, selectedDate)) {
                day.classList.add('selected');
                day.setAttribute('aria-pressed', 'true');
            }
            day.addEventListener('click', () => {
                selectedDate = date;
                renderCalendar();
                updateSummary();
            });
            calendarGrid.appendChild(day);
        }
    }

    function changeMonth(delta) {
        const next = new Date(viewYear, viewMonth + delta, 1);
        viewYear = next.getFullYear();
        viewMonth = next.getMonth();
        renderCalendar();
    }

    document.getElementById('calendarPrev').addEventListener('click', () => changeMonth(-1));
    document.getElementById('calendarNext').addEventListener('click', () => changeMonth(1));

    const timeButtons = document.querySelectorAll('.time-grid button');
    timeButtons.forEach(time => time.addEventListener('click', () => {
        timeButtons.forEach(item => {
            item.classList.remove('selected');
            item.setAttribute('aria-pressed', 'false');
        });
        time.classList.add('selected');
        time.setAttribute('aria-pressed', 'true');
        updateSummary();
    }));

    function updateSummary() {
        const service = serviceSelect.selectedOptions[0];
        const time = document.querySelector('.time-grid .selected');
        summary.service.textContent = service.value;
        summary.date.textContent = dateFormat.format(selectedDate);
        summary.time.textContent = time ? time.textContent : '—';
        summary.shop.textContent = shopSelect.value;
        summary.cost.textContent = brl.format(Number(service.dataset.price));
    }

    serviceSelect.addEventListener('change', updateSummary);
    shopSelect.addEventListener('change', updateSummary);

    // Rótulo da área de anexos mostra quantas fotos foram escolhidas
    const photos = document.getElementById('photos');
    const photosLabel = document.getElementById('photosLabel');
    photos.addEventListener('change', () => {
        const count = photos.files.length;
        photosLabel.textContent = count ? `${count} foto${count > 1 ? 's' : ''} selecionada${count > 1 ? 's' : ''}` : 'Anexar fotos';
    });

    document.getElementById('confirmBooking').addEventListener('click', () => {
        showToast(`Agendamento confirmado para ${summary.date.textContent} às ${summary.time.textContent}.`);
    });

    renderCalendar();
    updateSummary();
}
