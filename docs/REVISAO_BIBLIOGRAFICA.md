# Apoio bibliográfico do PreventCar

**Documento de apoio à Introdução, à Justificativa e ao comparativo de trabalhos similares**  
**Data da busca:** 1º de outubro de 2026  
**Base explorada:** Google Scholar, por meio do utilitário em `research/scraper.py`

> Este documento é uma síntese preliminar para orientar a redação do Trabalho de Graduação. Os resultados foram coletados como metadados públicos e trechos de resumo. Antes da entrega acadêmica, cada referência deve ser conferida no texto original, no periódico ou no repositório institucional.

## 1. Síntese da busca

Foram usadas cinco consultas relacionadas ao domínio do projeto:

- `"manutenção preventiva" veículos alertas`
- `"preventive maintenance" vehicles predictive alerts`
- `"vehicle maintenance" fleet management information system`
- `"road safety" vehicle maintenance failures`
- `"gestão de manutenção" frota veículos sistema`

A coleta retornou **24 registros**, sendo **21 com ano informado** e **24 com URL de acesso**. A busca é exploratória, não uma revisão sistemática: não foram definidos protocolo de seleção, critérios de qualidade, janela temporal ou análise estatística de citações.

## 2. Apoio para a Introdução

A manutenção de veículos não é apenas uma atividade corretiva realizada depois da falha. Ela envolve planejamento, controle, histórico de ocorrências, disponibilidade de informações e tomada de decisão. Na revisão de Campos e Belhot, a gestão de frotas é relacionada à necessidade de melhorar o planejamento e o controle da manutenção, o nível de informatização e a qualidade das decisões. Os autores também apontam a importância de registros históricos e de sistemas de informação para apoiar a programação das atividades.

Esse argumento se relaciona diretamente ao PreventCar, que pretende centralizar veículos, itens, quilometragem, manutenções realizadas e pendências em um único sistema. A informação organizada pode transformar anotações dispersas em um histórico consultável, permitindo que o usuário acompanhe intervenções e receba alertas antes, durante e depois do prazo estimado.

A literatura encontrada também apresenta três direções tecnológicas próximas ao projeto:

1. **Sistemas de gestão:** trabalhos sobre gestão de frotas tratam de cadastro, planejamento, controle, histórico e apoio à decisão.
2. **IoT e manutenção preditiva:** trabalhos como *An IoT based predictive connected car maintenance approach* e *SensorNet AutoCare* associam sensores e dados do veículo a alertas de manutenção.
3. **Segurança viária:** estudos sobre falhas mecânicas e condição técnica do veículo discutem sua relação com a segurança e a ocorrência de acidentes.

Assim, o problema do PreventCar pode ser apresentado como uma combinação de três necessidades: registrar adequadamente a manutenção, transformar os registros em alertas compreensíveis e contribuir para que problemas técnicos sejam identificados antes de gerar indisponibilidade ou risco.

### Texto-base para a Introdução

> A manutenção de veículos é uma atividade que envolve planejamento, controle e tomada de decisão. Em frotas, a gestão depende de informações sobre veículos, ocorrências, serviços executados, peças e períodos de revisão. Campos e Belhot destacam que a manutenção de frotas enfrenta desafios relacionados ao nível de informatização, à complexidade das decisões e à necessidade de melhorar a qualidade e a produtividade do setor. Nesse contexto, registros dispersos em anotações, planilhas ou memória dificultam o acompanhamento do histórico e a identificação do momento adequado para uma intervenção.
>
> Além da gestão operacional, a condição técnica dos veículos possui relação com a segurança viária. Por isso, soluções de manutenção preventiva e preditiva vêm incorporando históricos, quilometragem, sensores, análise de dados e mecanismos de alerta. O PreventCar propõe uma aplicação para centralizar o cadastro de veículos e itens, registrar manutenções e problemas, acompanhar o uso de componentes e emitir alertas sobre revisões e pendências.

## 3. Apoio para a Justificativa

