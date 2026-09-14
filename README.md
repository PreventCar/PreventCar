# PreventCar

Sistema de gerenciamento de manutenção preventiva para veículos automotores.

> Trabalho de Graduação (TG) — Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas, Faculdade de Tecnologia de Ferraz de Vasconcelos (FATEC), 2026.

## Sobre o projeto

Motoristas particulares, motoristas de aplicativo, empresas de locação de veículos e oficinas mecânicas hoje controlam a manutenção de seus veículos de forma dispersa — planilhas, anotações em papel ou memória. Essa falta de controle estruturado gera gastos inesperados, indisponibilidade do veículo por falhas evitáveis e, em casos mais graves, riscos à segurança no trânsito.

O PreventCar centraliza esse controle: cadastro de veículos e itens/peças, monitoramento do tempo de uso, e emissão de alertas automáticos antes, durante e após o prazo de revisões essenciais (troca de óleo, pastilhas de freio, pneus, entre outras).

## Objetivos

- Auxiliar motoristas e gestores de frota a gerenciar a manutenção preventiva de seus veículos.
- Centralizar cadastro de veículos e histórico de manutenções e problemas.
- Emitir alertas automáticos de revisões essenciais.
- Contribuir para a segurança viária, reduzindo acidentes por negligência técnica.
- Monitorar o tempo de uso de itens/peças para prever necessidade de substituição.
- Permitir inativação de veículos e itens sem perda do histórico.
- Sugerir oficinas parceiras no momento da emissão de um alerta.
- Oferecer interface adaptada ao uso em celulares.
- Disponibilizar diferentes níveis de plano (Free, Premium e Frota).

## Modelo de negócio

Modelo híbrido: assinatura recorrente (planos Free, Premium e Frota) combinada com comissão (8% a 12%, sujeita a validação comercial) sobre agendamentos concluídos em oficinas parceiras. Detalhes em [REQUISITOS.md](docs/REQUISITOS.md#regras-de-negócio).

## Stakeholders

- **Motoristas particulares** — centralizar histórico do veículo e evitar quebras inesperadas.
- **Motoristas de aplicativo** — reduzir tempo de carro parado em oficina.
- **Empresas de locação de veículos** — gerenciar frotas e cronogramas por modelo.
- **Seguradoras** — dados agregados de durabilidade para análise de risco.
- **Oficinas mecânicas parceiras** — recebimento de ordens de serviço e atualização do histórico.

## Concorrentes analisados

Drivvo, Fuelio e AUTOsist — nenhum deles prioriza manutenção preventiva automatizada e preditiva com foco no mercado brasileiro, o que define o principal diferencial do PreventCar.

## Identidade visual

Base visual do produto (detalhes em [IDENTIDADE_VISUAL.md](docs/IDENTIDADE_VISUAL.md)):

### Paleta de cores

| Token | Uso | Hex |
|---|---|---|
| `--color-primary` | Ações principais, links | `#2563EB` |
| `--color-primary-hover` | Hover/active primário | `#1D4ED8` |
| `--color-primary-light` | Fundos leves e destaques | `#DBEAFE` |
| `--color-accent` | Ações de destaque (ex.: "Agendar") | `#F97316` |
| `--color-accent-hover` | Hover do accent | `#EA580C` |
| `--color-text` | Texto principal | `#111827` |
| `--color-text-muted` | Texto secundário | `#6B7280` |
| `--color-border` | Bordas e divisores | `#E5E7EB` |
| `--color-bg` | Fundo da aplicação | `#FFFFFF` |
| `--color-bg-alt` | Fundo alternativo | `#F3F4F6` |

Cores semânticas de status (núcleo do produto — alertas de manutenção):

| Status | Significado | Cor | Fundo claro |
|---|---|---|---|
| Em dia | Sem pendências | `#16A34A` | `#DCFCE7` |
| Atenção | Próximo do prazo | `#D97706` | `#FEF3C7` |
| Atrasado | Prazo vencido | `#DC2626` | `#FEE2E2` |

### Tipografia

Família **Inter** (Google Fonts), fallback `system-ui, -apple-system, sans-serif`. Uma única família cobre título e corpo, variando o peso.

| Estilo | Tamanho / Altura | Peso | Uso |
|---|---|---|---|
| H1 | 32px / 40px | 700 | Título de página/dashboard |
| H2 | 24px / 32px | 600 | Título de seção |
| H3 | 18px / 28px | 600 | Título de card/subseção |
| Body | 16px / 24px | 400 | Texto padrão |
| Small | 14px / 20px | 400 | Legendas |
| Micro | 12px / 16px | 500 | Badges, labels de status |

### Espaçamento e componentes

- Escala de espaçamento em base 4px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64`.
- Raio `8px` para cards, botões e inputs; `999px` (pill) para badges de status.
- Elevação leve em cards (`0 1px 3px rgba(0,0,0,0.08)`) e forte em modais (`0 10px 25px rgba(0,0,0,0.15)`).
- Ícones em estilo outline (Lucide/Feather), 20–24px, com área de toque mínima de 44x44px.
- Acessibilidade: contraste AA (4.5:1), foco visível e status sempre com texto/label, nunca só cor.

## Status atual

Projeto em fase de **engenharia de requisitos e modelagem** (casos de uso, modelo de domínio, modelo ER). Estrutura de pastas, arquitetura e stack de tecnologias **ainda não foram definidas** — este README e a organização do repositório serão atualizados assim que essas decisões forem tomadas.

## Documentação

- [SITEMAP_FLUXOS.md](docs/SITEMAP_FLUXOS.md) — mapa do site (sitemap) e principais fluxos de navegação.
- [CASOS_DE_USO.md](docs/CASOS_DE_USO.md) — atores e especificação dos casos de uso.
- [REQUISITOS.md](docs/REQUISITOS.md) — requisitos funcionais, não funcionais e regras de negócio.
- [IDENTIDADE_VISUAL.md](docs/IDENTIDADE_VISUAL.md) — paleta de cores, tipografia e padrões de componentes.

## Equipe

| Nome | Papel |
|---|---|
| Fabrício Silva de Campos | Gerente de Projetos |
| Daniel da Silva Santos | Desenvolvedor do Projeto |
| Ana Luisa Silva Bezerra da Costa | Analista de Requisitos e Qualidade |
| Marcia Aparecida Silva Bissaco | Orientadora |
| Carla Fabiane Calixto da Silva Soares | Orientadora |
| Francisco Douglas Lima Abreu | Orientador |
