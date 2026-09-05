# MSA PROJECTS

# Lógica de Funcionamento — CSS

---

# 1. COMPONENTES

Pasta:

assets/css/components/

A pasta `components` contém os estilos dos componentes visuais
reutilizáveis do MSA Projects.

Os arquivos desta pasta não devem controlar a estrutura específica
de uma página.

Cada arquivo possui uma responsabilidade própria e pode ser utilizado
por diferentes páginas do projeto.

---

## 1.1 — header.css

### Arquivo

assets/css/components/header.css

### Responsabilidade

Controlar a aparência e o comportamento visual do cabeçalho
principal do site.

O `header.css` é responsável por elementos como:

- área geral do cabeçalho;
- container interno do cabeçalho;
- identidade/logo do MSA Projects;
- posicionamento dos elementos do cabeçalho;
- alinhamento entre logo, navegação e controles;
- espaçamentos internos;
- altura e aparência geral do header;
- comportamento visual estrutural do cabeçalho.

### Não deve controlar

- aparência detalhada dos links da navegação;
- funcionamento do menu mobile;
- conteúdo específico de uma página;
- aparência de cards;
- aparência de modais;
- rodapé.

A navegação superior possui um arquivo próprio:

menu_navegacao_superior.css

---

# 1.2 — menu_navegacao_superior.css

### Arquivo

assets/css/components/menu_navegacao_superior.css

### Responsabilidade

Controlar a aparência da navegação principal localizada no
cabeçalho.

É responsável por:

- posicionamento dos links de navegação;
- espaçamento entre os links;
- aparência dos links;
- estado normal dos links;
- estado `hover`;
- estado `active`;
- estado `focus`;
- destaque da página atual;
- aparência do botão de menu;
- comportamento visual da navegação em diferentes larguras;
- organização visual dos itens do menu.

### Estados principais

O componente deve considerar:

- estado normal;
- `hover`;
- `focus-visible`;
- `active`;
- página atual;
- menu aberto/fechado, quando aplicável.

### Não deve controlar

- estrutura geral do header;
- conteúdo das páginas;
- funcionamento JavaScript do menu;
- cards;
- modais;
- footer.

O JavaScript é responsável pelo comportamento funcional do menu.
O CSS é responsável pela apresentação visual.

---

# 1.3 — botoes.css

### Arquivo

assets/css/components/botoes.css

### Responsabilidade

Centralizar os estilos dos botões reutilizáveis do projeto.

O objetivo é evitar que cada página precise criar novamente
estilos básicos para botões.

Pode controlar:

- aparência base dos botões;
- tipografia;
- espaçamento;
- bordas;
- bordas arredondadas;
- cursor;
- transições;
- `hover`;
- `active`;
- `focus-visible`;
- estados desabilitados;
- variações visuais de botões.

### Princípio

Os estilos deste arquivo devem representar ações reutilizáveis.

Exemplos:

- botão primário;
- botão secundário;
- botão de ação;
- botão de fechar;
- botão de confirmação;
- botão de cancelamento.

Quando uma ação possui uma aparência que pode ser reutilizada
em diferentes partes do projeto, ela deve preferencialmente utilizar
uma classe de botão existente.

### Não deve controlar

- posicionamento específico de um botão dentro de uma página;
- layout de cards;
- layout de modais;
- estrutura do header;
- estrutura do footer.

A página ou o componente responsável deve controlar o posicionamento.

---

# 1.4 — cards_projeto.css

### Arquivo

assets/css/components/cards_projeto.css

### Responsabilidade

Controlar a aparência visual dos cards utilizados para representar
projetos.

O componente é responsável pela apresentação do projeto dentro
de um card.

Pode controlar:

- estrutura visual externa do card;
- fundo;
- bordas;
- arredondamento;
- sombras;
- efeitos de `hover`;
- foco;
- área da imagem;
- imagem do projeto;
- estado de imagem ausente;
- categoria;
- status;
- indicador de status;
- título;
- descrição;
- data;
- rodapé do card;
- botão/ação do card;
- efeitos visuais;
- responsividade visual do card;
- redução de movimento.

### Classes principais

O componente utiliza uma nomenclatura própria para manter
a estrutura organizada.

Exemplos:

`.projeto-card`

`.projeto-card__imagem-area`

`.projeto-card__imagem`

`.projeto-card__conteudo`

`.projeto-card__cabecalho`

`.projeto-card__categoria`

`.projeto-card__status`

`.projeto-card__titulo`

`.projeto-card__descricao`

`.projeto-card__rodape`

`.projeto-card__data`

`.projeto-card__botao`

### Importante

Este arquivo controla a aparência do card.

Ele não deve controlar o grid que distribui vários cards na página.

O grid pertence ao CSS da página ou da seção onde os cards
estão sendo utilizados.

---

# 1.5 — modais.css

### Arquivo

assets/css/components/modais.css

### Responsabilidade

Controlar a aparência visual dos modais reutilizáveis do projeto.

É responsável pela apresentação da camada modal como componente.

Pode controlar:

- camada externa do modal;
- overlay;
- container;
- cabeçalho;
- título;
- corpo;
- ações;
- botão de fechamento;
- espaçamento;
- bordas;
- sombras;
- dimensões;
- versões menores do modal;
- estados visuais;
- animações;
- responsividade;
- acessibilidade visual relacionada ao foco.

### Estrutura visual esperada

Um modal normalmente possui:

1. camada externa;
2. overlay;
3. container;
4. cabeçalho;
5. corpo;
6. área de ações.

### Funcionamento

O CSS controla apenas a apresentação.

