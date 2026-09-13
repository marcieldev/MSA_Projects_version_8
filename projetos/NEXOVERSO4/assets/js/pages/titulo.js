/* TÍTULO — detalhes da obra e lista de episódios. */
import {findById} from '../core/data.js';
import {escapeHtml,categoryLabel,subcategoryLabel,params,sortedEpisodes} from '../core/utils.js';
import {mediaLink,externalInfo} from '../core/links.js';
import {initHeader} from '../components/header.js';
import {assetUrl} from '../core/paths.js';

initHeader();
const el=document.querySelector('#detail');
const id=params().get('id');

const initials = value => String(value||'Fonte').trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase() || 'F';

function normalizeSources(item){
  const raw = item?.fontes ?? item?.fonte ?? [];
  const list = Array.isArray(raw) ? raw : [raw];
  const episodeSources = (item?.episodios||[]).flatMap(ep => {
    const value = ep?.fontes ?? ep?.fonte ?? [];
    return Array.isArray(value) ? value : [value];
  });
  const combined = [...list, ...episodeSources].map(source => {
    if(typeof source === 'string') return {nome:source,link:''};
    return source || {};
  }).filter(source => source.nome || source.provedor || source.link);
  const seen = new Set();
  return combined.filter(source => {
    const key = `${source.nome||source.provedor||''}|${source.link||''}`.toLowerCase();
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sourceProfile(item){
  const sources=normalizeSources(item);
  if(!sources.length) return '';
  const primary=sources[0];
  const name=primary.nome||primary.provedor||'Fonte';
  const avatar=primary.imagem||primary.avatar||primary.logo||'';
  const avatarHtml=avatar
    ? `<img class="source-avatar" src="${escapeHtml(assetUrl(avatar))}" alt="">`
    : `<span class="source-avatar source-avatar-initials">${escapeHtml(initials(name))}</span>`;
  const links=sources.map(source=>{
    const label=source.nome||source.provedor||'Fonte';
    return source.link
      ? `<a class="source-channel" href="${escapeHtml(source.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`
      : `<span class="source-channel source-channel-disabled">${escapeHtml(label)}</span>`;
  }).join('<span class="source-separator">, </span>');
  return `<div class="source-profile">${avatarHtml}<div class="source-profile-info"><span class="source-kicker">FONTE / PERFIS</span><div class="source-channel-list">${links}</div><span>${escapeHtml(primary.creditos||'Fonte e créditos do conteúdo')}</span></div></div>`;
}

function episodeButton(link){
  const info=externalInfo(link);
  if(!info.href) return '<span class="btn disabled" aria-disabled="true">Link não cadastrado</span>';
  return `<a class="btn primary" href="${escapeHtml(info.href)}" target="_blank" rel="noopener noreferrer">▶ ${escapeHtml(info.rotulo)}</a>`;
}

function youtubeThumb(info, title){
  if(!info?.thumbnail) return `<div class="episode-thumb episode-thumb-placeholder"><span>▶</span></div>`;
  return `<div class="episode-thumb"><img src="${escapeHtml(info.thumbnail)}" alt="Miniatura de ${escapeHtml(title)}" loading="lazy"><span class="thumb-play">▶</span></div>`;
}

function episodeItem(ep,item){
  const link=mediaLink(ep.midia);
  const info=link?externalInfo(link):null;
  const defaultLabel=`Temporada ${ep.temporada||1} · Episódio ${ep.numero}`;
  const identification=ep.identificacao===null ? '' : (ep.identificacao!==undefined ? String(ep.identificacao) : defaultLabel);
  const label=identification ? `${identification} — ${ep.titulo||''}` : (ep.titulo||defaultLabel);
  const showThumb=ep.exibir_thumbnail!==false;
  const thumb=showThumb && (info?.tipo==='playlist'||info?.tipo==='video') ? youtubeThumb(info,ep.titulo||label) : (showThumb ? '<div class="episode-thumb episode-thumb-placeholder"><span>▶</span></div>' : '');
  return `<article class="episode-card ${info?.tipo==='playlist'?'is-playlist':''} ${showThumb?'':'no-thumbnail'}">
    ${thumb}
    <div class="episode-card-body">
      <div class="episode-card-copy">${identification?`<span class="episode-identification">${escapeHtml(identification)}</span>`:''}<span class="episode-kind">${escapeHtml(info?.descricao||'Mídia externa')}</span><h3>${escapeHtml(ep.titulo||defaultLabel)}</h3>${ep.sinopse?`<p>${escapeHtml(ep.sinopse)}</p>`:''}</div>
      ${episodeButton(link)}
    </div>
  </article>`;
}

(async()=>{
  try{
    if(!id) throw new Error('Nenhum conteúdo foi informado.');
    const item=await findById(id);
    document.title=`${item.titulo} — NEXOVERSO`;
    const episodes=sortedEpisodes(item);
    const media=mediaLink(item.midia);
    const mediaInfo=media?externalInfo(media):null;
    const filmList=item.categoria==='filme'
      ? `<article class="episode-card">${mediaInfo?.tipo==='playlist'||mediaInfo?.tipo==='video'?youtubeThumb(mediaInfo,item.titulo):'<div class="episode-thumb episode-thumb-placeholder"><span>▶</span></div>'}<div class="episode-card-body"><div class="episode-card-copy"><span class="episode-kind">${escapeHtml(mediaInfo?.descricao||'Filme completo')}</span><h3>Filme completo</h3></div>${episodeButton(media)}</div></article>`
      : episodes.map(ep=>episodeItem(ep,item)).join('') || '<div class="empty">Nenhum episódio cadastrado.</div>';

    el.innerHTML=`<section class="detail"><div><img class="poster" src="${escapeHtml(assetUrl(item.imagem||'assets/img/poster-aster.svg'))}" alt="Pôster de ${escapeHtml(item.titulo)}"></div><div><span class="card-type ${escapeHtml(item.categoria)}">${categoryLabel(item.categoria)}</span><h1>${escapeHtml(item.titulo)}</h1>${item.subcategoria?`<div class="detail-content-type">${escapeHtml(subcategoryLabel(item.subcategoria))}</div>`:``}<div class="meta"><span>${escapeHtml(item.ano||'')}</span><span>· ${escapeHtml(item.classificacao||'Livre')}</span><span>· ${(item.generos||[]).map(escapeHtml).join(' · ')}</span></div><p class="detail-copy">${escapeHtml(item.sinopse||'')}</p>${sourceProfile(item)}</div></section><section class="episodes"><div class="section-head"><div><p class="eyebrow">PLAYLIST</p><h2>${item.categoria==='filme'?'Filme completo':'Episódios'}</h2><p class="section-copy">Os episódios podem apontar para vídeos, playlists do YouTube ou outros sites. O NEXOVERSO apenas redireciona para a mídia externa.</p></div></div><div class="episodes-list">${filmList}</div></section>`;
  }catch(e){
    el.innerHTML=`<div class="error">${escapeHtml(e.message)}</div>`;
  }
})();
