# MSA Projects

> Portal pessoal para organização, apresentação e evolução dos meus projetos.

**Versão:** `0.1.0`  
**Status:** 🟢 Em desenvolvimento

## 📖 Sobre o projeto

O **MSA Projects** é um portal pessoal criado para reunir, organizar e apresentar projetos, experimentos, ideias e experiências de desenvolvimento em um único ambiente.

Esta versão representa uma reescrita e evolução do MSA Projects original. A proposta é reconstruir o projeto com uma estrutura mais organizada, separação de responsabilidades, dados externos ao HTML, componentes reutilizáveis e espaço para crescimento.

## 🎯 Objetivo

Criar um ambiente centralizado para organizar, desenvolver e apresentar projetos de forma clara, organizada, expansível e de fácil manutenção. As categorias são abertas à evolução e podem incluir projetos colaborativos, educacionais, acadêmicos, experimentais, da comunidade, do fundador e outras classificações que surgirem.

## 🧠 Aprendizado de arquitetura

O projeto aplica princípios do **MVC como referência arquitetural para o frontend**, sem depender de um framework MVC tradicional:

```text
              MSA PROJECTS
                   MVC
                    │
        ┌───────────┼───────────┐
        │           │           │
      Model       View      Controller
        │           │           │
       JSON      HTML/CSS       JS
```

- **Model:** JSONs que armazenam os dados.
- **View:** HTML e CSS.
- **Controller:** JavaScript que carrega, trata e apresenta os dados.

A ideia central é: **quem apresenta os dados não precisa saber de onde eles vieram.**

## 🗃️ Dados

Atualmente o MSA Projects utiliza **JSON como fonte de dados**. Os projetos são organizados por iniciais, categorias e subcategorias, evitando concentrar tudo em um único arquivo.

O carregamento é feito pelo JavaScript e os cards, filtros, estatísticas e páginas de detalhes são construídos a partir dos dados.

## 🔎 Pesquisa

A pesquisa global do cabeçalho direciona o termo pesquisado para o catálogo de projetos. A página de projetos aplica o filtro sobre nome, título, descrição, categoria, tags e tecnologias, inclusive ignorando diferenças de acentuação.

## 👤 Perfil do fundador

O projeto possui uma área lateral de perfil e um modal detalhado. As informações são carregadas dos JSONs em `data/model_fundador/`, incluindo biografia, formação, interesses, tecnologias, forma de aprendizado, trajetória, experiências pessoais, disciplinas acadêmicas e estudos externos.

## 🐍 Administração local com Python

O projeto **não utiliza Java, Spring Boot ou banco de dados nesta etapa**.

O Python é utilizado como uma camada administrativa local e leve. O painel pode ser iniciado com:

```text
INICIAR_ADMIN.bat
```

Depois, acesse o endereço mostrado no terminal. O servidor administrativo escuta somente em `127.0.0.1`, portanto não foi pensado para publicação na internet.

O painel permite:

- adicionar projetos;
- remover projetos;
- criar categorias quando necessário;
- atualizar os índices JSON;
- criar backups automáticos antes das alterações;
- exigir um token temporário exibido no terminal.

Isso oferece uma proteção básica para um painel que deve funcionar apenas localmente. **Não é uma solução de segurança para produção ou para exposição pública.**

## 📂 Estrutura principal

```text
MSA Projects/
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
├── data/
│   ├── configuracoes/
│   ├── conhecimento/
│   ├── model_fundador/
│   ├── navegacao/
│   └── projetos/
├── doc/
├── paginas/
│   └── pagina_projetos/
├── projetos/
├── scripts/
│   └── python/
├── index.html
├── sobre.html
├── evolucao.html
├── INICIAR_FRONTEND.bat
├── INICIAR_ADMIN.bat
└── README.md
```

## 🎨 Organização visual

A interface atual segue uma direção visual própria, inspirada em um **portfólio editorial/oficina de projetos**, evitando a aparência de uma plataforma SaaS genérica.

A organização visual privilegia:

- hierarquia tipográfica;
- espaços em branco;
- blocos de conteúdo com bordas discretas;
- cores terrosas e verdes;
- cards simples;
- navegação objetiva;
- perfil lateral do fundador.

## 🧩 Componentes reutilizáveis

Entre os componentes atuais estão:

- Header;
- Menu de navegação;
- Pesquisa;
- Botões;
- Cards de projetos;
- Perfil do fundador;
- Modal de perfil;
- Modais de configuração;
- Footer.

## 🗄️ Banco de dados

**Não será utilizado banco de dados nesta etapa.**

A proposta atual é trabalhar com arquivos JSON. No futuro, se houver necessidade real, a arquitetura poderá ser adaptada para API, banco ou outra tecnologia sem obrigatoriamente reconstruir a interface.

## 🚀 Tecnologias atuais

- HTML5
- CSS3
- JavaScript
- JSON
- Python (administração local e processamento dos dados)

Possíveis tecnologias futuras poderão ser adicionadas conforme a necessidade do projeto.

## 📈 Evolução

```text
Planejamento
     ↓
Estrutura
     ↓
Arquitetura
     ↓
Componentes
     ↓
Dados
     ↓
JavaScript
     ↓
Integração
     ↓
Interface
     ↓
Testes
     ↓
Evolução
```

## 🎓 Projeto como experiência de aprendizado

O MSA Projects também funciona como um projeto prático de aprendizado, aplicando conhecimentos relacionados a arquitetura de sistemas, separação de responsabilidades, MVC, JSON, JavaScript, HTML, CSS, Python e organização de projetos.

A documentação registra não apenas o código, mas também as decisões e motivos por trás da construção.

## 📌 Estado atual

O projeto está em desenvolvimento. A prioridade atual é consolidar o frontend, catálogo, pesquisa, perfil do fundador, projeto em destaque e administração local antes de adicionar novas camadas de infraestrutura.

> **MSA Projects — Criando ideias, experiências e projetos digitais.**
