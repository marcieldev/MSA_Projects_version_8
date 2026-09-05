/* MSA Projects — navegação e comportamentos globais compartilhados. */
(function () {
  window.MSA = window.MSA || {};
  const root = (document.documentElement.dataset.msaRoot || './').replace(/\/?$/, '/');
  const join = (path) => root + String(path).replace(/^\.\//, '');
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function currentId() {
    const path = location.pathname.replace(/\\/g, '/');
    if (location.hash === '#knowledge') return 'conhecimento';
    if (/pagina_projetos/.test(path)) return 'projetos';
    if (/sobre\.html$/.test(path)) return 'sobre';
    if (/evolucao\.html$/.test(path)) return 'evolucao';
    return 'inicio';
  }

  function renderNavigation() {
    const host = document.querySelector('#main-navigation-links');
    if (!host) return;
    const active = currentId();
    const items = [
      ['inicio', 'Início', join('index.html')],
      ['projetos', 'Projetos', join('paginas/pagina_projetos/index.html')],
      ['conhecimento', 'Conhecimento', join('index.html#knowledge')],
      ['evolucao', 'Evolução', join('evolucao.html')],
      ['sobre', 'Sobre', join('sobre.html')]
    ];

    host.innerHTML = items.map(([id, name, href]) =>
      `<a class="nav-link ${active === id ? 'active' : ''}" href="${esc(href)}">${esc(name)}</a>`
    ).join('') +
      '<button class="accessibility-toggle nav-settings" type="button" data-modal-open="settings-panel" aria-haspopup="dialog">⚙ Configurações</button>';
  }

  function setupSearch() {
    const form = document.querySelector('.search-form');
    if (!form || form.dataset.globalBound) return;
    form.dataset.globalBound = '1';
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = form.querySelector('.search-input');
      const query = input?.value.trim() || '';
      location.href = join('paginas/pagina_projetos/index.html') + (query ? `?q=${encodeURIComponent(query)}` : '');
    });
  }

  function setupThemeEarly() {
    const stored = localStorage.getItem('msa-theme');
    const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('high-contrast', localStorage.getItem('msa-contrast') === '1');
    document.documentElement.classList.toggle('no-motion', localStorage.getItem('msa-motion') === '1');
  }

  setupThemeEarly();
  document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    setupSearch();
  });
})();
