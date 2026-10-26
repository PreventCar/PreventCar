# Revisão bibliográfica do PreventCar

**Data da apuração:** 26 de outubro de 2026
**Tipo de estudo:** revisão exploratória da literatura

## 1. Delimitação e fontes

Esta revisão reúne as fontes bibliográficas levantadas para fundamentar o
PreventCar, sistema de gerenciamento de manutenção preventiva de veículos
automotores. O foco está em gestão de manutenção, alertas, gestão de frotas,
telemetria, manutenção preditiva e segurança viária.

Esta análise é exploratória. Não foi realizada uma revisão sistemática com
protocolo próprio, avaliação bibliométrica ou comparação estatística entre os
estudos. As interpretações devem ser confirmadas pela leitura integral das
fontes antes da versão final do artigo.

## 2. Síntese da literatura

A manutenção de veículos depende de planejamento, histórico de serviços,
controle de componentes e informações confiáveis. Campos e Belhot (1994)
relacionam a gestão de frotas à informatização, ao planejamento e ao apoio à
decisão. Sem um registro organizado, o usuário pode perder prazos, repetir
serviços ou não identificar problemas recorrentes.

Silva e Silva apresentam um aplicativo para gerenciamento de revisões e
manutenções com plano de manutenção, quilometragem e alertas. Essa abordagem é
diretamente relacionada ao PreventCar, que também pretende centralizar o
histórico e avisar o usuário sobre serviços próximos ou pendentes.

Barreiro-Zambrano, Martinez-Parrales e López-Chila descrevem um sistema
integrado de manutenção preventiva e alertas para veículos leves, utilizando
recursos como GPS, comunicação móvel e armazenamento de informações. O estudo
reforça a utilidade de alertas associados à distância percorrida, embora o
PreventCar inicialmente dependa dos dados informados pelo usuário.

Outros trabalhos avançam para manutenção preditiva e automonitoramento. Solanki
e Dhall discutem uma abordagem de carro conectado baseada em IoT; Rögnvaldsson,
Nowaczyk e Byttner estudam automonitoramento de frotas; Killeen propõe
manutenção preditiva baseada em conhecimento e dados de sensores; e Vilhalba
descreve uma solução IoT com OBD-II, nuvem e notificações. Essas propostas
indicam possibilidades de evolução, mas envolvem hardware, conectividade,
telemetria e dados em quantidade e qualidade superiores aos disponíveis no
escopo inicial do PreventCar.

A literatura também relaciona a condição do veículo à segurança viária.
Mikulić, Bošković e Zovak analisam a influência do estilo de condução e da
manutenção na condição de circulação dos veículos. Montero-Salgado e
Muñoz-Sanz investigam fatores de falha mecânica potencialmente associados a
acidentes rodoviários no Equador. Esses estudos reforçam a relevância da
manutenção, mas não permitem afirmar que um sistema de alertas, sozinho, reduz
acidentes.

## 3. Comparativo dos trabalhos

| Trabalho | Contribuição principal | Relação com o PreventCar |
|---|---|---|
| Campos e Belhot (1994) | Gestão de manutenção de frotas, planejamento, controle e histórico. | Fundamenta o cadastro, o histórico e o apoio ao planejamento. |
| Silva e Silva | Aplicativo com plano de manutenção, quilometragem e alertas. | É a referência mais próxima da função de alertas da proposta. |
| Barreiro-Zambrano et al. (2026) | Sistema integrado de manutenção preventiva e alertas por distância, com GPS e comunicação móvel. | Reforça a utilidade de alertas por quilometragem; o uso de GPS fica fora do escopo inicial. |
| Killeen (2020) | Manutenção preditiva baseada em conhecimento e dados de sensores. | Aponta uma evolução possível, dependente de dados e validação. |
| Mikulić et al. (2020) | Relação entre estilo de condução, manutenção e condição do veículo. | Relaciona manutenção e segurança, sem validar causalidade no PreventCar. |
| Montero-Salgado e Muñoz-Sanz (2022) | Fatores de falha mecânica associados a acidentes. | Reforça a importância de registros e inspeções, sem provar efeito dos alertas. |
| Rögnvaldsson et al. (2018) | Automonitoramento de frotas com dados embarcados. | Apresenta uma abordagem avançada de telemetria para trabalhos futuros. |
| Solanki e Dhall (2017) | Arquitetura de carro conectado para manutenção preditiva. | Indica possibilidade de integração com IoT em uma etapa posterior. |
| Vilhalba (2024) | Dispositivo IoT com OBD-II, nuvem e notificações. | Tem objetivo relacionado, mas exige hardware adicional. |

## 4. Relação com o PreventCar

O PreventCar centraliza veículos, itens, quilometragem, manutenções executadas,
manutenções pendentes e problemas registrados. Também gera alertas com base no
tempo e na quilometragem informados pelo usuário.

A primeira versão não depende de sensores, OBD-II ou telemetria contínua. Essa
escolha reduz o custo e a complexidade de instalação, mas aumenta a
dependência da qualidade e da atualização dos dados inseridos. A integração
com sensores, oficinas parceiras ou modelos preditivos pode ser considerada em
etapas futuras, depois que existirem dados e critérios para validar essas
funções.

