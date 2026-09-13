# Arquitetura do NEXOVERSO

O NEXOVERSO usa uma arquitetura estática e simples:

```text
JSON → JavaScript → HTML + CSS → Navegador
                         ↓
                link externo da mídia
```

## Conteúdo

Os catálogos ficam em `data/**/catalogo.json`.

Cada conteúdo possui `categoria` e `subcategoria`. Quando necessário, campos contextuais como `jogo` refinam a subcategoria. A mídia é uma camada separada.

Exemplo:

```json
"midia": {
  "tipo": "link",
  "destino": "externo",
  "plataforma": "externo",
  "tipo": "pagina",
  "destino": "externo",
  "link": "https://seu-host.exemplo/filme"
}
```

Cada episódio pode ter a mesma estrutura dentro de `episodios[].midia`.

O campo `link` pode apontar para uma página de vídeo, arquivo de mídia, playlist ou outro destino autorizado. O NEXOVERSO não hospeda nem processa o vídeo: ele apenas abre o endereço cadastrado.

## Playlist

A página da obra funciona como uma playlist. Cada episódio possui seu próprio botão e seu próprio link no JSON. Para séries, desenhos, novelas e documentários, basta cadastrar os episódios em `episodios` na ordem desejada.

## GitHub Pages

Como as mídias não ficam dentro do repositório, arquivos grandes como MP4 não bloqueiam o `git push`. O repositório contém somente código, dados, imagens leves e documentação.

Para conteúdo real, use somente links para mídias que você tenha autorização para distribuir ou incorporar.

## Filtros do catálogo
- `core/filtros.js` contém somente regras puras de busca, filtros, ordenação e paginação.
- `components/filtros.js` cria a interface dos filtros e paginação, sem conhecer a fonte dos dados.
- `pages/catalogo.js` coordena estado, eventos e atualização do DOM.
- Gêneros aceitam seleção múltipla; os filtros são combináveis e podem ser removidos individualmente.

## Controle visual dos episódios
Cada episódio pode usar campos opcionais:
- `identificacao`: texto personalizado; `null` oculta completamente a identificação; ausente usa `Temporada X · Episódio Y`.
- `exibir_thumbnail`: `false` oculta a área de thumbnail; por padrão permanece visível.

## Taxonomia
- `data/taxonomia.json` concentra categorias, subcategorias, filtros contextuais e gêneros sugeridos.
- `core/filtros.js` filtra `categoria`, `subcategoria` e filtros contextuais como `jogo` separadamente.
- O link da mídia não é usado para adivinhar o tipo editorial.
