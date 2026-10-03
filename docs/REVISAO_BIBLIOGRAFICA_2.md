# Apoio bibliográfico do PreventCar — versão 2.0

**Finalidade:** apoiar a Introdução, a Justificativa, o comparativo de trabalhos similares e a escolha de palavras-chave do Trabalho de Graduação.  
**Data da apuração:** 1º de outubro de 2026  
**Fonte principal desta versão:** leitura dos PDFs disponíveis em `research/pdfs`.

> Esta versão substitui as inferências baseadas somente em resultados do Google Scholar por uma análise preliminar dos textos completos disponíveis. O documento anterior, [REVISAO_BIBLIOGRAFICA.md](REVISAO_BIBLIOGRAFICA.md), foi preservado. O artigo de Mohanraj, Eniyavan e Sidarth (2024) não foi incluído como evidência integral porque o acesso ao PDF exige login corporativo.

## 1. Escopo e procedimento

Foram analisados nove PDFs locais:

1. Silva e Silva, *Aplicativo de alerta e gerenciamento de revisões e manutenções veiculares*.
2. Barreiro-Zambrano, Martinez-Parrales e López-Chila (2026), *Implementation of an Integrated System for Preventive Maintenance Management and Alerts in Light Vehicles*.
3. Campos e Belhot (1994), *Gestão de manutenção de frotas de veículos: uma revisão*.
4. Killeen (2020), *Knowledge-based predictive maintenance for fleet management*.
5. Mikulić, Bošković e Zovak (2020), *Effects of driving style and vehicle maintenance on vehicle roadworthiness*.
6. Montero-Salgado e Muñoz-Sanz (2022), *Identification of the mechanical failure factors with potential influencing road accidents in Ecuador*.
7. Rögnvaldsson, Nowaczyk e Byttner (2018), *Self-monitoring for maintenance of vehicle fleets*.
8. Solanki e Dhall (2017), *An IoT based predictive connected car maintenance approach*.
9. Vilhalba (2024), *SensorNet AutoCare: dispositivo IoT para prevenção da manutenção de veículos*.

A análise procurou identificar: problema, objetivo, método, dados ou tecnologia, resultado, limitações e relação com o PreventCar. A leitura não constitui uma revisão sistemática, pois não houve avaliação formal de qualidade, protocolo de seleção ou análise bibliométrica.

## 2. Achados para a Introdução

A manutenção veicular é apresentada nos trabalhos como uma atividade que envolve segurança, custo, disponibilidade do veículo e organização de informações. Campos e Belhot discutem que a gestão de frotas exige planejamento, controle, informatização e apoio à decisão. O artigo também destaca que históricos de ocorrências, programação, ordens de serviço e informações sobre componentes ajudam na execução e no controle da manutenção.

Os estudos mais recentes mostram que esse problema pode ser tratado com diferentes níveis tecnológicos. Solanki e Dhall propõem uma arquitetura conceitual de carro conectado, com sensores, comunicação MQTT e análise de dados para manutenção preditiva. Rögnvaldsson, Nowaczyk e Byttner demonstram o automonitoramento de uma frota de ônibus usando dados embarcados e modelos capazes de sinalizar desvios relacionados a necessidades de manutenção. Vilhalba propõe uma solução com OBD-II, transmissão para a nuvem, interface web e notificações ao condutor.

Há também abordagens que não dependem de OBD-II. Silva e Silva descrevem um protótipo conectado ao veículo para coletar quilometragem e notificar o usuário com base em um plano de manutenções. Barreiro-Zambrano, Martinez-Parrales e López-Chila apresentam outra arquitetura de baixo custo, com Arduino Mega 2560, GPS, GSM/LTE, persistência em cartão MicroSD e alertas progressivos por SMS.

A dimensão da segurança aparece nos estudos de Montero-Salgado e Muñoz-Sanz e de Mikulić, Bošković e Zovak. O primeiro organiza dados de inspeção técnica e acidentes para identificar fatores de falha mecânica associados a acidentes. O segundo investiga a relação entre estilo de condução, propriedade do veículo, manutenção e aptidão para circulação. Portanto, a manutenção preventiva pode ser apresentada não apenas como controle de custos, mas também como mecanismo de redução de indisponibilidade e apoio à segurança.

### Texto-base para a Introdução

