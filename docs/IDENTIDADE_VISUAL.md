# Identidade Visual — PreventCar

Este documento define a base visual do PreventCar: paleta de cores, tipografia, espaçamento e padrões de componentes de interface. Como a stack ainda não foi definida, os tokens abaixo são independentes de tecnologia (funcionam como variáveis CSS, tema de qualquer framework, ou apenas como referência de design).

## 1. Personalidade da marca

O público do PreventCar mistura motoristas comuns, motoristas de aplicativo, gestores de frota e mecânicos usando o celular no meio do trabalho (RNF02). A identidade visual parte de três princípios:

- **Confiável** — cores e tipografia sóbrias, associadas a segurança e tecnologia automotiva.
- **Direta** — hierarquia visual clara, pouca decoração, foco em status e prazos (o produto vive de alertas).
- **Acessível no dia a dia** — legível em tela pequena, boa área de toque, contraste alto.

> Ponto de partida assumido; se vocês já têm uma direção de marca diferente (mais "startup"/vibrante, mais "corporativo", etc.), me diga e eu ajusto a paleta e o tom.

## 2. Paleta de cores

### Cor de marca

| Token | Uso | Hex |
|---|---|---|
| `--color-primary` | Ações principais, links, elementos de marca | `#2563EB` |
| `--color-primary-hover` | Hover/active de elementos primários | `#1D4ED8` |
| `--color-primary-light` | Fundos leves, destaques suaves | `#DBEAFE` |
| `--color-accent` | Ações secundárias de destaque (ex.: "Agendar") | `#F97316` |
| `--color-accent-hover` | Hover do accent | `#EA580C` |

### Neutros

| Token | Uso | Hex |
|---|---|---|
| `--color-text` | Texto principal | `#111827` |
| `--color-text-muted` | Texto secundário, legendas | `#6B7280` |
| `--color-border` | Bordas, divisores | `#E5E7EB` |
| `--color-bg` | Fundo da aplicação | `#FFFFFF` |
| `--color-bg-alt` | Fundo alternativo (cards, seções) | `#F3F4F6` |

### Cores semânticas de status (núcleo do produto)

Como o PreventCar gira em torno de alertas de manutenção (RF04, UC12), o status do item/veículo precisa ser reconhecível à distância:

| Status | Significado | Cor | Fundo claro |
|---|---|---|---|
| Em dia | Sem pendências | `#16A34A` | `#DCFCE7` |
| Atenção | Próximo do prazo | `#D97706` | `#FEF3C7` |
| Atrasado | Prazo vencido / crítico | `#DC2626` | `#FEE2E2` |

Essas três cores devem ser usadas de forma consistente em badges, ícones de alerta e cards de veículo/item em todo o sistema — é o principal vocabulário visual do produto.

## 3. Tipografia

- **Família:** Inter (Google Fonts, gratuita, boa legibilidade em telas pequenas). Fallback: `system-ui, -apple-system, sans-serif`.
- Uma única família cobre título e corpo, variando peso — mantém o visual limpo e reduz complexidade de carregamento no mobile.

| Estilo | Tamanho / Altura de linha | Peso | Uso |
|---|---|---|---|
| H1 | 32px / 40px | 700 (Bold) | Título de página/dashboard |
| H2 | 24px / 32px | 600 (Semibold) | Título de seção |
| H3 | 18px / 28px | 600 (Semibold) | Título de card/subseção |
| Body | 16px / 24px | 400 (Regular) | Texto padrão |
| Small | 14px / 20px | 400 (Regular) | Legendas, texto de apoio |
| Micro | 12px / 16px | 500 (Medium) | Badges, labels de status |

## 4. Espaçamento e grid

Escala de espaçamento em base 4px, para manter consistência entre componentes:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64` (px)

- **Raio de borda:** `8px` para cards, botões e inputs; `999px` (pill) para badges de status.
- **Elevação:** sombra leve para cards (`0 1px 3px rgba(0,0,0,0.08)`); sombra mais forte para modais (`0 10px 25px rgba(0,0,0,0.15)`).

## 5. Iconografia

- Estilo **outline/linha** (ex.: bibliotecas como Lucide ou Feather), combinando com a tipografia limpa.
- Tamanho padrão de 20–24px, sempre dentro de uma área de toque de pelo menos 44x44px (RNF02).
- Ícones recorrentes do domínio: carro, chave inglesa/ferramenta, calendário, sino de notificação, escudo (segurança/RNF01).

## 6. Padrões de componentes

### Botões
- **Primário:** fundo `--color-primary`, texto branco, radius 8px — ações principais (confirmar, salvar, agendar).
- **Secundário:** contorno `--color-primary`, fundo transparente — ações alternativas (cancelar, voltar).
- **Destrutivo:** fundo `#DC2626` — ações irreversíveis (inativar veículo/item — RF08, RF09).
- Todos os botões precisam de estado de `hover`, `disabled` (opacidade reduzida) e foco visível (acessibilidade).

### Badge de status
- Formato pill, fundo claro + texto na cor semântica correspondente (Em dia / Atenção / Atrasado).
- Usado em: card de veículo, item de manutenção, lista de histórico (RF06, RF11).

### Card de veículo
- Ícone ou foto do veículo, modelo/apelido, placa, badge de status geral (pior status entre os itens monitorados).

### Card de item/manutenção
- Nome do item, badge de status, data prevista, ação rápida (ver detalhes / agendar).

### Formulários
- Label acima do campo, borda `--color-border`, foco em `--color-primary`.
- Erros de validação em vermelho, mensagem abaixo do campo.

### Navegação
- **Mobile:** barra de abas fixa na parte inferior — Dashboard, Meus Veículos, Agendamentos, Histórico (reflete o sitemap enviado).
- **Desktop:** navbar superior ou sidebar com os mesmos itens.

### Modais e confirmações
- Fundo escurecido (`rgba(0,0,0,0.5)`), modal centralizado, ações "Confirmar" / "Cancelar" — cobre o fluxo de UC13 (alertas de confirmação).

### Notificações/alertas (RF04, UC12)
- Toast ou banner usando a cor semântica de status conforme a urgência do alerta.

## 7. Acessibilidade

- Contraste mínimo AA (4.5:1 para texto normal) em todas as combinações de cor/fundo acima.
- Área de toque mínima de 44x44px em botões e itens de lista, priorizando o uso no celular por motoristas e mecânicos.
- Foco visível em todos os elementos interativos (navegação por teclado).
- Ícones de status sempre acompanhados de texto/label, nunca só cor (para daltonismo).


