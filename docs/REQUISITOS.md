# Requisitos — PreventCar

Este documento consolida a Engenharia de Requisitos do projeto: requisitos funcionais, requisitos não funcionais e regras de negócio, levantados por meio de entrevistas semiestruturadas e sessões de brainstorming com os stakeholders.

> **Revisão SP1:** este documento incorpora a devolutiva do professor de PI — padronização de nomenclatura (RF08/RF09), RF05 mais concreto, RNFs mensuráveis (RNF01/RNF02) e novos RFs para cobrir as regras de negócio que ainda não tinham requisito funcional correspondente.

## Requisitos Funcionais

| Código | Nome | Descrição |
|---|---|---|
| RF01 | Cadastro de usuário | O sistema deve permitir o cadastro de usuários. |
| RF02 | Cadastro de itens | O sistema deve permitir o cadastro de itens. |
| RF03 | Informar tempo de uso do item | O sistema deve permitir que o usuário informe o tempo de uso de um item. |
| RF04 | Alertas | O sistema deve permitir que alertas automáticos sejam enviados antes, durante e após o prazo. |
| RF05 | Referência de durabilidade de peças | O sistema deve manter uma referência de durabilidade das peças/itens, em quilometragem e/ou tempo, associada ao veículo e ao item cadastrado, para apoiar os alertas de manutenção (RF03, RF04). A origem exata dessa referência será definida em etapa posterior do projeto. |
| RF06 | Históricos de manutenções | O sistema deve permitir que o usuário visualize os históricos de manutenções. |
| RF07 | Cadastro de veículos | O sistema deve permitir o cadastro de veículos. |
| RF08 | Inativar veículos | O sistema deve permitir que o usuário inative veículos, mantendo o histórico associado (sem exclusão definitiva). |
| RF09 | Inativar itens | O sistema deve permitir que o usuário inative itens, mantendo o histórico associado (sem exclusão definitiva). |
| RF10 | Cadastro de procedimentos | O sistema deve permitir que o usuário cadastre procedimentos pendentes. |
| RF11 | Históricos de problemas | O sistema deve permitir que o usuário visualize os históricos de problemas com o veículo. |
| RF12 | Contratação de plano | O sistema deve permitir que o usuário escolha e contrate um dos planos (Free, Premium ou Frota — RN01). |
| RF13 | Gerenciamento de assinatura | O sistema deve permitir que o usuário faça upgrade, downgrade ou cancelamento do plano contratado, e consulte o status da assinatura (RN02). |
| RF14 | Cadastro de oficina parceira | O sistema deve permitir que o administrador cadastre e edite dados de oficinas parceiras (RN05). |
| RF15 | Gestão de parceiros | O sistema deve permitir que o administrador aprove, avalie ou desative oficinas parceiras cadastradas (RN05). |
| RF16 | Agendamento em oficina parceira | O sistema deve permitir que o usuário agende um serviço de manutenção em uma oficina parceira sugerida ou de sua escolha (RN03). |
| RF17 | Registro de comissão | O sistema deve registrar a comissão devida à PreventCar quando um agendamento sugerido é confirmado e o serviço concluído dentro da plataforma (RN04). |
| RF18 | Programa de indicação | O sistema deve permitir que usuários do plano Premium indiquem novos usuários e tenham o benefício correspondente aplicado à sua conta (RN07). |

## Requisitos Não Funcionais

| Código | Nome | Descrição |
|---|---|---|
| RNF01 | Segurança | O sistema deve armazenar senhas e dados sensíveis de usuários/veículos de forma segura, seguindo boas práticas de proteção de credenciais (o mecanismo específico de armazenamento será definido na etapa de arquitetura). |
| RNF02 | Usabilidade e responsividade | A interface deve ser responsiva, com suporte a partir de resoluções de 360px de largura (smartphones comuns), e compatível com as versões mais recentes dos navegadores/apps mais usados no Brasil (Chrome e Safari mobile). |
| RNF03 | Desempenho | Consultas aos históricos (RF06/RF11) devem carregar em menos de 2 segundos. |
| RNF04 | Disponibilidade | O sistema deve estar disponível 99% do tempo para consulta de alertas (RF04). |
| RNF05 | Confiabilidade | Backup diário para garantir que históricos de manutenção nunca sejam perdidos. |
| RNF06 | Integridade | As informações de durabilidade (RF05) devem ser atualizadas via fontes confiáveis. |

