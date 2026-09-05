(function(){
  function normalizarTexto(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();}
  window.MSA=window.MSA||{}; MSA.pesquisa={normalizarTexto};

  document.addEventListener('submit',e=>{
    const form=e.target.closest('.search-form');
    if(!form)return;
    e.preventDefault();
    const q=String(new FormData(form).get('q')||'').trim();
    const destino=form.dataset.searchTarget || 'paginas/pagina_projetos/index.html';
    const url=new URL(destino,location.href);
    if(q) url.searchParams.set('q',q); else url.searchParams.delete('q');
    location.href=url.href;
  });
})();