O projeto reúne, em uma solução acessível, funções que aparecem separadas na
literatura: cadastro, histórico, controle de prazos, alertas e apoio ao
planejamento da manutenção para motoristas e pequenas frotas. A proposta não
afirma que cada recurso seja inédito.

## 5. Justificativa do projeto

A literatura mostra que a manutenção envolve muitos dados e decisões. Para
usuários individuais e pequenas frotas, esses dados frequentemente ficam em
anotações, planilhas ou na memória. O PreventCar reúne essas informações em um
histórico único e envia alertas de manutenção.

As soluções com sensores e telemetria podem exigir equipamentos, conectividade e
conhecimento técnico. Por isso, a primeira versão usa informações registradas
pelo usuário e prioriza uma implementação de menor complexidade. O sistema
apoia o planejamento; recomendações do fabricante, avaliação do mecânico,
inspeção profissional e diagnóstico continuam sendo necessários.

## 6. Limitações e lacunas

As fontes apresentam diferentes métodos, níveis de automação e contextos de
uso. Não é possível comparar diretamente seus resultados sem uma matriz
metodológica mais detalhada. Parte dos trabalhos trata de protótipos ou
arquiteturas avançadas, enquanto o PreventCar está em fase de requisitos e
modelagem.

Para fortalecer a pesquisa, recomenda-se complementar a revisão com estudos
sobre durabilidade e confiabilidade de componentes, experiência do usuário em
aplicativos automotivos, validação de alertas, comportamento de pequenas
frotas, OBD-II, IoT e manutenção baseada em condição.

Também é necessário evitar conclusões não demonstradas: a literatura não
permite afirmar que o PreventCar reduzirá acidentes, falhas ou custos antes de
testes com usuários, dados reais e acompanhamento longitudinal.

## 7. Palavras-chave

**Palavras-chave:** manutenção preventiva; manutenção veicular; gestão de
frotas; alertas de manutenção; sistema de informação.

**Termos para novas buscas:** `manutenção preditiva`, `histórico de manutenção`,
`quilometragem`, `falhas mecânicas`, `segurança viária`, `vehicle maintenance`,
`preventive maintenance`, `predictive maintenance` e `fleet management`.

## 8. Referências consultadas

- BARREIRO-ZAMBRANO, Joseph; MARTINEZ-PARRALES, Juan; LÓPEZ-CHILA, Roberto.
  **Implementation of an Integrated System for Preventive Maintenance
  Management and Alerts in Light Vehicles**. *Vehicles*, 2026. Disponível em:
  [MDPI](https://www.mdpi.com/2624-8921/8/5/100).
- CAMPOS, Fernando Celso de; BELHOT, Renato Vairo. **Gestão de manutenção de
  frotas de veículos: uma revisão**. *Gestão & Produção*, v. 1, n. 2,
  p. 171–188, 1994. Disponível em:
  [SciELO](https://www.scielo.br/j/gp/a/HgdbDz3KLWyNzVT9XccvJCb/?format=html&lang=pt).
- KILLEEN, P. **Knowledge-based predictive maintenance for fleet management**.
  2020. Tese. Disponível em:
  [University of Ottawa](https://ruor.uottawa.ca/items/95aee35e-2653-4087-b47e-0a76ab872043).
- MIKULIĆ, I.; BOŠKOVIĆ, I.; ZOVAK, G. **Effects of driving style and vehicle
  maintenance on vehicle roadworthiness**. *Promet - Traffic & Transportation*,
  2020. Disponível em: [Hrčak](https://hrcak.srce.hr/clanak/355317).
- MONTERO-SALGADO, J. P.; MUÑOZ-SANZ, J. **Identification of the mechanical
  failure factors with potential influencing road accidents in Ecuador**.
  *International Journal of Environmental Research and Public Health*, 2022.
  Disponível em: [MDPI](https://www.mdpi.com/1660-4601/19/13/7787).
- RÖGNVALDSSON, T.; NOWACZYK, S.; BYTTNER, S. **Self-monitoring for
  maintenance of vehicle fleets**. *Data Mining and Knowledge Discovery*, 2018.
  Disponível em:
  [Springer](https://link.springer.com/article/10.1007/s10618-017-0538-6).
- SILVA, Igor Soares dos Santos; SILVA, Guilherme Rodrigues Veloso da.
  **Aplicativo de alerta e gerenciamento de revisões e manutenções veiculares**.
  Universidade Santa Cecília — UNISANTA. Disponível em:
  [CONIC-Semesp](https://www.conic-semesp.org.br/anais/files/2018/trabalho-1000000187.pdf).
- SOLANKI, V. K.; DHALL, R. **An IoT based predictive connected car maintenance
  approach**. 2017. Disponível em:
  [repositório institucional](https://reunir.unir.net/items/61a37918-e1d0-4d13-bc39-d3d96483c7ba).
- VILHALBA, E. C. **SensorNet AutoCare: dispositivo IoT para prevenção da
  manutenção de veículos**. 2024. Disponível em:
  [UNIPAMPA](https://repositorio.unipampa.edu.br/bitstreams/1acc2b9f-f578-47d8-a14a-ccc418ee5d43/download).
