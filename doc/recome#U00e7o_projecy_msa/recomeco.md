# Recomeço do Projeto MSA Projects

> Documento de registro do recomeço, das decisões e do planejamento do novo MSA Projects.

---

## 1. Motivo do recomeço

O projeto MSA Projects já possuía uma estrutura e uma identidade visual em desenvolvimento. Porém, durante a análise do resultado, surgiu a percepção de que o projeto ainda não transmitia com força suficiente a identidade desejada:

- sofisticado;
- profissional;
- tecnológico;
- moderno;
- interessante e não genérico;
- com personalidade própria;
- moderno sem depender de tendências que possam envelhecer rapidamente.

Por isso, foi tomada a decisão de realizar um **recomeço estrutural e visual**, sem abandonar os conhecimentos e ideias já desenvolvidos.

O objetivo não é simplesmente "fazer outro site", mas construir uma versão mais coerente com a proposta real do MSA Projects.

---

## 2. O que é o MSA Projects

O MSA Projects será tratado como um **portal próprio de projetos, conhecimento e evolução**.

A ideia é que ele não funcione apenas como um portfólio tradicional.

Cada projeto deverá poder apresentar:

- o que foi desenvolvido;
- por que foi desenvolvido;
- como foi analisado;
- quais tecnologias foram utilizadas;
- como a solução foi construída;
- quais dificuldades apareceram;
- quais decisões foram tomadas;
- o que foi aprendido;
- como o projeto evoluiu;
- quais versões ou etapas existiram.

Assim, o MSA Projects também servirá como um registro da evolução do desenvolvimento e do conhecimento adquirido.

---

## 3. Referências de inspiração

As referências analisadas representam ideias diferentes que poderão ser combinadas sem transformar o MSA em uma cópia de nenhum desses sites.

### Wikipédia

Ideia principal absorvida:

> "Aqui existe informação organizada."

Aspectos de interesse:

- organização da informação;
- hierarquia de conteúdo;
- facilidade para encontrar informações;
- estrutura de páginas;
- navegação orientada ao conteúdo.

### YouTube

Ideia principal absorvida:

> Conteúdo organizado em cards e categorias.

Aspectos de interesse:

- apresentação visual dos projetos;
- organização por cards;
- possibilidade de categorias;
- pesquisa;
- descoberta de conteúdo.

### Opera GX

Ideia principal absorvida:

> "Isso é tecnológico, moderno e possui personalidade."

Aspectos de interesse:

- identidade tecnológica;
- elementos visuais marcantes;
- aparência gamer;
- contraste;
- sensação de produto próprio.

### Sites de anime, webtoons e quadrinhos

Essas referências contribuíram principalmente para observar:

- organização de conteúdos;
- navegação;
- cards;
- capas/imagens;
- categorias;
- apresentação de grandes quantidades de informação.

Essas referências são apenas inspiração. O MSA Projects deverá possuir identidade própria.

---

## 4. Identidade desejada

A identidade visual deverá transmitir simultaneamente:

- **sofisticação**;
- **profissionalismo**;
- **tecnologia**;
- **modernidade**;
- **personalidade**;
- **organização da informação**;
- **evolução**;
- **conhecimento**.

Também existe uma intenção de incorporar uma sensação **moderna com elementos rústicos**, evitando uma estética excessivamente futurista ou dependente de efeitos.

A aparência gamer/tecnológica inspirada no Opera GX será utilizada como referência de linguagem visual, não como cópia estética.

---

## 5. Princípios visuais

O novo projeto deverá seguir alguns princípios:

### 5.1. Não parecer genérico

O MSA precisa possuir elementos visuais próprios e reconhecíveis.

### 5.2. Não exagerar nos efeitos

Efeitos visuais deverão servir à experiência e à identidade, não apenas decorar a página.

### 5.3. Ser moderno sem envelhecer rapidamente

A interface deve evitar depender excessivamente de tendências passageiras.

### 5.4. Informação em primeiro lugar

A estética deve melhorar a apresentação da informação, e não dificultar sua leitura.

### 5.5. Hierarquia visual

