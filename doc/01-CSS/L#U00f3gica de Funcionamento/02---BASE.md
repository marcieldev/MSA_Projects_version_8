# 02 — BASE

## Lógica de Funcionamento da Camada Base

---

## 01 — Objetivo

A pasta `base/` contém os fundamentos globais do MSA Projects.

Sua função é estabelecer uma base consistente para todas as páginas do projeto, independentemente de qual página ou componente esteja sendo utilizado.

A camada `base/` não deve conhecer detalhes específicos da Home, de projetos, de modais ou de qualquer outro componente.

Ela fornece apenas os fundamentos que serão utilizados pelas camadas superiores.

### Estrutura

```text
assets/
└── css/
    └── base/
        ├── reset.css
        ├── variaveis.css
        └── base.css
```

---

# 02 — Fluxo da Camada Base

A camada base possui uma ordem lógica de funcionamento:

```text
reset.css
     ↓
variaveis.css
     ↓
base.css
     ↓
components/
     ↓
pagina/
```

Cada arquivo possui uma responsabilidade diferente.

### Fluxo simplificado

```text
Navegador
   │
   ▼
reset.css
   │
   │ normaliza
   ▼
variaveis.css
   │
   │ fornece valores
   ▼
base.css
   │
   │ define fundamentos globais
   ▼
components/
   │
   │ define componentes reutilizáveis
   ▼
pagina/
   │
   │ define características específicas
   ▼
Página final
```

A regra principal é:

> Quanto mais próximo da base, mais genérica deve ser a regra.

---

# 03 — reset.css

## Responsabilidade

O `reset.css` remove ou normaliza comportamentos padrão fornecidos pelo navegador.

Seu objetivo é reduzir diferenças entre navegadores e criar uma superfície inicial previsível.

### Exemplos de responsabilidades

- `box-sizing`;
- margens padrão;
- paddings padrão;
- estilos padrão de listas;
- decoração padrão de links;
- comportamento básico de imagens;
- comportamento básico de mídia;
- normalização de formulários;
- normalização de botões;
- tabelas;
- comportamento básico de citações.

### Exemplo conceitual

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Essa regra não cria identidade visual.

Ela apenas estabelece um comportamento consistente para o cálculo das dimensões.

---

# 04 — variaveis.css

## Responsabilidade

O `variaveis.css` funciona como a central de configuração visual e dimensional do projeto.

Ele não estiliza elementos diretamente.

Em vez disso, fornece valores que podem ser utilizados por `base.css`, componentes e páginas.

### Exemplos

```css
--cor-fundo
--cor-texto
--cor-primaria
--cor-borda

--fonte-principal
--texto-md
--peso-normal

--espaco-4
--espaco-6

--raio-md

--sombra-md

--transicao-padrao

--z-header
--z-modal
```

### Regra fundamental

`variaveis.css` define:

```text
VALORES
```

e não:

```text
ELEMENTOS
```

Portanto, não deve possuir regras como:

```css
.header {
    ...
}
```

ou:

```css
.card {
    ...
}
```

---

# 05 — base.css

## Responsabilidade

O `base.css` utiliza as variáveis e define os fundamentos globais de apresentação e comportamento.

Ele fica entre a normalização e os componentes.

### Responsabilidades

O `base.css` pode definir:

- fundamentos tipográficos;
- comportamento global do documento;
- comportamento global de textos;
- links;
- botões em nível tipográfico;
- formulários;
- imagens;
- SVG;
- elementos HTML globais;
- acessibilidade;
- foco;
- elementos ocultos;
- comportamento global do `main`;
- políticas globais de movimento reduzido.

---

# 06 — O que o base.css não deve fazer

O `base.css` não deve conhecer componentes específicos.

Portanto, não deve conter regras específicas para:

```text
header
footer
menu
card
modal
botão específico
fundo ambiental
Home
Projetos
Comunidade
Sobre
Evolução
```

Também não deve definir:

```text
Grid específico
Flexbox específico
layout de páginas
posicionamento de componentes
animações específicas
responsividade estrutural
```

Essas responsabilidades pertencem às camadas superiores.

---

# 07 — Regra de decisão

Antes de adicionar uma regra ao `base.css`, deve-se perguntar:

> "Isso precisa funcionar no site inteiro?"

### Se SIM

A regra pode pertencer ao `base.css`.

Exemplo:

```css
p {
  line-height: var(--linha-solta);
}
```

