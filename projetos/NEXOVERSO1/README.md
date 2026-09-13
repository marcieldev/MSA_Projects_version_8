# NEXOVERSO — arquitetura modular + links externos

Esta versão mantém a linguagem visual da base original e separa a lógica em módulos com responsabilidades bem definidas.

## Fluxo
`JSON → core/data.js → página/componente → DOM → CSS`

## Mídia
Não há vídeos locais. Cada filme ou episódio usa `midia.link` no JSON. O NEXOVERSO somente abre o endereço externo cadastrado.

## Organização
- `assets/css/base/`: fundação visual
- `assets/css/components/`: componentes reutilizáveis
- `assets/css/pages/`: páginas
- `assets/css/responsivo/`: responsividade
- `assets/js/core/`: infraestrutura e regras puras
- `assets/js/components/`: componentes comportamentais
- `assets/js/pages/`: controladores das páginas
- `data/`: fonte dos dados

Consulte `docs/RESPONSABILIDADES.md` para o mapa completo.


## Links do YouTube

`midia.link` aceita links externos comuns, vídeos do YouTube e playlists do YouTube. O sistema identifica automaticamente o destino e altera o rótulo do botão para **Abrir vídeo** ou **Abrir playlist**.

## Cards

O card da Home possui um renderer próprio (`highlightCard`) para não misturar sua estrutura visual com o card usado nas listas. A lista de episódios mantém sua estrutura atual.