A justificativa pode ser construída a partir dos seguintes pontos, sustentados pela busca:

- A manutenção de frotas possui muitos dados e decisões interdependentes; um sistema que reúna histórico, itens, quilometragem e pendências reduz a dispersão das informações.
- A manutenção preventiva permite planejar intervenções e evitar que o acompanhamento dependa exclusivamente da memória do usuário.
- Estudos encontrados associam falhas mecânicas e condição técnica do veículo a aspectos de segurança viária, reforçando a relevância de alertas e acompanhamento.
- Pesquisas recentes exploram IoT, análise preditiva e alertas, mas essas soluções podem exigir sensores, infraestrutura ou conhecimento técnico que não estão disponíveis para todos os motoristas.
- Há espaço para uma solução de uso cotidiano que combine cadastro simples, histórico, alertas baseados em tempo e quilometragem e orientação para manutenção.

### Texto-base para a Justificativa

> A realização deste projeto justifica-se pela necessidade de melhorar o acompanhamento da manutenção de veículos por usuários que atualmente utilizam métodos dispersos, como planilhas, anotações ou lembretes informais. A literatura sobre gestão de manutenção de frotas destaca que informações históricas, planejamento e controle são importantes para apoiar decisões e melhorar a operação. Quando esses dados não estão organizados, o usuário pode perder prazos, realizar intervenções tardiamente ou não conseguir consultar o histórico do veículo.
>
> A proposta também se justifica pela relação entre a condição técnica dos veículos e a segurança viária. Um sistema de alertas não substitui a avaliação de um profissional ou as recomendações do fabricante, mas pode auxiliar o usuário a lembrar inspeções e manutenções planejadas. O PreventCar busca oferecer essa contribuição por meio de uma solução acessível, com registro de veículos, itens, quilometragem, manutenções e problemas, além de alertas e indicação de oficinas parceiras.
>
> Como contribuição acadêmica e tecnológica, o projeto integra funções encontradas separadamente em trabalhos de gestão, aplicações de alerta e estudos de manutenção preditiva. O escopo inicial não pretende diagnosticar falhas automaticamente nem substituir sensores ou mecânicos; pretende organizar informações e apoiar o usuário na manutenção preventiva.

## 4. Comparativo de trabalhos similares

A tabela abaixo é uma comparação preliminar. As colunas de método e resultado devem ser completadas depois da leitura integral; não se deve inferir que um sistema possui determinada função apenas porque ela aparece no título ou no trecho retornado pelo Scholar.

