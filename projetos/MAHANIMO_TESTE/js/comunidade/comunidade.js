/* ==========================================================
MAHANIMO
Arquivo: comunidade.js
Função: Controle da comunidade e modal do Discord
========================================================== */


/* ==========================================================
ELEMENTOS
========================================================== */

const communityButton =
  document.getElementById("communityButton");

const communityModal =
  document.getElementById("communityModal");

const communityModalClose =
  document.getElementById("communityModalClose");


/* ==========================================================
ABRIR MODAL
========================================================== */

function abrirModalComunidade() {

  if (!communityModal) {
    return;
  }

  communityModal.classList.add("is-open");

  communityModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


/* ==========================================================
FECHAR MODAL
COM ANIMAÇÃO DE SAÍDA
========================================================== */

function fecharModalComunidade() {

  if (!communityModal) {
    return;
  }


  /*
  Evita iniciar a animação
  se o modal já estiver fechado.
  */

  if (
    !communityModal.classList.contains(
      "is-open"
    )
  ) {
    return;
  }


  /*
  Inicia a animação de saída.
  */

  communityModal.classList.add(
    "is-closing"
  );


  /*
  Aguarda a animação terminar
  antes de esconder completamente
  o modal.
  */

  setTimeout(
    function () {

      communityModal.classList.remove(
        "is-open"
      );

      communityModal.classList.remove(
        "is-closing"
      );

      communityModal.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.classList.remove(
        "modal-open"
      );

    },
    300
  );

}


/* ==========================================================
EVENTOS
========================================================== */

if (communityButton) {

  communityButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      abrirModalComunidade();

    }
  );

}


if (communityModalClose) {

  communityModalClose.addEventListener(
    "click",
    fecharModalComunidade
  );

}


document.addEventListener(
  "click",
  function (event) {

    if (
      event.target.hasAttribute(
        "data-close-community-modal"
      )
    ) {

      fecharModalComunidade();

    }

  }
);


/* ==========================================================
TECLA ESC
========================================================== */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      communityModal &&
      communityModal.classList.contains(
        "is-open"
      )
    ) {

      fecharModalComunidade();

    }

  }
);
