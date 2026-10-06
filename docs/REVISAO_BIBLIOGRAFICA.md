# Revisão bibliográfica do PreventCar

**Data da apuração:** 1º de outubro de 2026  
**Fontes:** PDFs disponíveis em `research/pdfs`, localizados a partir de buscas no Google Scholar. (não disponível no repositório para evitar problemas de direitos autorais.)

Este texto resume a literatura consultada para a introdução, a justificativa e
o posicionamento do PreventCar. A análise é exploratória: não houve protocolo
formal de seleção, avaliação bibliométrica ou comparação estatística entre os
estudos.

## 1. Síntese da literatura

A manutenção de veículos depende de planejamento, histórico de serviços,
controle de componentes e informações confiáveis. Campos e Belhot (1994)
relacionam a gestão de frotas à informatização e ao apoio à decisão. Sem um
registro organizado, o usuário pode perder prazos, repetir serviços ou não
identificar problemas recorrentes.

Os trabalhos analisados usam diferentes níveis de tecnologia. Silva e Silva
propõem alertas baseados em quilometragem e em um plano de manutenção.
Barreiro-Zambrano, Martinez-Parrales e López-Chila utilizam GPS, comunicação
móvel e armazenamento local. Outros estudos exploram OBD-II, sensores, IoT,
telemetria e modelos de manutenção preditiva, como Solanki e Dhall, Vilhalba,
Rögnvaldsson, Nowaczyk e Byttner e Killeen.

Os estudos também relacionam manutenção e segurança viária. Mikulić,
Bošković e Zovak estudam a condição técnica dos veículos em inspeções, enquanto
Montero-Salgado e Muñoz-Sanz analisam fatores de falha mecânica relacionados a
acidentes. Esses trabalhos reforçam a importância do acompanhamento, mas não
permitem afirmar que um sistema de alertas, sozinho, reduz acidentes.

## 2. Relação com o PreventCar

O PreventCar centraliza veículos, itens, quilometragem, manutenções e
problemas. Também gera alertas com base no tempo e na quilometragem informados
pelo usuário. A primeira versão funciona sem sensores, OBD-II ou telemetria
contínua.

Essa escolha reduz o custo e a complexidade de instalação, embora dependa da
qualidade dos dados registrados. A integração com sensores, oficinas parceiras
ou modelos preditivos pode ser considerada em etapas futuras, depois que
existirem dados e critérios para validar essas funções.

O projeto reúne, em uma solução acessível, funções que aparecem separadas na
literatura: cadastro, histórico, controle de prazos, alertas e apoio ao
planejamento da manutenção para motoristas e pequenas frotas. A proposta não
afirma que cada recurso seja inédito.

### Comparativo resumido

| Trabalho | Contribuição principal | Relação com o PreventCar |
|---|---|---|
| Campos e Belhot (1994) | Gestão de frotas, planejamento, controle e histórico. | Dá base ao cadastro e ao histórico de manutenção. |
| Silva e Silva | Aplicativo com plano de manutenção, quilometragem e alertas. | É a referência mais próxima da função de alertas. |
| Barreiro-Zambrano et al. (2026) | Alertas por distância usando GPS e comunicação móvel. | Reforça a utilidade de alertas por quilometragem. |
| Killeen (2020) | Manutenção preditiva baseada em conhecimento e dados de sensores. | Aponta uma possível evolução, fora do escopo inicial. |
| Mikulić et al. (2020) | Relação entre condução, manutenção e condição do veículo. | Relaciona a manutenção à segurança e mantém a necessidade de inspeções. |
| Montero-Salgado e Muñoz-Sanz (2022) | Estudo de falhas mecânicas associadas a acidentes. | Mostra a necessidade de dados confiáveis. |
| Rögnvaldsson et al. (2018) | Automonitoramento de frotas com dados embarcados. | Apresenta uma abordagem avançada de telemetria. |
| Solanki e Dhall (2017) | Arquitetura de carro conectado para manutenção preditiva. | Apresenta uma possibilidade de expansão tecnológica. |
| Vilhalba (2024) | Dispositivo IoT com OBD-II, nuvem e notificações. | Tem objetivo semelhante, mas exige hardware adicional. |