## Regras de Negócio

O modelo de negócio do PreventCar é híbrido: assinatura recorrente para motoristas e frotas, combinada com comissão sobre agendamentos concluídos em oficinas parceiras. As regras abaixo traduzem esse modelo em restrições que o sistema deve respeitar, e cada uma agora tem pelo menos um RF correspondente (ver coluna "RF relacionado").

| Código | Regra | RF relacionado |
|---|---|---|
| RN01 | O sistema deve oferecer três níveis de plano: Free (1 veículo, alertas básicos), Premium (veículos ilimitados, alertas preditivos, relatórios) e Frota (painel multiusuário, gestão por modelo de veículo). | RF12 |
| RN02 | Usuários do plano Free têm acesso limitado a 1 veículo cadastrado; o cadastro de veículos adicionais exige upgrade de plano. | RF13 |
| RN03 | Ao emitir um alerta de manutenção (RF04), o sistema pode sugerir uma oficina parceira previamente cadastrada e avaliada. | RF16 |
| RN04 | Quando um agendamento sugerido é confirmado e o serviço concluído dentro da plataforma, deve ser registrada uma comissão percentual (8% a 12%, sujeita a validação comercial) sobre o valor do serviço para a PreventCar. | RF17 |
| RN05 | Apenas oficinas parceiras cadastradas e aprovadas podem receber direcionamentos de agendamento pelo sistema. | RF14, RF15 |
| RN06 | Dados agregados e anonimizados de durabilidade de peças podem ser disponibilizados para licenciamento a terceiros (ex.: seguradoras), desde que não identifiquem usuários individuais. | — (fora do escopo funcional da SP1; tratado como diretriz de dados) |
| RN07 | Usuários do plano Premium com programa de indicação ativo têm direito a benefício definido pela área comercial (ex.: desconto ou período gratuito). | RF18 |

## Escopo inicial (referência)

Incluído no escopo do projeto:

- Cadastro de usuários, veículos e itens/peças a serem monitorados.
- Registro do tempo de uso dos itens cadastrados e cálculo da durabilidade estimada.
- Emissão de alertas automáticos e de confirmação relacionados às manutenções pendentes.
- Histórico de manutenções e de problemas de cada veículo (registro cronológico, itens próximos do limite de durabilidade, sugestão de oficinas parceiras).
- Contratação e gerenciamento de planos de assinatura (Free, Premium, Frota).
- Cadastro, aprovação e avaliação de oficinas parceiras; agendamento de serviços e registro de comissão.
- Programa de indicação para usuários Premium.
- Painel administrativo para gerenciamento de usuários, procedimentos, oficinas parceiras e durabilidade de peças.

## Pendências

- Matriz de rastreabilidade completa entre requisitos funcionais e regras de negócio (versão inicial já incluída na tabela de Regras de Negócio acima).
- Atualizar [CASOS_DE_USO.md](./CASOS_DE_USO.md) com casos de uso para RF12–RF18 (planos, oficinas parceiras, agendamento, comissão e indicação) — ainda cobrem apenas RF01–RF11.
- Diagrama de casos de uso de análise.
- Modelo de domínio (diagrama de classes) e modelo ER.
- Diagramas de atividades, sequência e máquina de estados.
- Definir, na etapa de arquitetura, o mecanismo concreto de armazenamento seguro de credenciais (RNF01).

Ver especificação detalhada dos casos de uso em [CASOS_DE_USO.md](./CASOS_DE_USO.md).