> A manutenção de veículos envolve aspectos econômicos, operacionais e de segurança. Em uma frota, é necessário controlar informações sobre veículos, componentes, ocorrências, serviços realizados e próximos prazos de revisão. Campos e Belhot destacam que a gestão da manutenção depende de planejamento, controle, informatização e apoio à decisão. Quando esses dados são mantidos em anotações dispersas ou não são atualizados, torna-se mais difícil acompanhar o histórico e agir antes da ocorrência de uma falha.
>
> Trabalhos recentes investigam diferentes formas de utilizar tecnologia nesse processo. Há propostas baseadas em veículos conectados e Internet das Coisas, como a arquitetura conceitual de Solanki e Dhall, o dispositivo OBD-II de Vilhalba e o monitoramento de frota estudado por Rögnvaldsson, Nowaczyk e Byttner. Também existem soluções de baixo custo baseadas em quilometragem, GPS e mensagens SMS, como a apresentada por Barreiro-Zambrano, Martinez-Parrales e López-Chila.
>
> O PreventCar situa-se nesse campo como um sistema de informação para centralizar veículos, itens, quilometragem, manutenções executadas, pendências e problemas. A proposta inicial utiliza informações registradas pelo usuário e regras de tempo e quilometragem para emitir alertas antes, durante e depois dos prazos de manutenção, sem afirmar que realiza diagnóstico automático de falhas.

## 3. Achados para a Justificativa

A leitura dos PDFs permite justificar o projeto pelos seguintes argumentos:

- **Dispersão e complexidade dos dados:** Campos e Belhot descrevem a quantidade e a interdependência das informações de manutenção, além da necessidade de relatórios e histórico para apoiar decisões.
- **Risco associado à falta de manutenção:** Montero-Salgado e Muñoz-Sanz estudam falhas mecânicas como fator potencial de acidentes; Mikulić, Bošković e Zovak relacionam a condição técnica do veículo à aptidão para circulação.
- **Dependência tecnológica das soluções avançadas:** OBD-II, sensores, GPS, comunicação móvel e processamento em nuvem aparecem nos trabalhos recentes. São caminhos relevantes, mas podem aumentar custo, instalação e complexidade.
- **Viabilidade de uma primeira camada de prevenção:** Silva e Silva e Barreiro-Zambrano et al. mostram que alertas baseados em quilometragem ou distância percorrida podem ser implementados em protótipos.
- **Necessidade de adaptar a solução ao público:** parte da literatura se concentra em frotas, ônibus ou veículos instrumentados. O PreventCar inclui também motoristas individuais e busca combinar simplicidade, histórico e alertas em uma aplicação única.

### Texto-base para a Justificativa

> A realização do PreventCar justifica-se pela necessidade de organizar o acompanhamento da manutenção de veículos e reduzir a dependência de controles informais. A literatura analisada mostra que a gestão da manutenção envolve grande quantidade de informações, decisões sobre prioridades e acompanhamento histórico. Também mostra que falhas mecânicas e condições inadequadas dos veículos podem estar relacionadas à segurança viária.
>
> Embora existam propostas baseadas em sensores, OBD-II, GPS, IoT e análise preditiva, essas tecnologias podem exigir equipamentos e infraestrutura adicionais. O PreventCar propõe uma primeira solução de apoio baseada no cadastro de veículos e itens, registro de quilometragem e tempo de uso, histórico de manutenções e emissão de alertas. Essa abordagem não substitui inspeções profissionais, recomendações do fabricante ou sistemas de diagnóstico, mas pode ajudar o usuário a lembrar e planejar intervenções.
>
> A contribuição do projeto está na integração de funções de gestão, acompanhamento e comunicação em uma solução orientada ao contexto de motoristas individuais e pequenas frotas. A implementação também permite uma evolução futura para integração com sensores, oficinas parceiras e modelos preditivos, caso existam dados e infraestrutura suficientes.

## 4. Apuração dos trabalhos similares