A abertura, fechamento e gerenciamento do estado do modal
ficam sob responsabilidade do JavaScript.

Exemplos de comportamentos controlados pelo JavaScript:

- abrir modal;
- fechar modal;
- fechar pelo overlay;
- fechar pelo botão;
- fechar com `ESC`;
- controlar `aria-hidden`;
- alternar entre modais.

### Não deve controlar

- conteúdo específico do modal;
- dados do fundador;
- dados do GitHub;
- informações específicas de uma página.

Essas informações pertencem ao HTML/JavaScript.

---

# 1.6 — footer.css

### Arquivo

assets/css/components/footer.css

### Responsabilidade

Controlar a aparência do rodapé principal do site.

É responsável por:

- estrutura visual do footer;
- container interno;
- identidade do MSA Projects;
- textos do rodapé;
- links;
- espaçamento;
- alinhamento;
- bordas;
- separadores;
- estados `hover`;
- estados `focus`;
- responsividade do rodapé.

### Não deve controlar

- conteúdo específico de uma página;
- header;
- navegação superior;
- cards;
- modais;
- layout principal das páginas.

O footer deve funcionar como um componente reutilizável
em diferentes páginas.

---

# 2. RELAÇÃO ENTRE OS COMPONENTES

Os componentes trabalham juntos, mas possuem responsabilidades
separadas.

A divisão principal é:

header.css
↓
estrutura visual do cabeçalho

menu_navegacao_superior.css
↓
navegação dentro do cabeçalho

botoes.css
↓
ações e botões reutilizáveis

cards_projeto.css
↓
representação visual dos projetos

modais.css
↓
janelas modais reutilizáveis

footer.css
↓
estrutura visual do rodapé

---

# 3. COMPONENTES × PÁGINAS

Os componentes são reutilizáveis.

Por exemplo:

A Home pode utilizar:

- header;
- menu;
- cards;
- botões;
- modais;
- footer.

A página de projetos pode utilizar:

- header;
- menu;
- cards;
- botões;
- modais;
- footer.

Uma página sobre o MSA pode utilizar:

- header;
- menu;
- botões;
- modais;
- footer.

Cada página adiciona seus próprios estilos através da pasta
`paginas/`.

---

# 4. SEPARAÇÃO DE RESPONSABILIDADES

A arquitetura CSS segue uma divisão entre:

## Base

Define fundamentos gerais do projeto.

Exemplos:

- reset;
- variáveis;
- estilos globais.

---

## Components

Define componentes reutilizáveis.

Exemplos:

- header;
- navegação;
- botões;
- cards;
- modais;
- footer.

---

## Páginas

Define características específicas de cada página.

Exemplos:

- estrutura da Home;
- aparência da Home;
- estrutura da página de projetos;
- aparência da página de projetos.

---

# 5. REGRA PRINCIPAL

Um componente deve responder principalmente à pergunta:

"Como este elemento deve aparecer?"

Enquanto o CSS da página deve responder:

"Como estes elementos devem ser organizados nesta página?"

Exemplo:

`cards_projeto.css`

define:

"Como um card de projeto deve parecer?"

Enquanto:

`estrutura_home.css`

define:

"Onde os cards ficam dentro da Home?"

---

# 6. PRINCÍPIO DE REUTILIZAÇÃO

Sempre que uma característica visual puder ser reutilizada
em diferentes páginas, ela deve preferencialmente pertencer
a `components`.

Sempre que uma característica existir apenas por causa
da organização de uma página específica, ela deve pertencer
a `paginas`.

Isso evita:

- duplicação de CSS;
- estilos conflitantes;
- arquivos muito grandes;
- dependência excessiva entre páginas;
- dificuldade de manutenção.

---

# 7. RESPONSABILIDADE DO JAVASCRIPT

O CSS dos componentes não deve assumir responsabilidades
de lógica de aplicação.

O JavaScript controla comportamentos como:

- abrir e fechar menus;
- abrir e fechar modais;
- carregar projetos;
- gerar cards;
- carregar dados JSON;
- alterar estados;
- navegação dinâmica.

O CSS controla:

- aparência;
- posicionamento visual;
- espaçamento;
- cores;
- tipografia;
- bordas;
- sombras;
- animações visuais;
- responsividade visual.

---

# 8. RESUMO

| Arquivo                       | Responsabilidade                          |
| ----------------------------- | ----------------------------------------- |
| `header.css`                  | Estrutura visual do cabeçalho             |
| `menu_navegacao_superior.css` | Aparência e estados da navegação superior |
| `botoes.css`                  | Botões e ações reutilizáveis              |
| `cards_projeto.css`           | Aparência dos cards de projetos           |
| `modais.css`                  | Estrutura visual dos modais               |
| `footer.css`                  | Estrutura visual do rodapé                |

---

# 9. REGRA DE MANUTENÇÃO

Antes de adicionar uma nova regra CSS, verificar:

1. Esta regra pertence a um componente reutilizável?
2. Esta regra pertence somente a uma página?
3. Ela já existe em outro arquivo?
4. Ela pode ser reutilizada através de uma classe existente?
5. Ela está criando uma dependência desnecessária?

A prioridade deve ser:

Reutilização
→ Separação de responsabilidades
→ Clareza
→ Manutenção
→ Evitar duplicação

---

# 10. ESTADO ATUAL

A pasta `components` está estruturada com os seguintes componentes:

- `header.css`
- `menu_navegacao_superior.css`
- `botoes.css`
- `cards_projeto.css`
- `modais.css`
- `footer.css`

Esses arquivos formam a camada de componentes visuais
reutilizáveis do MSA Projects.
