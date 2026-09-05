/* ==========================================================
MAHANIMO
Arquivo: destaques.js
Função: Controle da seção Destaques
========================================================== */


/* ==========================================================
CONFIGURAÇÕES
========================================================== */

const LIMITE_DESTAQUES_DESKTOP = 4;

const LIMITE_DESTAQUES_MOBILE = 10;


/* ==========================================================
ELEMENTO DA SEÇÃO
========================================================== */

const destaqueGrid = document.querySelector(
  ".destaque-content-grid"
);


/* ==========================================================
OBTER CONTEÚDOS RECENTES
========================================================== */

function obterConteudosRecentes() {

  const conteudosOrdenados = [...conteudos];

  conteudosOrdenados.sort((a, b) => {

    return (
      new Date(b.dataAdicao) -
      new Date(a.dataAdicao)
    );

  });

  return conteudosOrdenados;

}


/* ==========================================================
CRIAR CARD DE DESTAQUE
========================================================== */

function criarCardDestaque(conteudo) {

  const article =
    document.createElement("article");


  /* ========================================================
  CLASSE DO CARD
  ======================================================== */

  article.className =
    "content-card";


  /* ========================================================
  IDENTIFICAÇÃO DO CONTEÚDO

  O ID será utilizado posteriormente
  pelo sistema de modal.
  ======================================================== */

  article.dataset.id =
    conteudo.id;


  /* ========================================================
  ESTRUTURA DO CARD
  ======================================================== */

  article.innerHTML = `

    <div
      class="card-image"
      data-destaque-id="${conteudo.id}"
    >

      <img
        src="${conteudo.imagem}"
        alt="${conteudo.titulo}"
      />

      <span class="card-type">
        ${conteudo.tipo}
      </span>

    </div>


    <div class="card-content">

      <h3>
        ${conteudo.titulo}
      </h3>

      <p>
        ${conteudo.descricaoCurta}
      </p>

      <button
        type="button"
        class="card-button"
        data-destaque-id="${conteudo.id}"
      >
        Ver detalhes
      </button>

    </div>

  `;


  /* ========================================================
  RETORNAR CARD
  ======================================================== */

  return article;

}


/* ==========================================================
RENDERIZAR DESTAQUES
========================================================== */

function renderizarDestaques() {


  /*
  Verifica se a seção existe antes de executar.
  */

  if (!destaqueGrid) {

    console.warn(
      "Seção de Destaques não encontrada."
    );

    return;

  }


  /*
  Obtém todos os conteúdos ordenados
  do mais recente para o mais antigo.
  */

  const conteudosRecentes =
    obterConteudosRecentes();


  /*
  Limpa somente a área dos cards de Destaques.

  Nenhuma outra seção da Home é afetada.
  */

  destaqueGrid.innerHTML = "";


  /*
  Cria os destaques.

  Neste momento usamos o limite máximo
  de 10 conteúdos.

  A quantidade visual apresentada em cada
  tamanho de tela continuará sendo controlada
  pelo CSS.

  Desktop:
  4 cards visíveis.

  Tablet/celular:
  até 10 cards disponíveis para
  clicar e arrastar.
  */

  const destaques =
    conteudosRecentes.slice(
      0,
      LIMITE_DESTAQUES_MOBILE
    );


  /*
  Adiciona cada card ao grid.
  */

  destaques.forEach(
    (conteudo) => {

      const card =
        criarCardDestaque(conteudo);

      destaqueGrid.appendChild(card);

    }
  );


  /*
  Mostra no console os destaques
  que foram renderizados.
  */

  console.log(
    "Destaques renderizados:",
    destaques
  );

}


/* ==========================================================
INICIALIZAÇÃO
========================================================== */

renderizarDestaques();