| Trabalho | Foco principal | Dados ou tecnologia indicada | Aproximação com o PreventCar | Diferença ou oportunidade |
|---|---|---|---|---|
| [Campos e Belhot (1994)](https://www.scielo.br/j/gp/a/HgdbDz3KLWyNzVT9XccvJCb/?format=html&lang=pt) | Revisão da gestão de manutenção de frotas | Planejamento, controle, informatização e apoio à decisão | Fundamenta cadastro, histórico e planejamento | É uma revisão gerencial, não uma aplicação voltada ao motorista comum |
| [Araújo, Aplicativo de alerta e gerenciamento de revisões e manutenções veiculares](https://www.conic-semesp.org.br/anais/files/2018/trabalho-1000000187.pdf) | Aplicativo de alerta e gerenciamento de revisões | Cadastro e alertas, conforme título e resumo recuperado | Muito próximo do núcleo de alertas do PreventCar | O PreventCar amplia o escopo com problemas, histórico, quilometragem e oficinas parceiras; validar no texto original |
| [Vilhalba (2024), SensorNet AutoCare](https://repositorio.unipampa.edu.br/bitstreams/1acc2b9f-f578-47d8-a14a-ccc418ee5d43/download) | Prevenção da manutenção de veículos | IoT e indicação de necessidade de manutenção, conforme registro recuperado | Relaciona manutenção preventiva e alertas | O PreventCar prioriza uma solução sem depender de sensores embarcados; confirmar arquitetura e resultados |
| [Solanki e Dhall (2017)](https://reunir.unir.net/items/61a37918-e1d0-4d13-bc39-d3d96483c7ba) | Manutenção preditiva de carros conectados | IoT, comunicação entre veículos e alertas | Apoia a ideia de alertas baseados em dados | O PreventCar começa com dados informados pelo usuário e regras de tempo/quilometragem |
| [Killeen (2020)](https://ruor.uottawa.ca/items/95aee35e-2653-4087-b47e-0a76ab872043) | Manutenção preditiva para gestão de frotas | IoT e arquitetura em camadas, conforme registro recuperado | Apoia o eixo de gestão e expansão futura | O PreventCar possui foco inicial menor e voltado também a usuários individuais |
| [Rögnvaldsson, Nowaczyk e Byttner (2018)](https://link.springer.com/article/10.1007/s10618-017-0538-6) | Automonitoramento de manutenção de frotas | Dados de operação de uma frota de ônibus e mineração de dados | Apoia uso de histórico operacional | O PreventCar não propõe, nesta etapa, modelo de mineração ou diagnóstico automático |
| [Montero-Salgado e Muñoz-Sanz (2022)](https://www.mdpi.com/1660-4601/19/13/7787) | Fatores de falhas mecânicas relacionados a acidentes | Análise de fatores de falhas e manutenção, conforme título e registro | Fundamenta a relação com segurança viária | Estudo analítico sobre acidentes, não sistema de gestão para usuários |
| [Mikulić, Bošković e Zovak (2020)](https://hrcak.srce.hr/clanak/355317) | Estilo de condução, manutenção e condições de circulação | Comparação entre falhas, estilo de condução e condição do veículo | Apoia a abordagem de prevenção e segurança | Não apresenta necessariamente uma solução de alertas; confirmar método e amostra |
| [Mohanraj, Eniyavan e Sidarth (2024)](https://ieeexplore.ieee.org/abstract/document/10544392/) | Gêmeos digitais para manutenção preditiva automotiva | Monitoramento, análise preditiva e saúde de componentes | Indica uma direção tecnológica avançada | Mais complexo e dependente de dados/sensores do que o escopo inicial do PreventCar |
| [Barreiro-Zambrano e Martinez-Parrales (2026)](https://www.mdpi.com/2624-8921/8/5/100) | Sistema integrado de gestão e alertas em veículos leves | Sistema de baixo custo e alertas por SMS, conforme título e registro | É o trabalho mais próximo do recorte de gestão + alertas | O PreventCar diferencia-se pelo histórico de problemas, planos, oficinas parceiras e foco no mercado brasileiro; confirmar resultados no texto completo |

### Síntese do posicionamento do PreventCar

Os trabalhos encontrados não devem ser usados para afirmar que o PreventCar é inédito sem uma revisão mais ampla. A busca preliminar indica, entretanto, uma oportunidade de integração:

- **Gestão:** cadastro, histórico e planejamento.
- **Acompanhamento:** tempo de uso, quilometragem e itens.
- **Comunicação:** alertas antes, durante e depois do prazo.
- **Ação:** sugestão e agendamento em oficinas parceiras.
- **Acessibilidade:** uso por motoristas individuais, além de frotas.

A contribuição proposta é de integração e adequação ao contexto do projeto, e não de criação de um novo método de diagnóstico veicular.

## 5. Palavras-chave recomendadas

### Palavras-chave principais

Para a versão em português:

> manutenção preventiva; manutenção veicular; gestão de frotas; sistema de informação; alertas de manutenção.

Para ampliar a recuperação em bases internacionais:

> preventive maintenance; vehicle maintenance; fleet management; maintenance alerts; information system.

### Palavras-chave complementares

- manutenção preditiva;
- histórico de manutenção;
- quilometragem;
- durabilidade de componentes;
- segurança viária;
- falhas mecânicas;
- sistema de apoio à decisão;
- Internet das Coisas (IoT);
- veículos conectados;
- manutenção baseada em condição;
- oficinas mecânicas;
- mobile application;
- predictive maintenance;
- road safety;
- connected vehicles.

### Conjunto recomendado para o resumo

Usar de três a cinco termos, conforme a regra da instituição:

> **Palavras-chave:** manutenção preventiva; manutenção veicular; gestão de frotas; alertas de manutenção; sistema de informação.

## 6. Como citar e validar antes da entrega

1. Abrir o texto integral de cada trabalho selecionado.
2. Conferir grafia dos autores, ano, periódico/evento, volume, número, páginas e DOI.
3. Substituir os registros com `NA` por dados bibliográficos completos.
4. Conferir se o trabalho realmente apresenta o método e os resultados descritos no quadro.
5. Registrar a data de acesso e padronizar todas as referências conforme ABNT NBR 6023 adotada pela instituição.
6. Usar a referência de Campos e Belhot como base principal para gestão de manutenção, complementando-a com estudos recentes de IoT, manutenção preditiva e segurança viária.

## 7. Referências selecionadas

- CAMPOS, Fernando Celso de; BELHOT, Renato Vairo. **Gestão de manutenção de frotas de veículos: uma revisão**. Gestão & Produção, 1994. Disponível em: [SciELO](https://www.scielo.br/j/gp/a/HgdbDz3KLWyNzVT9XccvJCb/?format=html&lang=pt). Acesso em: 1 out. 2026.
- MONTERO-SALGADO, J. P.; MUÑOZ-SANZ, J. **Identification of the mechanical failure factors with potential influencing road accidents in Ecuador**. International Journal of Environmental Research and Public Health, 2022. Disponível em: [MDPI](https://www.mdpi.com/1660-4601/19/13/7787). Acesso em: 1 out. 2026.
- MIKULIĆ, I.; BOŠKOVIĆ, I.; ZOVAK, G. **Effects of driving style and vehicle maintenance on vehicle roadworthiness**. Promet - Traffic & Transportation, 2020. Disponível em: [Hrčak](https://hrcak.srce.hr/clanak/355317). Acesso em: 1 out. 2026.
- RÖGNVALDSSON, T.; NOWACZYK, S.; BYTTNER, S. **Self-monitoring for maintenance of vehicle fleets**. Data Mining and Knowledge Discovery, 2018. Disponível em: [Springer](https://link.springer.com/article/10.1007/s10618-017-0538-6). Acesso em: 1 out. 2026.
- SOLANKI, V. K.; DHALL, R. **An IoT based predictive connected car maintenance approach**. 2017. Disponível em: [repositório institucional](https://reunir.unir.net/items/61a37918-e1d0-4d13-bc39-d3d96483c7ba). Acesso em: 1 out. 2026.
- VILHALBA, E. C. **SensorNet AutoCare: dispositivo IoT para prevenção da manutenção de veículos**. 2024. Disponível em: [repositório UNIPAMPA](https://repositorio.unipampa.edu.br/bitstreams/1acc2b9f-f578-47d8-a14a-ccc418ee5d43/download). Acesso em: 1 out. 2026.
- BARREIRO-ZAMBRANO, J.; MARTINEZ-PARRALES, J. **Implementation of an Integrated System for Preventive Maintenance Management and Alerts in Light Vehicles**. Vehicles, 2026. Disponível em: [MDPI](https://www.mdpi.com/2624-8921/8/5/100). Acesso em: 1 out. 2026.

## 8. Limitações da apuração

- O Google Scholar fornece metadados e trechos que podem estar incompletos ou truncados.
- Alguns resultados não informaram periódico, ano ou DOI no momento da coleta.
- A semelhança foi avaliada por tema e escopo, não por uma revisão sistemática ou métrica bibliométrica.
- Os textos sobre segurança, IoT e manutenção preditiva precisam ser lidos integralmente antes de sustentar afirmações específicas.
- Alertas de manutenção são apoio ao acompanhamento e não substituem inspeção profissional, manual do fabricante ou normas de segurança.
