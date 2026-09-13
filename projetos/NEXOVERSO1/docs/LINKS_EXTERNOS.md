# Links externos

O NEXOVERSO não hospeda os vídeos. Cada filme ou episódio recebe um endereço em `midia.link`.

## Link comum

```json
"midia": {
  "tipo": "link",
  "destino": "externo",
  "formato": "link-externo",
  "link": "https://exemplo.com/video"
}
```

## Vídeo do YouTube

```json
"link": "https://www.youtube.com/watch?v=ID_DO_VIDEO"
```

A interface identifica automaticamente que é um vídeo e mostra **Abrir vídeo**.

## Playlist do YouTube

```json
"link": "https://www.youtube.com/playlist?list=ID_DA_PLAYLIST"
```

A interface identifica automaticamente que é uma playlist e mostra **Abrir playlist**.

Isso permite cadastrar uma playlist do YouTube mesmo quando o site original do conteúdo não estiver acessível. O NEXOVERSO não incorpora nem hospeda a mídia: apenas abre o endereço cadastrado.
## Fontes e perfis

Uma obra pode ter várias fontes/canais. Prefira o campo `fontes`:

```json
"fontes": [
  { "nome": "Matrix Gamers", "link": "https://www.youtube.com/@canal" },
  { "nome": "Outro canal", "link": "https://www.youtube.com/@outrocanal" }
]
```

Na página do título, os nomes aparecem como uma lista separada por vírgulas e cada nome com `link` abre diretamente o canal/perfil em uma nova aba. Se `link` estiver vazio, o nome aparece sem ser clicável. O campo antigo `fonte` continua compatível.

`identificacao: null` continua significando que a identificação de temporada/episódio não deve ser exibida naquele item.