Títulos, categorias, metadados, descrições e ações deverão possuir níveis visuais claramente diferentes.

---

## 6. Paleta de cores

A paleta de cores definida durante a análise deverá ser registrada e consolidada antes da implementação final do CSS.

### Cores principais

- **Preto / tons muito escuros:** estrutura, fundo e profundidade.
- **Branco / tons claros:** textos principais e contraste.
- **Roxo:** identidade tecnológica e destaque.
- **Ciano / azul-esverdeado:** tecnologia, interação e elementos de destaque.

### Observação

As cores não deverão ser aplicadas indiscriminadamente.

A intenção é trabalhar com:

- base escura;
- textos claros;
- cores de destaque utilizadas de maneira controlada;
- estados de interação claramente perceptíveis.

A definição dos valores HEX/RGB exatos será consolidada na etapa de identidade visual e posteriormente transferida para `variaveis.css`.

---

## 7. Arquitetura do projeto

A regra fundamental continuará sendo:

> **Cada arquivo possui uma responsabilidade clara.**

O CSS não deverá assumir responsabilidades de JavaScript.

O JavaScript não deverá assumir responsabilidades de CSS.

O HTML deverá representar a estrutura e o significado do conteúdo.

Os dados deverão ser separados da apresentação sempre que isso trouxer benefício para manutenção e evolução.

---

## 8. Tecnologias previstas

### HTML5

Responsável por:

- estrutura;
- semântica;
- acessibilidade estrutural;
- organização do conteúdo.

### CSS3

Responsável por:

- identidade visual;
- layout;
- tipografia;
- espaçamento;
- responsividade;
- animações visuais.

### JavaScript

Responsável por:

- interações;
- menu mobile;
- modais;
- pesquisa;
- filtros;
- carregamento de dados;
- atualização dinâmica de conteúdo;
- automações do frontend.

### JSON

Poderá ser utilizado inicialmente para organizar dados como:

- projetos;
- tecnologias;
- categorias;
- etapas;
- conhecimentos;
- informações de evolução.

### Java

Poderá ser incorporado posteriormente como backend da aplicação, utilizando a arquitetura MVC estudada no projeto.

Possível evolução:

`Java → MVC → JPA → Banco de dados`

### Banco de dados

Não será obrigatório na primeira etapa.

Poderá ser incorporado quando a quantidade e a dinâmica dos dados justificarem sua utilização.

### Python

Python poderá ser incorporado posteriormente para funções em que realmente agregue valor, como:

- automações;
- processamento de dados;
- geração ou organização de informações;
- análise de dados;
- ferramentas auxiliares do projeto.

Python não será incluído apenas para aumentar a quantidade de tecnologias utilizadas.

---

## 9. Arquitetura de dados planejada

Uma possível evolução será:

```text
HTML
  ↓
JavaScript
  ↓
JSON
  ↓
Java / MVC
  ↓
JPA
  ↓
Banco de dados
```

Essa evolução permitirá começar de maneira simples e aumentar a complexidade conforme o projeto necessitar.

---

## 10. Estrutura conceitual dos projetos

Cada projeto poderá possuir informações como:

```text
Projeto
│
├── Identificação
├── Descrição
├── Objetivo
├── Categoria
├── Tecnologias
├── Status
├── Imagens
├── Desenvolvimento
├── Etapas
├── Problemas encontrados
├── Soluções
├── Decisões
├── Aprendizados
├── Versões
├── Código
└── Evolução
```

Essa estrutura ainda é uma proposta e poderá ser refinada antes da implementação.

---

## 11. Pesquisa

Uma barra de pesquisa será considerada parte importante do portal.

A pesquisa poderá futuramente procurar por:

- projetos;
- tecnologias;
- categorias;
- conhecimentos;
- etapas;
- palavras-chave.

A implementação poderá começar no frontend e posteriormente ser integrada ao backend.

---

## 12. Cards

Os cards serão uma das formas principais de apresentação dos projetos.

A inspiração vem principalmente da forma como plataformas de conteúdo organizam grandes quantidades de informações.