| Trabalho | Objetivo e método verificados no PDF | Resultado ou contribuição verificada | Relação com o PreventCar |
|---|---|---|---|
| **Silva e Silva, Aplicativo de alerta...** | Desenvolve um protótipo de dispositivo conectado ao veículo e aplicativo Android. O dispositivo coleta a quilometragem; o usuário escolhe manutenções pré-definidas e recebe notificações conforme um plano. | Propõe a união de dispositivo, quilometragem, plano de manutenção e aplicativo. O foco é orientar pessoas que não sabem quando ou por que realizar revisões. | É o trabalho mais próximo do núcleo inicial do PreventCar. O projeto atual amplia o registro de histórico, problemas, pendências, oficinas e perfis de usuário; esses diferenciais devem ser demonstrados na especificação e não apenas declarados. |
| **Barreiro-Zambrano, Martinez-Parrales e López-Chila (2026)** | Desenvolve e valida uma arquitetura de baixo custo sem dependência de OBD-II: Arduino Mega 2560, GPS, GSM/LTE, MicroSD, detecção virtual de ignição e odometria filtrada. Testa um Hyundai Accent 2012 em três cenários urbanos. | Relata erro médio global de 3,98% em relação ao odômetro e 20 alertas enviados em 20 eventos testados. Os autores indicam que ainda é necessária validação com mais veículos. | Demonstra a viabilidade de alertas por distância e o valor de uma solução de baixo custo. O PreventCar não precisa começar com hardware e pode operar com quilometragem informada pelo usuário. |
| **Campos e Belhot (1994)** | Realiza revisão gerencial sobre manutenção de frotas, discutindo planejamento, controle, informatização, mão de obra, custos e apoio à decisão. | Defende informação histórica, planejamento e priorização de componentes críticos. Também evidencia a complexidade dos dados e decisões em frotas. | É a principal base conceitual para justificar cadastro, histórico, relatórios e apoio à decisão no PreventCar. |
| **Killeen (2020)** | Pesquisa manutenção preditiva baseada em conhecimento para gestão de frotas, com IoT, dados de sensores e comparação entre as abordagens COSMO e ICOSMO. | O texto relata que o ICOSMO geralmente melhora a precisão do COSMO em situações de ruído, escolha inadequada de sensores ou distância estatística desfavorável, mas aponta necessidade de mais experimentos. | Apoia uma possível evolução preditiva. O escopo atual do PreventCar deve permanecer baseado em regras e histórico até que existam dados suficientes para validar modelos. |
| **Mikulić, Bošković e Zovak (2020)** | Investiga a relação entre estilo de condução, propriedade do veículo e condição técnica observada em inspeções periódicas. | O estudo trata veículos não aptos para circulação como risco aos usuários da via e procura relacionar fatores de uso e manutenção à condição do veículo. | Fundamenta a dimensão de segurança e mostra que alertas devem apoiar, mas não substituir, inspeção técnica e manutenção profissional. |
| **Montero-Salgado e Muñoz-Sanz (2022)** | Estrutura dados de inspeção técnica veicular e registros de acidentes em Cuenca, Equador, incluindo arquivos que precisaram ser organizados para análise estatística. | Identifica a necessidade de dados confiáveis e sistemáticos; a taxa de falhas dos veículos inspecionados não tende a zero no futuro próximo, segundo o estudo. | Reforça que histórico estruturado e dados confiáveis são parte do problema. Também alerta que o PreventCar precisará definir origem e qualidade das referências de durabilidade. |
| **Rögnvaldsson, Nowaczyk e Byttner (2018)** | Demonstra automonitoramento em uma frota de ônibus usando dados embarcados, dados externos, agentes distribuídos e modelos de detecção de novidade ao longo do tempo. | O sistema sinalizou desvios ligados a necessidades de manutenção, inclusive casos difíceis de antecipar por detectores específicos. A normalização pela frota reduz alertas causados por fatores externos. | É uma referência de manutenção preditiva avançada. O PreventCar diferencia-se por começar sem telemetria contínua nem modelos autônomos. |
| **Solanki e Dhall (2017)** | Apresenta uma arquitetura de alto nível para carro conectado, com sensores, IoT, MQTT, Eclipse Mosquitto e Eclipse Paho, para enviar dados e apoiar manutenção preditiva. | Discute o conceito e uma simulação de envio de dados de sensores. Também reconhece o custo e a complexidade associados à quantidade de sensores. | Apoia a possibilidade de evolução para veículos conectados, mas ajuda a justificar uma primeira etapa de menor complexidade. |
| **Vilhalba (2024), SensorNet AutoCare** | Propõe dispositivo IoT com acesso à porta OBD-II, coleta de dados da central eletrônica, transmissão para nuvem, interface web e notificações. O desenvolvimento é dividido em pesquisa, ideação, software, hardware e experimentação de segurança. | Apresenta um protótipo para monitorar necessidades de manutenção em veículos populares. O trabalho busca testar a viabilidade das recomendações e reduzir riscos associados a defeitos mecânicos. | É semelhante na intenção de alertar o condutor, mas depende de hardware e OBD-II. O PreventCar começa com dados de cadastro, tempo e quilometragem, podendo incorporar sensores posteriormente. |

