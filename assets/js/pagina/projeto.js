(function(){
  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const urlRaiz=v=>MSA.dados.resolver(v||'');
  const lista=v=>Array.isArray(v)?v:[];
  function blocoLista(titulo,itens){if(!itens.length)return '';return `<article class="info-card"><span class="project-meta">${esc(titulo)}</span><ul>${itens.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article>`;}
  function render(p){
    const i=p.identificacao||{},d=p.descricao||{},c=p.classificacao||{},dev=p.desenvolvimento||{};const el=document.querySelector('#project-detail');
    document.title=`${i.nome||'Projeto'} — MSA Projects`;
    const projetoUrl=p.links?.projeto?.url?urlRaiz(p.links.projeto.url):'';
    el.innerHTML=`<div class="detail-hero"><div><span class="section-label">${esc(c.categoria||'PROJETO')}</span><h1>${esc(i.nome||'Projeto')}</h1><p class="detail-subtitle">${esc(i.subtitulo||d.resumo||'')}</p><div class="hero-actions"><a class="button button-primary" href="${esc(projetoUrl||'../../index.html')}">Ver projeto</a><a class="button button-secondary" href="index.html">Voltar aos projetos</a></div></div><div class="detail-badge"><span>STATUS</span><strong>${esc(p.situacao?.status||'Em desenvolvimento')}</strong>${p.situacao?.progresso!=null?`<small>${esc(p.situacao.progresso)}% concluído</small>`:''}</div></div>
    <div class="content-grid detail-grid"><article class="info-card info-card-wide"><span class="project-meta">Sobre o projeto</span><p>${esc(d.descricaoCompleta||d.resumo||'')}</p></article><article class="info-card"><span class="project-meta">Objetivo</span><p>${esc(d.objetivo||'Não informado.')}</p></article><article class="info-card"><span class="project-meta">Motivação</span><p>${esc(d.motivacao||'Não informado.')}</p></article>${blocoLista('Tecnologias',lista(p.tecnologias))}${blocoLista('Conhecimentos adquiridos',lista(p.conhecimentos?.adquiridos))}${blocoLista('Funcionalidades',lista(dev.funcionalidades))}${blocoLista('Desafios',lista(dev.desafios))}</div>
    <div class="detail-footer-actions"><a class="button button-primary" href="${esc(projetoUrl||'../../index.html')}">Ver projeto completo ↗</a><a class="button button-secondary" href="index.html">Voltar ao catálogo</a></div>`;
  }
  function init(){document.addEventListener('msa:projetos-prontos',()=>{const id=new URLSearchParams(location.search).get('id')||location.hash.slice(1);const p=(MSA.projetos.lista||[]).find(x=>(x.identificacao?.id===id||x.identificacao?.slug===id));if(!p){document.querySelector('#project-detail').innerHTML='<div class="empty-state"><h1>Projeto não encontrado</h1><p>O projeto solicitado não está cadastrado no catálogo.</p><a class="button button-primary" href="index.html">Voltar ao catálogo</a></div>';return;}render(p);});}
  document.addEventListener('DOMContentLoaded',init);
})();
