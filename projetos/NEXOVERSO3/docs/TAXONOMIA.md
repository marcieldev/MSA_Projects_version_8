# Taxonomia do NEXOVERSO

A partir desta versão, o catálogo separa três ideias que antes podiam ficar misturadas:

- `id`: identidade interna e estável da obra/conteúdo.
- `categoria`: família principal (`filme`, `serie`, `desenho`, `novela`, `documentario`, `especial`, `anime`, `jogos`).
- `tipo_conteudo`: formato editorial (`filme`, `episodio`, `compilado`, `gameplay`, `review`, `analise`, `tutorial`, `live`, etc.).
- `generos`: características, temas ou assuntos do conteúdo; não repita aqui a `categoria` nem o `tipo_conteudo`.

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


## Gêneros e categorias

A categoria e o tipo de conteúdo não devem ser repetidos como gênero.

Exemplos que devem ser evitados:

```json
"categoria": "jogos",
"tipo_conteudo": "gameplay",
"generos": ["Jogos", "Gameplay"]
```

O ideal é:

```json
"categoria": "jogos",
"tipo_conteudo": "gameplay",
"generos": ["Simulação", "Ônibus", "ETS2"]
```

Da mesma forma, conteúdos de `documentario` não precisam usar `Documentário` como gênero, e conteúdos de `especial` não precisam usar `Especial` como gênero.

A interface do catálogo continua montando as opções de gênero a partir dos gêneros realmente presentes nos conteúdos cadastrados. Portanto, um gênero sugerido no `taxonomia.json` não aparece no filtro enquanto nenhum conteúdo estiver usando esse gênero. Isso é intencional.