## 3. Justificativa do projeto

A literatura mostra que a manutenção envolve muitos dados e decisões. Para
usuários individuais e pequenas frotas, esses dados frequentemente ficam em
anotações, planilhas ou na memória. O PreventCar reúne essas informações em um
histórico único e envia alertas de manutenção.

As soluções com sensores e telemetria podem exigir equipamentos, conectividade e
conhecimento técnico. Por isso, a primeira versão usa informações registradas
pelo usuário e prioriza uma implementação de menor complexidade. O sistema
apoia o planejamento; recomendações do fabricante, avaliação do mecânico,
inspeção profissional e diagnóstico continuam sendo necessários.

## 4. Palavras-chave

**Palavras-chave:** manutenção preventiva; manutenção veicular; gestão de
frotas; alertas de manutenção; sistema de informação.

Também podem ser usadas nas buscas: `manutenção preditiva`, `histórico de
manutenção`, `quilometragem`, `falhas mecânicas`, `segurança viária`, `vehicle
maintenance`, `preventive maintenance` e `fleet management`.

## 5. Referências consultadas

- BARREIRO-ZAMBRANO, Joseph; MARTINEZ-PARRALES, Juan; LÓPEZ-CHILA, Roberto. **Implementation of an Integrated System for Preventive Maintenance Management and Alerts in Light Vehicles**. *Vehicles*, 2026. Disponível em: [MDPI](https://www.mdpi.com/2624-8921/8/5/100).
- CAMPOS, Fernando Celso de; BELHOT, Renato Vairo. **Gestão de manutenção de frotas de veículos: uma revisão**. *Gestão & Produção*, v. 1, n. 2, p. 171-188, 1994. Disponível em: [SciELO](https://www.scielo.br/j/gp/a/HgdbDz3KLWyNzVT9XccvJCb/?format=html&lang=pt).
- KILLEEN, P. **Knowledge-based predictive maintenance for fleet management**. 2020. Tese. Disponível em: [University of Ottawa](https://ruor.uottawa.ca/items/95aee35e-2653-4087-b47e-0a76ab872043).
- MIKULIĆ, I.; BOŠKOVIĆ, I.; ZOVAK, G. **Effects of driving style and vehicle maintenance on vehicle roadworthiness**. *Promet - Traffic & Transportation*, 2020. Disponível em: [Hrčak](https://hrcak.srce.hr/clanak/355317).
- MONTERO-SALGADO, J. P.; MUÑOZ-SANZ, J. **Identification of the mechanical failure factors with potential influencing road accidents in Ecuador**. *International Journal of Environmental Research and Public Health*, 2022. Disponível em: [MDPI](https://www.mdpi.com/1660-4601/19/13/7787).
- RÖGNVALDSSON, T.; NOWACZYK, S.; BYTTNER, S. **Self-monitoring for maintenance of vehicle fleets**. *Data Mining and Knowledge Discovery*, 2018. Disponível em: [Springer](https://link.springer.com/article/10.1007/s10618-017-0538-6).
- SILVA, Igor Soares dos Santos; SILVA, Guilherme Rodrigues Veloso da. **Aplicativo de alerta e gerenciamento de revisões e manutenções veiculares**. Universidade Santa Cecília - UNISANTA. Disponível em: [CONIC-Semesp](https://www.conic-semesp.org.br/anais/files/2018/trabalho-1000000187.pdf).
- SOLANKI, V. K.; DHALL, R. **An IoT based predictive connected car maintenance approach**. 2017. Disponível em: [repositório institucional](https://reunir.unir.net/items/61a37918-e1d0-4d13-bc39-d3d96483c7ba).
- VILHALBA, E. C. **SensorNet AutoCare: dispositivo IoT para prevenção da manutenção de veículos**. 2024. Disponível em: [UNIPAMPA](https://repositorio.unipampa.edu.br/bitstreams/1acc2b9f-f578-47d8-a14a-ccc418ee5d43/download).
