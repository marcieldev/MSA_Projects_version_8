# STATUS — MSA Projects

## Estado desta versão

A versão atual prioriza um frontend simples, modular e orientado por JSON.

### Concluído

- [x] Java / Spring / JPA removidos desta etapa.
- [x] JSON mantido como fonte de dados do catálogo.
- [x] Pesquisa global funcionando.
- [x] Configurações globais persistidas no navegador.
- [x] Menu global compartilhado entre as páginas.
- [x] Perfil do fundador na lateral da Home.
- [x] Dados dos arquivos JSON do fundador utilizados na sidebar e no modal.
- [x] Contadores de experiências, disciplinas e estudos externos.
- [x] Visão rápida do catálogo dentro da sidebar.
- [x] Vídeo ambiental global removido da Home para evitar rolagem horizontal/impacto na UX.
- [x] Hero da Home transformado em área dinâmica de projeto em destaque.
- [x] Imagem/fundo do projeto em destaque carregado do JSON.
- [x] Campo opcional `apresentacao.fundo` para personalizar o fundo de cada projeto.
- [x] Campo opcional `apresentacao.posicaoFundo` para controlar o enquadramento da imagem.
- [x] Altura do visual principal ajustável em `assets/css/pagina/home/estrutura_home.css` por `--home-hero-visual-height`.
- [x] Posição padrão da imagem ajustável pelo mesmo arquivo por `--home-hero-image-position`.
- [x] MAHANIMO definido como projeto em destaque nesta versão.

## Próximos passos

1. Refinar a identidade visual da Home.
2. Revisar responsividade em telas pequenas.
3. Melhorar o painel Python local.
4. Só depois avaliar novas tecnologias caso exista uma necessidade real.
