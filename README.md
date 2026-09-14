![PreventCar](docs/assets/logo.jpg)

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

Paleta em tons de azul (`#2563EB`) com accent laranja (`#F97316`), tipografia Inter e espaçamento em base 4px. Detalhes completos de cores, status e componentes em [IDENTIDADE_VISUAL.md](docs/IDENTIDADE_VISUAL.md).

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