Parágrafos existem em diferentes partes do projeto, portanto a regra pode ser global.

### Se NÃO

A regra provavelmente pertence a outro arquivo.

Por exemplo:

```css
.home-projects-grid {
    ...
}
```

Essa regra pertence à Home.

Portanto:

```text
pagina/home/
```

---

# 08 — Separação entre fundamento e componente

É importante diferenciar:

### Fundamento

Define como um elemento HTML se comporta globalmente.

Exemplo:

```css
button {
  font-family: inherit;
}
```

Isso pertence ao `base.css`.

### Componente

Define como um botão específico aparece visualmente.

Exemplo:

```css
.project-action {
    ...
}
```

Isso pertence ao componente ou à página responsável.

---

# 09 — Separação entre base e aparência

A camada base não deve tentar construir a identidade visual completa dos elementos.

Por exemplo:

```css
body {
  background-color: var(--cor-fundo);
}
```

pode existir na base.

Porém:

```css
body {
  background: radial-gradient(...);
}
```

caso esse fundo faça parte de um componente ambiental específico, deve pertencer ao componente responsável.

Isso mantém a arquitetura preparada para futuras alterações.

---

# 10 — Movimento reduzido

A camada base também possui uma responsabilidade global de acessibilidade.

A política:

```css
@media (prefers-reduced-motion: reduce);
```

fica na camada base porque deve afetar o projeto como um todo.

Ela não cria animações.

Ela apenas informa como o projeto deve reagir quando o usuário solicita redução de movimento.

### Fluxo

```text
base.css
    │
    │ política global
    ▼
prefers-reduced-motion
    │
    ├── components/
    │       └── animações
    │
    └── pagina/
            └── animações específicas
```

As animações continuam pertencendo aos arquivos responsáveis por elas.

---

# 11 — Relação com components/

Depois que a camada `base/` estabelece os fundamentos, os componentes podem utilizar esses fundamentos.

Exemplo:

```text
base/
    ↓
variáveis de cor
    ↓
componentes
    ↓
botão
```

O componente pode utilizar:

```css
background: var(--cor-primaria);
border-radius: var(--raio-md);
transition: var(--transicao-padrao);
```

Assim, o componente não precisa criar novamente esses valores.

---

# 12 — Relação com pagina/

As páginas ficam acima dos componentes.

Exemplo:

```text
base/
    ↓
components/
    ↓
pagina/home/
```

A Home pode utilizar componentes existentes e acrescentar características específicas.

Exemplo:

```text
components/botoes.css
        ↓
botão reutilizável

pagina/home/aparencia_home.css
        ↓
aparência específica utilizada pela Home
```

---

# 13 — Ordem de carregamento

A ordem recomendada dos arquivos CSS é:

```html
<!-- BASE -->

<link rel="stylesheet" href="assets/css/base/reset.css" />

<link rel="stylesheet" href="assets/css/base/variaveis.css" />

<link rel="stylesheet" href="assets/css/base/base.css" />
```

Depois:

```html
<!-- COMPONENTES -->

<link rel="stylesheet" href="assets/css/components/..." />
```

E posteriormente:

```html
<!-- PÁGINA -->

<link rel="stylesheet" href="assets/css/pagina/home/..." />
```

Essa ordem cria uma hierarquia previsível:

```text
Reset
  ↓
Valores
  ↓
Fundamentos
  ↓
Componentes
  ↓
Página
```

---

# 14 — Por que essa separação é importante?

Sem essa separação, um único arquivo pode começar a acumular responsabilidades.

Por exemplo:

```text
base.css
├── header
├── footer
├── modal
├── cards
├── Home
├── projetos
├── animações
└── responsividade
```

Isso dificulta:

- manutenção;
- localização de problemas;
- reutilização;
- alteração de componentes;
- identificação de conflitos;
- expansão do projeto.

A arquitetura do MSA Projects busca evitar esse problema.

---

# 15 — Regra de hierarquia

A estrutura deve seguir uma lógica de especialização:

```text
BASE
 │
 │ regras gerais
 ▼
COMPONENTES
 │
 │ regras reutilizáveis
 ▼
PÁGINAS
 │
 │ regras específicas
 ▼
SEÇÕES
 │
 │ regras ainda mais específicas
 ▼
ELEMENTOS
```

Quanto mais abaixo na hierarquia, mais específica pode ser a regra.

---

