(function(){
  const $=s=>document.querySelector(s);
  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const normalizar=v=>String(v??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const urlRaiz=v=>MSA.dados.resolver(v||'');

  function card(p){
    const i=p.identificacao||{},d=p.descricao||{},c=p.classificacao||{},a=p.apresentacao||{};
    const projetoUrl=p.links?.projeto?.url;
    const img=a.imagemCard||a.imagemCapa||'';
    const fallback='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500"><rect width="900" height="500" fill="#101622"/><circle cx="140" cy="80" r="180" fill="#7c5cff" opacity=".28"/><circle cx="760" cy="430" r="220" fill="#29d3c2" opacity=".16"/><text x="70" y="270" fill="#eef3fb" font-family="Arial" font-size="64" font-weight="700">${i.nome||'MSA PROJECTS'}</text></svg>`);
    const detalhes=`projeto.html?id=${encodeURIComponent(i.id||i.slug||'')}`;
    const hrefProjeto=projetoUrl?urlRaiz(projetoUrl):'';
    return `<article class="project-card" data-category="${esc(c.categoria||'')}" data-search="${esc([i.nome,i.titulo,d.resumo,c.categoria,...(c.tags||[])].join(' '))}">
      <div class="project-card-image"><img src="${esc(img?urlRaiz(img):fallback)}" alt="Capa de ${esc(i.nome||'projeto')}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'"><span class="project-card-category">${esc(c.categoria||'Projeto')}</span><span class="project-card-status">${esc(p.situacao?.status||'Em desenvolvimento')}</span></div>
      <div class="project-card-content"><div class="project-card-heading"><div><span class="project-card-meta">${esc(i.slug||i.id||'projeto')}</span><h2 class="project-card-title">${esc(i.nome||'Projeto sem nome')}</h2></div></div>
      <p class="project-card-description">${esc(d.resumo||i.subtitulo||'Sem descrição cadastrada.')}</p>
      <div class="project-card-tags">${(c.tags||[]).slice(0,5).map(t=>`<span class="project-tag">${esc(t)}</span>`).join('')}</div>
      <div class="project-card-actions"><a class="button button-secondary button-small" href="${esc(detalhes)}">Ver detalhes</a>${hrefProjeto?`<a class="button button-primary button-small" href="${esc(hrefProjeto)}" target="_self">Ver projeto</a>`:'<span class="button button-disabled button-small" aria-disabled="true" title="Projeto ainda não possui endereço disponível">Projeto indisponível</span>'}</div></div>
    </article>`;
  }

  function render(){
    const all=MSA.projetos.lista||[];const q=normalizar($('#project-filter')?.value);const cat=$('#category-filter')?.value||'';
    const list=all.filter(p=>{const text=normalizar([p.identificacao?.nome,p.identificacao?.titulo,p.descricao?.resumo,p.descricao?.objetivo,p.classificacao?.categoria,...(p.classificacao?.tags||[]),...(p.tecnologias||[])].join(' '));return(!q||text.includes(q))&&(!cat||p.classificacao?.categoria===cat);});
    $('#projects-grid').innerHTML=list.length?list.map(card).join(''):'<div class="empty-state"><strong>Nenhum projeto encontrado</strong><p>Tente outro termo ou categoria.</p></div>';
    $('#project-count').textContent=`${list.length} ${list.length===1?'projeto':'projetos'}`;
  }
  function init(){
    const params=new URLSearchParams(location.search); const initial=params.get('q'); if(initial){ const input=$('#project-filter'); if(input) input.value=initial; }
    document.addEventListener('msa:projetos-prontos',()=>{const cats=[...new Set((MSA.projetos.lista||[]).map(p=>p.classificacao?.categoria).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));const select=$('#category-filter');if(select)select.innerHTML='<option value="">Todas as categorias</option>'+cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');render();});
    $('#project-filter')?.addEventListener('input',render);$('#category-filter')?.addEventListener('change',render);
  }
  document.addEventListener('DOMContentLoaded',init);
})();