### Comparação por dimensão

| Dimensão | Trabalhos com maior evidência | Decisão para o PreventCar |
|---|---|---|
| Cadastro e histórico | Campos e Belhot; Montero-Salgado e Muñoz-Sanz | Manter cadastro de veículos, itens, problemas e manutenções como núcleo do sistema. |
| Alertas | Silva e Silva; Barreiro-Zambrano et al.; Vilhalba | Implementar alertas por tempo e quilometragem, com estados antes, durante e depois do prazo. |
| Sensores e telemetria | Solanki e Dhall; Vilhalba; Rögnvaldsson et al.; Killeen | Tratar como evolução futura, não como requisito obrigatório da primeira versão. |
| Segurança viária | Mikulić et al.; Montero-Salgado e Muñoz-Sanz; Barreiro-Zambrano et al. | Usar a segurança como justificativa, sem prometer redução de acidentes antes de avaliação. |
| Gestão de frotas | Campos e Belhot; Killeen; Rögnvaldsson et al. | Atender inicialmente usuários individuais e pequenas frotas, preservando possibilidade de expansão. |
| Baixo custo e acessibilidade | Silva e Silva; Barreiro-Zambrano et al. | Priorizar solução utilizável sem hardware adicional na primeira etapa. |

## 5. Lacuna e posicionamento do PreventCar

A apuração não permite afirmar que o PreventCar é inédito em cada função isolada. Já existem trabalhos com alertas, quilometragem, dispositivos, sensores, gestão de frotas e manutenção preditiva. O posicionamento mais defensável é o de **integração e adequação de funcionalidades**:

- centralizar veículos, peças/itens, quilometragem e histórico;
- diferenciar manutenção pendente de manutenção executada;
- emitir alertas por tempo e quilometragem;
- apoiar motoristas individuais e pequenos gestores de frota;
- permitir evolução para oficinas parceiras e sensores;
- começar com baixa dependência de hardware e dados externos.

A lacuna deve ser escrita como uma oportunidade de projeto, não como ausência absoluta de soluções. Uma formulação adequada é: “os trabalhos analisados exploram partes do problema ou dependem de infraestruturas específicas; o PreventCar propõe integrar funções de acompanhamento e alerta em uma solução acessível ao usuário do contexto brasileiro”.

## 6. Palavras-chave

### Conjunto recomendado para o resumo

> **Palavras-chave:** manutenção preventiva; manutenção veicular; gestão de frotas; alertas de manutenção; sistema de informação.

### Termos encontrados ou confirmados nos PDFs

- manutenção veicular;
- manutenção preventiva;
- manutenção preditiva;
- gestão de manutenção;
- gestão de frotas;
- controle de manutenção;
- histórico de manutenção;
- alerta de manutenção;
- quilometragem;
- durabilidade de componentes;
- falhas mecânicas;
- segurança viária;
- inspeção técnica veicular;
- Internet das Coisas (IoT);
- veículo conectado;
- telemetria veicular;
- OBD-II;
- monitoramento veicular;
- sistema de apoio à decisão;
- vehicle maintenance;
- preventive maintenance;
- predictive maintenance;
- fleet management;
- maintenance alerts;
- road safety;
- connected vehicle;
- vehicle telemetry.

## 7. Referências consultadas

