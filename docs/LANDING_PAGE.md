# Landing Page — Documentação de Implementação

Documento técnico que descreve como a landing page do **PreventCar** foi codificada: estrutura de arquivos, decisões de stack, aplicação da identidade visual e correspondência com o wireframe oficial.

---

## 1. Visão geral

A landing page é uma página **estática**, sem dependência de build, servidor ou framework front-end. Ela roda direto no navegador e serve como vitrine pública do produto, seguindo o sitemap do projeto (áreas públicas: Landing, Recursos, Benefícios e Preços).

| Item | Decisão |
|---|---|
| Stack | HTML5 + CSS3 + JavaScript puro |
| Framework CSS | Bootstrap 5.3.3 (via CDN) |
| Tipografia | Inter (Google Fonts), fallback `system-ui` |
| Ícones | SVGs inline em estilo outline (padrão Lucide/Feather) |
| Estrutura | 1 HTML + 1 CSS + 1 JS |

## 2. Estrutura de arquivos

```
landing/
├── index.html               # Página única com todas as seções
└── assets/
    ├── css/
    │   └── style.css        # Tokens de identidade + estilos de componente
    └── js/
        └── main.js          # Menu mobile, animação de reveal, ano no rodapé
```

O carregamento, na ordem, é: fontes (Inter) → Bootstrap CSS → `style.css` (que sobrescreve o Bootstrap) → Bootstrap JS → `main.js`.

## 3. Decisões de stack

- **Bootstrap 5.3 via CDN**: o layout em grid (`row`/`col`), o menu responsivo (`navbar` + `collapse`) e o scrollspy vêm prontos, economizando código mantido manualmente. Sem custo de build.
- **CSS custom properties**: a identidade visual é toda definida em variáveis CSS em `:root`, ou seja, mudar a paleta inteira é trocar valores em um único lugar.
- **SVG inline**: os ícones (sino, cartão, histórico, calendário, check) são SVGs inline — sem libs externas, peso leve e cor controlada por `currentColor`.
- **Sem framework JS**: toda a interação é nativa (`classList`, `IntersectionObserver`, API de `Collapse` do Bootstrap).

## 4. Aplicação da identidade visual

Origem: `docs/IDENTIDADE_VISUAL.md`. Os tokens foram transcritos para CSS custom properties.

### 4.1 Paleta de cores

`style.css`, no bloco `:root`:

| Token do documento | Variável CSS | Valor |
|---|---|---|
| `--color-primary` | `--color-primary` | `#2563EB` |
| `--color-primary-hover` | `--color-primary-hover` | `#1D4ED8` |
| `--color-primary-light` | `--color-primary-light` | `#DBEAFE` |
| `--color-accent` | `--color-accent` | `#F97316` |
| Neutros | `--color-text`, `--color-text-muted`, `--color-border`, `--color-bg`, `--color-bg-alt` | cinzas do doc |
| Status | `--color-success`, `--color-warning`, `--color-danger` (e variantes de fundo) | verdes/âmbar/vermelho |

> **Ajuste de acessibilidade:** nos badges de status, os textos usam tons um passo mais escuros que os hex do documento (ex.: verde `#15803D` em vez de `#16A34A`) para garantir contraste AA (exigência da seção 7 da identidade visual) sobre os fundos claros.

### 4.2 Sobrescrita do Bootstrap

Como o Bootstrap 5.3 compila as cores dos componentes em valores fixos, o `style.css` redefine as variáveis de botão após o carregamento:

```css
--bs-primary: var(--color-primary);          /* mapeamento global */
.btn-primary {
  --bs-btn-bg: var(--color-primary);
  --bs-btn-hover-bg: var(--color-primary-hover);
  ...
}
```

Isso garante que `btn-primary`, `btn-outline-primary` e links sigam a paleta do PreventCar sem precisar recompilar o Bootstrap via SCSS.

### 4.3 Tipografia, espaçamento e raio

- `--bs-body-font-family` aponta para **Inter** com fallback `system-ui`.
- Escala do documento (H1 32/40 700, H2 24/32 600, H3 18/28 600, body 16/24, micro 12/16) traduzida nas classes `.section-title`, `.h3-title`, `.lead`, `.status-pill`.
- Raio de 8px em cards e botões via `--bs-border-radius`; badges em pill (`999px`).
- Escala de espaçamento em base 4px usando utilitários do Bootstrap (`mt-3`, `gap-3`, etc.).
- Elevação: sombra leve em cards (`0 1px 3px`), forte no painel de dashboard e no card escuro.

### 4.4 Vocabulário de status

O componente `.status-pill` (pill + ponto) reproduz o núcleo visual do produto:

```css
.status-pill--success { background: #DCFCE7; color: #15803D; }
.status-pill--warning { background: #FEF3C7; color: #B45309; }
.status-pill--danger  { background: #FEE2E2; color: #B91C1C; }
```

Sempre acompanhado de **texto** além da cor (Em dia / Atenção / Atrasado), respeitando a regra de daltonismo do documento.

## 5. Correspondência com o wireframe