# 16 — Exemplo prático

Considere um botão.

### reset.css

Remove comportamentos padrão:

```css
button {
  border: 0;
  padding: 0;
  background: none;
}
```

### variaveis.css

Fornece valores:

```css
--cor-primaria
--raio-md
--altura-controle-md
```

### base.css

Mantém fundamentos:

```css
button {
  font-family: inherit;
}
```

### components/botoes.css

Cria a aparência do componente:

```css
.botao {
    ...
}
```

### pagina/home/aparencia_home.css

Pode criar uma variação específica da Home:

```css
.project-action {
    ...
}
```

Cada camada contribui com uma responsabilidade diferente.

---

# 17 — Regra contra duplicação

Antes de criar uma nova variável ou regra global, verificar se ela já existe.

Por exemplo, antes de criar:

```css
--cor-azul: #4da3ff;
```

verificar se já existe:

```css
--cor-primaria: #4da3ff;
```

O objetivo é evitar múltiplas fontes para o mesmo valor.

---

# 18 — Regra contra especificidade desnecessária

As regras globais devem permanecer simples.

Preferir:

```css
a {
    ...
}
```

em vez de:

```css
body main .project-page a {
    ...
}
```

A especificidade deve aumentar somente quando existir uma necessidade real.

Isso facilita que componentes e páginas possam sobrescrever fundamentos sem criar uma disputa excessiva entre seletores.

---

# 19 — Regra de manutenção

Antes de adicionar qualquer regra à camada `base/`, perguntar:

### Pergunta 1

```text
Isso é utilizado em todo o projeto?
```

Se não, provavelmente não é base.

### Pergunta 2

```text
Isso define um valor reutilizável?
```

Se sim, provavelmente pertence a:

```text
variaveis.css
```

### Pergunta 3

```text
Isso normaliza o navegador?
```

Se sim, provavelmente pertence a:

```text
reset.css
```

### Pergunta 4

```text
Isso define um fundamento global?
```

Se sim, provavelmente pertence a:

```text
base.css
```

### Pergunta 5

```text
Isso pertence a um componente reutilizável?
```

Se sim:

```text
components/
```

### Pergunta 6

```text
Isso pertence somente a uma página?
```

Se sim:

```text
pagina/
```

---

# 20 — Resultado esperado

A camada `base/` deve permanecer pequena, previsível e estável.

Sua função não é deixar o MSA Projects visualmente completo.

Sua função é fornecer a fundação necessária para que todas as outras camadas possam trabalhar corretamente.

A arquitetura final deve funcionar conceitualmente assim:

```text
┌───────────────────────────────┐
│          PÁGINA               │
│   regras específicas          │
└───────────────▲───────────────┘
                │
┌───────────────┴───────────────┐
│        COMPONENTES            │
│   elementos reutilizáveis     │
└───────────────▲───────────────┘
                │
┌───────────────┴───────────────┐
│            BASE               │
│ fundamentos globais           │
└───────────────▲───────────────┘
                │
┌───────────────┴───────────────┐
│          VARIÁVEIS            │
│ valores centralizados         │
└───────────────▲───────────────┘
                │
┌───────────────┴───────────────┐
│            RESET              │
│ normalização do navegador     │
└───────────────────────────────┘
```

---

# 21 — Resumo da camada

| Arquivo         | Responsabilidade            |
| --------------- | --------------------------- |
| `reset.css`     | Normalizar o navegador      |
| `variaveis.css` | Centralizar valores         |
| `base.css`      | Definir fundamentos globais |

### Regra principal

> `base/` fornece a fundação.
> `components/` fornece elementos reutilizáveis.
> `pagina/` fornece características específicas.

Essa separação deve ser preservada conforme o MSA Projects crescer.

---

# 22 — Checklist de manutenção

Antes de modificar a camada `base/`:

- [ ] A regra realmente é global?
- [ ] A regra não pertence a um componente?
- [ ] A regra não pertence a uma página?
- [ ] O valor já existe em `variaveis.css`?
- [ ] A regra não está duplicada?
- [ ] A alteração não cria dependência com a Home?
- [ ] A alteração não cria dependência com outro componente?
- [ ] A alteração não introduz layout específico?
- [ ] A alteração não cria uma animação específica?
- [ ] A alteração mantém a hierarquia da arquitetura?

Se alguma resposta indicar que a regra é específica, ela deve ser encaminhada para a camada correspondente.
