/* ==========================================================
MAHANIMO
Arquivo: conteudos.js
Função: Base central de conteúdos do MAHANIMO
========================================================== */


/* ==========================================================
LISTA DE CONTEÚDOS
========================================================== */

const conteudos = [

  /* ========================================================
  ANIME 01
  ======================================================== */

  {
    id: 1,

    /* IDENTIFICAÇÃO */

    titulo: "Nome do Anime",
    tipo: "anime",


    /* IMAGEM */

    imagem:
      "assets/img/animes/anime-01.webp",


    /* CARD */

    descricaoCurta:
      "Uma breve descrição do anime que aparecerá no card.",


    /* INFORMAÇÕES COMPLETAS */

    sinopse:
      "Aqui ficará a sinopse completa do anime. Este texto será exibido posteriormente no modal de detalhes da obra.",

    ano: 2026,

    episodios: 24,

    temporadas: 2,

    status:
      "Em andamento",


    /* CONTROLE DOS DESTAQUES */

    dataAdicao:
      "2026-08-01",


    /* PÁGINA INTERNA DO MAHANIMO */

    pagina:
      "pages/anime/",


    /* PLATAFORMAS EXTERNAS */

    plataformas: [

      {
        nome:
          "Plataforma A",

        temporadas: [

          {
            nome:
              "Temporada 1",

            url:
              "https://exemplo.com/anime/temporada-1"
          },

          {
            nome:
              "Temporada 2",

            url:
              "https://exemplo.com/anime/temporada-2"
          }

        ]

      }

    ]

  },


  /* ========================================================
  ANIME 02
  ======================================================== */

  {
    id: 2,

    titulo:
      "Nome do Anime 02",

    tipo:
      "anime",

    imagem:
      "assets/img/animes/anime-02.webp",

    descricaoCurta:
      "Novo anime adicionado ao MAHANIMO.",

    sinopse:
      "Sinopse completa do segundo anime de teste.",

    ano: 2026,

    episodios: 12,

    temporadas: 1,

    status:
      "Finalizado",

    dataAdicao:
      "2026-08-02",

    pagina:
      "pages/anime/",

    plataformas: [

      {
        nome:
          "Plataforma B",

        temporadas: [

          {
            nome:
              "Assistir",

            url:
              "https://exemplo.com/anime-02"
          }

        ]

      }

    ]

  },


  /* ========================================================
  MANGÁ
  ======================================================== */

  {
    id: 3,

    titulo:
      "Nome do Mangá",

    tipo:
      "manga",

    imagem:
      "assets/img/mangas/manga-01.webp",

    descricaoCurta:
      "Mangá em destaque no MAHANIMO.",

    sinopse:
      "Sinopse completa do mangá.",

    ano: 2026,

    capitulos: 150,

    status:
      "Em andamento",

    dataAdicao:
      "2026-08-03",

    pagina:
      "pages/manga/",

    plataformas: [

      {
        nome:
          "Plataforma de Leitura",

        temporadas: [

          {
            nome:
              "Ler capítulos",

            url:
              "https://exemplo.com/manga"
          }

        ]

      }

    ]

  },


  /* ========================================================
  MANHWA
  ======================================================== */

  {
    id: 4,

    titulo:
      "Nome do Manhwa",

    tipo:
      "manhwa",

    imagem:
      "assets/img/manhwas/manhwa-01.webp",

    descricaoCurta:
      "Manhwa em destaque no MAHANIMO.",

    sinopse:
      "Sinopse completa do manhwa.",

    ano: 2026,

    capitulos: 200,

    status:
      "Em andamento",

    dataAdicao:
      "2026-08-04",

    pagina:
      "pages/manhwa/",

    plataformas: [

      {
        nome:
          "Plataforma de Leitura",

        temporadas: [

          {
            nome:
              "Ler capítulos",

            url:
              "https://exemplo.com/manhwa"
          }

        ]

      }

    ]

  },


  /* ========================================================
  NOVEL
  ======================================================== */

  {
    id: 5,

    titulo:
      "Nome da Novel",

    tipo:
      "novel",

    imagem:
      "assets/img/novels/novel-01.webp",

    descricaoCurta:
      "Novel em destaque no MAHANIMO.",

    sinopse:
      "Sinopse completa da novel.",

    ano: 2026,

    volumes: 10,

    status:
      "Em andamento",

    dataAdicao:
      "2026-08-05",

    pagina:
      "pages/novel/",

    plataformas: [

      {
        nome:
          "Plataforma de Leitura",

        temporadas: [

          {
            nome:
              "Ler Novel",

            url:
              "https://exemplo.com/novel"
          }

        ]

      }

    ]

  },


  /* ========================================================
  FILME
  ======================================================== */

  {
    id: 6,

    titulo:
      "Nome do Filme",

    tipo:
      "filme",

    imagem:
      "assets/img/filmes/filme-01.webp",

    descricaoCurta:
      "Filme em destaque no MAHANIMO.",

    sinopse:
      "Sinopse completa do filme.",

    ano: 2026,

    duracao:
      "2h 10min",

    status:
      "Disponível",

    dataAdicao:
      "2026-08-06",

    pagina:
      "pages/filmes/",

    plataformas: [

      {
        nome:
          "Plataforma de Filmes",

        temporadas: [

          {
            nome:
              "Assistir",

            url:
              "https://exemplo.com/filme"
          }

        ]

      }

    ]

  },


  /* ========================================================
  NOVO ANIME DE TESTE
  ======================================================== */

  {
    id: 7,

    titulo:
      "Novo Anime de Teste",

    tipo:
      "anime",

    imagem:
      "assets/img/animes/anime-05.webp",

    descricaoCurta:
      "Novo anime adicionado ao MAHANIMO.",

    sinopse:
      "Sinopse completa do novo anime de teste.",

    ano: 2026,

    episodios: 13,

    temporadas: 1,

    status:
      "Em lançamento",

    dataAdicao:
      "2026-08-07",

    pagina:
      "pages/anime/",

    plataformas: [

      {
        nome:
          "Plataforma de Teste",

        temporadas: [

          {
            nome:
              "Temporada 1",

            url:
              "https://exemplo.com/novo-anime"
          }

        ]

      }

    ]

  }

];