| # | Bloco do wireframe | Implementação |
|---|---|---|
| 1 | Header | `navbar` fixa; menu central com Recursos, Benefícios e Preços; botão ghost "Entrar" (`btn-ghost`) + primário "Começar Grátis" |
| 2 | Hero (2 colunas) | Esquerda: badge "Novo: Relatórios Inteligentes 📊", título, parágrafo, botões "Criar conta gratuita" e "Ver Demo". Direita: mockup `.dash-panel` (dashboard: topbar de navegador, KPIs, gráfico de custos, status da frota) |
| 3 | Recursos (4 colunas) | `col-md-6 col-lg-3` → 4 cards, um por coluna: Alertas de Manutenção, Controle Financeiro, Histórico Digital, Agendamento Digital |
| 4 | Benefícios (destaque) | Cartão escuro `.benefit-panel` centralizado, título "Visualize o futuro da sua gestão automotiva", lista com checkmarks à esquerda e mockup dark mode `.app-mock` à direita |
| 5 | Preços (3 cards) | Free vs Pro (destaque, tag "Mais Popular") vs Empresarial; botões "Começar Grátis", "Testar Grátis" e "Consultar" |
| 6 | Footer | Logo + "Cuidando do seu carro, cuidando de você."; colunas Produto e Suporte; barra "© 2026 PreventCar Software" |

## 6. Componentes principais

### 6.1 Mockup do dashboard (hero)

O `.dash-panel` substituiu o antigo card de celular. Composto por:

- **Topbar** estilo navegador (pontos de janela + `app.preventcar.com.br`).
- **KPIs** em grid 4 colunas (Veículos, Em dia, Alertas, Gasto no mês) — usa a cor de status "Sincronizado".
- **Gráfico de custos** em barras 100% CSS (`flex` + `height` inline), com barra do mês atual destacada na cor primária.
- **Status da frota**: linhas com veículo, placa e pills de status, evocando a frota "Porsche" do wireframe.

### 6.2 Card escuro de benefícios

`.benefit-panel` usa gradiente `#0B1220 → #111827`, com overhead radial azul. Internamente, `.app-mock` simula o app em modo escuro: cabeçalho "PreventCar", toggle de modo escuro, lista de veículos com pills de status adaptadas ao fundo escuro (variantes com `rgba()`) e mini gráfico em barras.

### 6.3 Botões

Seguindo a seção 6 da identidade: primário (fundo azul), secundário/outline (contorno azul), ghost (sem fundo/borda para "Entrar") e destaque via `.badge-ribbon` em accent (`#F97316`) na tag "Mais Popular".

## 7. JavaScript (`main.js`)

1. **Menu mobile**: fecha o `collapse` do Bootstrap ao clicar em qualquer link.
2. **Animação de reveal**: `IntersectionObserver` adiciona `.is-visible` aos elementos `.reveal` quando entram na tela. Como o efeito só é aplicado sob `html.js`, páginas sem JS exibem tudo normalmente (progressive enhancement).
3. **Ano do rodapé**: preenchido dinamicamente por `new Date().getFullYear()`.
4. A navegação ativa por scroll usa o **scrollspy nativo do Bootstrap** via atributos `data-bs-spy`, `data-bs-target` e `data-bs-offset`.

Respeito a `prefers-reduced-motion`: com redução de movimento ativada, o CSS desliga `scroll-behavior: smooth`, as transições de reveal e os hovers de elevação.

## 8. Responsividade e acessibilidade

- **Breakpoints**: hero colapsa para 1 coluna abaixo de `lg`; pilotos de dashboard em 2 colunas apenas em `sm+`; card escuro vira coluna única abaixo de `lg`; grid de recursos 4 → 2 → 1 colunas.
- **Contraste AA** em textos e badges (ver 4.1).
- **Foco visível**: `:focus-visible` com outline da cor primária em todos os interativos.
- **Semântica**: `<nav aria-label>`, `<header>`, `<section id>`, `<footer>`, `role="img"` + `aria-label` nos mockups, ícones decorativos com `aria-hidden="true"`.
- **Área de toque**: botões `btn-lg` no hero (≥ 48px) e items de lista confortáveis ao toque.

## 9. Como executar

É um site estático. Duas opções:

1. **Direto**: abrir `landing/index.html` no navegador.
2. **Servidor local** (recomendado para testar scrollspy e âncoras com consistência):

```powershell
# a partir da raiz do projeto
python -m http.server 8000 --directory landing
# acessar http://localhost:8000
```

## 10. Observações e próximos passos

- Os links "Entrar", "Ver Demo", "Testar Grátis", "Consultar", "Ajuda", "Contato", "Oficinas" e "Mobile App" são **placeholders** (`href="#"`), pois o painel e as demais telas da aplicação ainda não foram implementados (fase de requisitos/modelagem).
- Botões de planos apontam para a ancoragem da própria seção de preços.
- Para evoluir: substituir os CTAs por telas reais de **Cadastro**, **Login** e **Recuperação de senha** conforme `SITEMAP_FLUXOS.md`, e tornar os mockups interativos com dados reais da dashboard.