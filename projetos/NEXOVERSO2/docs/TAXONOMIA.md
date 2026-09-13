# Taxonomia do NEXOVERSO

A partir desta versão, o catálogo separa três ideias que antes podiam ficar misturadas:

- `id`: identidade interna e estável da obra/conteúdo.
- `categoria`: família principal (`filme`, `serie`, `desenho`, `novela`, `documentario`, `especial`, `anime`, `jogos`).
- `tipo_conteudo`: formato editorial (`filme`, `episodio`, `compilado`, `gameplay`, `review`, `analise`, `tutorial`, `live`, etc.).

## ID

Use um identificador legível e único. Exemplo:

```text
filme-lego-scooby-doo-hollywood-assombrada-2016
desenho-scooby-doo-compilado-teste
jogo-trans-matrix
```

O ID não deve depender do YouTube ou de outro provedor. Se a fonte mudar, o ID continua o mesmo. Não reutilize um ID antigo para outra obra.

## Mídia

`midia` descreve onde o conteúdo está, sem decidir a categoria editorial:

```json
"midia": {
  "plataforma": "youtube",
  "tipo": "playlist",
  "destino": "externo",
  "link": "https://www.youtube.com/playlist?list=..."
}
```

Para um site externo:

```json
"midia": {
  "plataforma": "externo",
  "tipo": "pagina",
  "destino": "externo",
  "link": "https://..."
}
```

Assim, um link do YouTube não transforma automaticamente um desenho em `gameplay`, por exemplo. O tipo editorial fica explícito em `tipo_conteudo`.

## Fonte

Use `fontes` para listar canais/perfis responsáveis ou associados ao conteúdo. O nome vira link quando `link` estiver preenchido.
