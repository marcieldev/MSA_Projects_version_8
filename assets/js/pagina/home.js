/* ============================================================
   MSA PROJECTS — HOME
   ------------------------------------------------------------
   Responsabilidades:
   - carregar os dados gerais da Home;
   - montar o projeto em destaque;
   - montar projetos recentes/destaques;
   - atualizar estatísticas;
   - preparar o resumo de conhecimento e evolução.
   ============================================================ */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
  const normalizar = (v) => String(v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const urlRaiz = (v) => MSA.dados.resolver(v || '');

  function criarCardProjeto(p) {
    const i = p.identificacao || {};
    const d = p.descricao || {};
    const c = p.classificacao || {};
    const a = p.apresentacao || {};
    const img = a.imagemCard || a.imagemCapa || '';
    const fallback = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500"><rect width="900" height="500" fill="#101612"/><circle cx="140" cy="80" r="180" fill="#d85b38" opacity=".25"/><text x="70" y="270" fill="#f3eee5" font-family="Arial" font-size="64" font-weight="700">${i.nome || 'MSA PROJECTS'}</text></svg>`
    );
    const detalhes = `${urlRaiz('paginas/pagina_projetos/projeto.html')}?id=${encodeURIComponent(i.id || i.slug || '')}`;
    const projetoUrl = p.links?.projeto?.url ? urlRaiz(p.links.projeto.url) : '';

    return `<article class="project-card">
      <div class="project-card-image">
        <img src="${esc(img ? urlRaiz(img) : fallback)}" alt="Capa de ${esc(i.nome || 'projeto')}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">
        <span class="project-card-category">${esc(c.categoria || 'projeto')}</span>
        <span class="project-card-status">${esc(p.situacao?.status || 'Em desenvolvimento')}</span>
      </div>
      <div class="project-card-content">
        <span class="project-card-meta">${esc(i.slug || i.id || 'projeto')}</span>
        <h3 class="project-card-title">${esc(i.nome || 'Projeto sem nome')}</h3>
        <p class="project-card-description">${esc(d.resumo || i.subtitulo || 'Sem descrição cadastrada.')}</p>
        <div class="project-card-tags">${(c.tags || []).slice(0, 4).map(t => `<span class="project-tag">${esc(t)}</span>`).join('')}</div>
        <div class="project-card-actions">
          <a class="button button-secondary button-small" href="${esc(detalhes)}">Ver detalhes</a>
          ${projetoUrl ? `<a class="button button-primary button-small" href="${esc(projetoUrl)}">Ver projeto</a>` : ''}
        </div>
      </div>
    </article>`;
  }

  let featuredProjects = [];
  let featuredIndex = 0;
  let featuredTimer = null;

  function renderFeaturedProject(project) {
    const visual = $('#featured-project-visual');
    const mark = $('#featured-project-mark');
    const name = $('#featured-project-name');
    const category = $('#featured-project-category');
    const title = $('#featured-project-title');
    const description = $('#featured-project-description');
    const details = $('#featured-project-details');
    const direct = $('#featured-project-direct');
    const counter = $('#featured-project-counter');
    if (!project || !visual) return;

    const i = project.identificacao || {};
    const d = project.descricao || {};
    const c = project.classificacao || {};
    const a = project.apresentacao || {};
    const image = a.fundo || a.imagemFundo || a.imagemCapa || a.imagemCard || '';
    const imagePosition = a.posicaoFundo || 'center center';
    const id = i.id || i.slug || '';

    visual.classList.add('is-changing');
    window.setTimeout(() => visual.classList.remove('is-changing'), 260);
    visual.style.backgroundImage = image
      ? `linear-gradient(180deg, rgba(8,12,10,.04), rgba(8,12,10,.84)), url("${urlRaiz(image)}")`
      : '';
    visual.style.backgroundPosition = imagePosition;
    visual.dataset.projectId = id;

    // A marca da capa usa duas letras do nome do projeto.
    // Ex.: MAHANIMO -> MA. A imagem permanece somente como fundo da capa.
    const initials = String(i.nome || 'MSA').trim().replace(/[^\p{L}\p{N}]/gu, '').slice(0, 2).toUpperCase() || 'MS';
    mark.textContent = initials;

    name.textContent = i.nome || 'Projeto';
    category.textContent = c.categoria || 'Projeto';
    title.textContent = i.titulo || i.nome || 'Projeto em destaque';
    description.textContent = d.resumo || i.subtitulo || '';
    details.href = `${urlRaiz('paginas/pagina_projetos/projeto.html')}?id=${encodeURIComponent(id)}`;

    const directUrl = project.links?.projeto?.url ? urlRaiz(project.links.projeto.url) : '';
    direct.hidden = !directUrl;
    if (directUrl) direct.href = directUrl;

    if (counter) {
      counter.textContent = featuredProjects.length > 1
        ? `${featuredIndex + 1} / ${featuredProjects.length}`
        : '';
      counter.hidden = featuredProjects.length <= 1;
    }

    document.querySelectorAll('[data-featured-dot]').forEach((dot, index) => {
      dot.classList.toggle('is-active', index === featuredIndex);
      dot.setAttribute('aria-current', index === featuredIndex ? 'true' : 'false');
    });
  }

  function iniciarRotacaoDestaques() {
    window.clearInterval(featuredTimer);
    featuredTimer = null;
    if (featuredProjects.length <= 1) return;

    // Redução de movimento não desativa a troca de conteúdo.
    // Ela é responsabilidade do CSS; o destaque continua navegável.
    featuredTimer = window.setInterval(() => {
      featuredIndex = (featuredIndex + 1) % featuredProjects.length;
      renderFeaturedProject(featuredProjects[featuredIndex]);
    }, 6500);
  }

  function renderFeatured(projects) {
    featuredProjects = projects.filter((p) => p && p.destaque === true);
    if (!featuredProjects.length) featuredProjects = projects.slice(0, 1);
    featuredIndex = 0;

    const visual = $('#featured-project-visual');
    if (!featuredProjects.length || !visual) return;

    const controls = $('#featured-project-controls');
    if (controls) {
      controls.innerHTML = '';
      if (featuredProjects.length > 1) {
        const previous = document.createElement('button');
        previous.type = 'button';
        previous.className = 'featured-project-arrow';
        previous.setAttribute('aria-label', 'Projeto em destaque anterior');
        previous.textContent = '‹';
        previous.addEventListener('click', () => {
          featuredIndex = (featuredIndex - 1 + featuredProjects.length) % featuredProjects.length;
          renderFeaturedProject(featuredProjects[featuredIndex]);
          iniciarRotacaoDestaques();
        });

        const next = document.createElement('button');
        next.type = 'button';
        next.className = 'featured-project-arrow';
        next.setAttribute('aria-label', 'Próximo projeto em destaque');
        next.textContent = '›';
        next.addEventListener('click', () => {
          featuredIndex = (featuredIndex + 1) % featuredProjects.length;
          renderFeaturedProject(featuredProjects[featuredIndex]);
          iniciarRotacaoDestaques();
        });

        controls.append(previous, next);
      }
    }

    const dots = $('#featured-project-dots');
    if (dots) {
      dots.innerHTML = '';
      featuredProjects.forEach((project, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'featured-project-dot';
        dot.dataset.featuredDot = String(index);
        dot.setAttribute('aria-label', `Mostrar ${project.identificacao?.nome || 'projeto ' + (index + 1)}`);
        dot.addEventListener('click', () => {
          featuredIndex = index;
          renderFeaturedProject(featuredProjects[featuredIndex]);
          iniciarRotacaoDestaques();
        });
        dots.appendChild(dot);
      });
    }

    renderFeaturedProject(featuredProjects[featuredIndex]);
    iniciarRotacaoDestaques();

    // Pausar a troca automática enquanto o usuário interage com a capa.
    visual.onmouseenter = () => window.clearInterval(featuredTimer);
    visual.onmouseleave = iniciarRotacaoDestaques;
    visual.onfocusin = () => window.clearInterval(featuredTimer);
    visual.onfocusout = iniciarRotacaoDestaques;
  }

  function atualizarEstatisticas(projects) {
    const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };
    setText('#stat-projects', projects.length);
    setText('#stat-categories', new Set(projects.map(p => p.classificacao?.categoria).filter(Boolean)).size);
    setText('#stat-tech', new Set(projects.flatMap(p => p.tecnologias || [])).size);
    setText('#stat-status', projects.filter(p => normalizar(p.situacao?.status) === 'em desenvolvimento').length);
    setText('#sidebar-stat-projects', projects.length);
    setText('#sidebar-stat-categories', new Set(projects.map(p => p.classificacao?.categoria).filter(Boolean)).size);
    setText('#sidebar-stat-tech', new Set(projects.flatMap(p => p.tecnologias || [])).size);
    setText('#sidebar-stat-status', projects.filter(p => normalizar(p.situacao?.status) === 'em desenvolvimento').length);
  }

  function renderKnowledge(k) {
    const host = $('#knowledge-grid');
    if (!host) return;
    host.innerHTML = `<article class="info-card"><span class="project-meta">${esc(k.categoria)}</span><h3>${esc(k.titulo)}</h3><p>${esc(k.descricao)}</p></article>`;
  }

  function renderEvolution(e) {
    const host = $('#evolution-grid');
    if (!host) return;
    host.innerHTML = (e.etapas || []).map(x => `<article class="evolution-step"><span class="evolution-step-number">${String(x.numero).padStart(2, '0')}</span><h3>${esc(x.titulo)}</h3><p>${esc(x.descricao)}</p></article>`).join('');
  }

  async function carregarInformacoesGerais() {
    try {
      const [site, knowledge, evo] = await MSA.dados.carregarJsons([
        'data/configuracoes/site.json',
        'data/conhecimento/desenvolvimento_web.json',
        'data/evolucao/etapas.json'
      ]);
      MSA.dados.receberDados('configuracoes.site', site);
      MSA.dados.receberDados('evolucao.etapas', evo);
      document.title = site.nome;
      $('#site-description').textContent = site.descricao;
      $('#site-slogan').textContent = site.slogan;
      $('#site-year').textContent = site.ano;
      renderKnowledge(knowledge);
      renderEvolution(evo);
    } catch (error) {
      console.error('MSA Projects — dados gerais:', error);
    }
  }

  document.addEventListener('msa:projetos-prontos', (event) => {
    const projects = event.detail.projetos || [];
    atualizarEstatisticas(projects);
    renderFeatured(projects);

    const featured = projects.filter(p => p.destaque).slice(0, 2);
    $('#featured-grid').innerHTML = (featured.length ? featured : projects.slice(0, 2)).map(criarCardProjeto).join('') || '<div class="empty-state">Nenhum projeto cadastrado ainda.</div>';
    $('#recent-grid').innerHTML = projects.slice().reverse().slice(0, 4).map(criarCardProjeto).join('') || '<div class="empty-state">Nenhum projeto cadastrado ainda.</div>';
  });

  document.addEventListener('DOMContentLoaded', () => {
    carregarInformacoesGerais();
  });
})();