- BARREIRO-ZAMBRANO, Joseph; MARTINEZ-PARRALES, Juan; LÓPEZ-CHILA, Roberto. **Implementation of an Integrated System for Preventive Maintenance Management and Alerts in Light Vehicles**. *Vehicles*, 2026. PDF consultado em `research/pdfs/Barreiro-Zambrano e Martinez-Parrales (2026).pdf`. Disponível em: [MDPI](https://www.mdpi.com/2624-8921/8/5/100).
- CAMPOS, Fernando Celso de; BELHOT, Renato Vairo. **Gestão de manutenção de frotas de veículos: uma revisão**. *Gestão & Produção*, v. 1, n. 2, p. 171-188, 1994. PDF consultado em `research/pdfs/Campos e Belhot(1994).pdf`. Disponível também em: [SciELO](https://www.scielo.br/j/gp/a/HgdbDz3KLWyNzVT9XccvJCb/?format=html&lang=pt).
- KILLEEN, P. **Knowledge-based predictive maintenance for fleet management**. 2020. Tese. PDF consultado em `research/pdfs/Killeen (2020).pdf`. Disponível em: [repositório da University of Ottawa](https://ruor.uottawa.ca/items/95aee35e-2653-4087-b47e-0a76ab872043).
- MIKULIĆ, I.; BOŠKOVIĆ, I.; ZOVAK, G. **Effects of driving style and vehicle maintenance on vehicle roadworthiness**. *Promet - Traffic & Transportation*, 2020. PDF consultado em `research/pdfs/Mikulić, Bošković e Zovak (2020).PDF`. Disponível em: [Hrčak](https://hrcak.srce.hr/clanak/355317).
- MONTERO-SALGADO, J. P.; MUÑOZ-SANZ, J. **Identification of the mechanical failure factors with potential influencing road accidents in Ecuador**. *International Journal of Environmental Research and Public Health*, 2022. PDF consultado em `research/pdfs/Montero-Salgado e Muñoz-Sanz (2022).pdf`. Disponível em: [MDPI](https://www.mdpi.com/1660-4601/19/13/7787).
- RÖGNVALDSSON, T.; NOWACZYK, S.; BYTTNER, S. **Self-monitoring for maintenance of vehicle fleets**. *Data Mining and Knowledge Discovery*, 2018. PDF consultado em `research/pdfs/Rögnvaldsson, Nowaczyk e Byttner (2018).pdf`. Disponível em: [Springer](https://link.springer.com/article/10.1007/s10618-017-0538-6).
- SILVA, Igor Soares dos Santos; SILVA, Guilherme Rodrigues Veloso da. **Aplicativo de alerta e gerenciamento de revisões e manutenções veiculares**. Universidade Santa Cecília - UNISANTA. PDF consultado em `research/pdfs/Araújo, Aplicativo de alerta e gerenciamento de revisões e manutenções veiculares.pdf`. Disponível em: [anais do CONIC-Semesp](https://www.conic-semesp.org.br/anais/files/2018/trabalho-1000000187.pdf).
- SOLANKI, V. K.; DHALL, R. **An IoT based predictive connected car maintenance approach**. 2017. PDF consultado em `research/pdfs/Solanki e Dhall (2017).pdf`. Disponível em: [repositório institucional](https://reunir.unir.net/items/61a37918-e1d0-4d13-bc39-d3d96483c7ba).
- VILHALBA, E. C. **SensorNet AutoCare: dispositivo IoT para prevenção da manutenção de veículos**. 2024. PDF consultado em `research/pdfs/Vilhalba (2024), SensorNet AutoCare.pdf`. Disponível em: [repositório da UNIPAMPA](https://repositorio.unipampa.edu.br/bitstreams/1acc2b9f-f578-47d8-a14a-ccc418ee5d43/download).

## 8. Limitações e próximos cuidados acadêmicos

- O artigo de Mohanraj, Eniyavan e Sidarth (2024) foi localizado, mas não foi analisado integralmente por exigir login corporativo para o PDF. Ele não deve ser citado nesta versão como evidência de método ou resultado.
- A referência de Barreiro-Zambrano et al. aparece como publicação de 2026 no PDF; conferir volume, número, páginas e DOI na versão final.
- O trabalho de Silva e Silva não deve ser atribuído a Araújo: Araújo aparece entre os orientadores, conforme a folha inicial do PDF.
- Os resultados numéricos de protótipos não podem ser generalizados para todos os veículos. O próprio trabalho de Barreiro-Zambrano et al. indica a necessidade de validação com mais veículos.
- As fontes devem ser normalizadas conforme a orientação da FATEC e a ABNT NBR 6023 antes da entrega.
- A literatura apoia a relevância de alertas, mas não prova que o PreventCar reduzirá acidentes. Essa afirmação exigiria avaliação futura com usuários e indicadores definidos.
- A origem das referências de durabilidade de peças continua sendo uma decisão de arquitetura e domínio; recomendações do fabricante e fontes técnicas devem ser priorizadas sobre estimativas genéricas.
