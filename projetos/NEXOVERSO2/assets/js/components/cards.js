/* CARDS — transforma itens do catálogo em HTML; não controla estado da página */
import {escapeHtml,categoryLabel,contentTypeLabel} from '../core/utils.js';
import {pageUrl,assetUrl} from '../core/paths.js';

const poster=item=>assetUrl(item.imagem||'assets/img/poster-aster.svg');
const titleUrl=item=>pageUrl(`paginas/titulo/?id=${encodeURIComponent(item.id)}`);

export function card(item){
  return `<article class="card">
    <a href="${titleUrl(item)}">
      <img class="poster" src="${poster(item)}" alt="Pôster de ${escapeHtml(item.titulo)}" loading="lazy">
      <div class="card-body">
        <span class="card-type ${escapeHtml(item.categoria)}">${categoryLabel(item.categoria)}</span>
        <h3>${escapeHtml(item.titulo)}</h3>
        <span class="card-content-type">${contentTypeLabel(item.tipo_conteudo)}</span>
        <p>${escapeHtml(item.sinopse||'')}</p>
        <div class="meta"><span>${escapeHtml(item.ano||'')}</span>${(item.generos||[]).slice(0,2).map(g=>`<span>· ${escapeHtml(g)}</span>`).join('')}</div>
      </div>
    </a>
  </article>`;
}

export function highlightCard(item){
  return `<article class="highlight-card">
    <a class="highlight-link" href="${titleUrl(item)}" aria-label="Abrir ${escapeHtml(item.titulo)}">
      <div class="highlight-poster">
        <img src="${poster(item)}" alt="Pôster de ${escapeHtml(item.titulo)}" loading="lazy">
      </div>
      <div class="highlight-body">
        <span class="card-type ${escapeHtml(item.categoria)}">${categoryLabel(item.categoria)}</span>
        <h3>${escapeHtml(item.titulo)}</h3>
        <span class="card-content-type">${contentTypeLabel(item.tipo_conteudo)}</span>
        <p>${escapeHtml(item.sinopse||'')}</p>
        <div class="meta"><span>${escapeHtml(item.ano||'')}</span>${(item.generos||[]).slice(0,2).map(g=>`<span>· ${escapeHtml(g)}</span>`).join('')}</div>
      </div>
    </a>
  </article>`;
}

export function renderCards(container,items){
  container.innerHTML=items.length?items.map(card).join(''):'<div class="empty">Nenhuma obra encontrada.</div>';
}