Porém, os cards do MSA deverão priorizar informações relevantes, como:

- imagem;
- nome;
- categoria;
- descrição;
- tecnologias;
- status;
- etapa;
- ação para visualizar o projeto.

---

## 13. Responsividade

A interface deverá funcionar em:

- computadores;
- notebooks;
- tablets;
- celulares.

O menu mobile deverá ser tratado como componente próprio.

As regras gerais de adaptação poderão permanecer em um arquivo específico de responsividade, evitando espalhar regras responsivas desnecessariamente pelos demais arquivos.

---

## 14. Fundo e vídeo

O uso de vídeo de fundo foi considerado, porém **não está definido como parte obrigatória do novo projeto**.

A decisão inicial é desenvolver uma identidade que funcione muito bem sem vídeo.

Posteriormente poderá ser realizado um teste para verificar se um elemento dinâmico realmente acrescenta valor.

---

## 15. Ordem planejada de desenvolvimento

O novo projeto deverá ser desenvolvido seguindo aproximadamente esta ordem:

1. Definir arquitetura.
2. Definir organização das pastas.
3. Definir responsabilidades dos arquivos.
4. Revisar e adaptar o HTML.
5. Definir estrutura dos dados.
6. Criar os dados iniciais em JSON.
7. Implementar JavaScript.
8. Implementar automações e interações.
9. Preparar a integração futura com Java/MVC.
10. Avaliar JPA e banco de dados.
11. Definir onde Python realmente agregará valor.
12. Criar a identidade visual em CSS.
13. Implementar responsividade.
14. Testar acessibilidade.
15. Realizar testes gerais.
16. Refinar a interface.

---

## 16. Regra para as próximas etapas

Nenhuma tecnologia deverá ser adicionada apenas por estética ou por quantidade.

Antes de adicionar qualquer recurso, deverá existir uma resposta para:

> **"Qual problema isso resolve no MSA Projects?"**

A mesma regra vale para:

- efeitos;
- animações;
- vídeos;
- bibliotecas;
- frameworks;
- linguagens;
- banco de dados;
- APIs.

---

## 17. Estado atual

### Decidido

- Recomeçar a estrutura do MSA Projects.
- Manter a ideia de responsabilidades separadas por arquivo.
- Utilizar a Wikipédia como inspiração para organização da informação.
- Utilizar o YouTube como inspiração para organização de conteúdo em cards.
- Utilizar o Opera GX como inspiração para personalidade tecnológica/gamer.
- Buscar uma aparência sofisticada, profissional, tecnológica e moderna.
- Preparar a estrutura para dados e automações antes de finalizar o CSS.
- Não considerar o vídeo de fundo obrigatório.
- Manter possibilidade de evolução para Java/MVC/JPA.
- Avaliar Python para automações e ferramentas que realmente agreguem valor.

### Em definição

- Valores exatos da paleta de cores.
- Estrutura definitiva das pastas.
- Modelo definitivo dos dados.
- Estrutura final do HTML.
- Responsabilidades exatas de cada arquivo JavaScript.
- Papel específico do Python.
- Momento de introdução do banco de dados.

---

## 18. Próximos passos

O próximo trabalho deverá começar pela **arquitetura do novo projeto**.

Antes de estilizar, serão definidos:

1. estrutura de pastas;
2. arquivos;
3. responsabilidade de cada arquivo;
4. estrutura de dados;
5. fluxo entre HTML, JavaScript e dados;
6. preparação para futura integração com Java;
7. estrutura HTML definitiva.

Somente depois dessa base será iniciada a construção visual detalhada.

---

## 19. Visão do resultado esperado

O objetivo final é que o MSA Projects seja percebido como:

> **um portal próprio de projetos, conhecimento e evolução técnica, com identidade visual sofisticada, tecnológica e moderna, informação organizada e uma estrutura preparada para crescer de um projeto frontend para uma aplicação web completa.**

O projeto não deverá parecer apenas um portfólio.

Deverá transmitir a ideia de que existe uma **história de desenvolvimento por trás de cada projeto**.
