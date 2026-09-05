(function(){
  const state={
    dark:(localStorage.getItem('msa-theme')||'dark')==='dark',
    contrast:localStorage.getItem('msa-contrast')==='1',
    motion:localStorage.getItem('msa-motion')==='1'
  };
  function apply(){
    document.documentElement.dataset.theme=state.dark?'dark':'light';
    document.documentElement.classList.toggle('high-contrast',state.contrast);
    document.documentElement.classList.toggle('no-motion',state.motion);
    document.querySelectorAll('[data-setting]').forEach(b=>b.setAttribute('aria-checked',String(!!state[b.dataset.setting])));
  }
  window.MSA=window.MSA||{}; window.MSA.acessibilidade={state,apply};
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-setting]'); if(!b)return;
    const k=b.dataset.setting; if(!(k in state))return;
    state[k]=!state[k];
    localStorage.setItem(k==='dark'?'msa-theme':k==='contrast'?'msa-contrast':'msa-motion',k==='dark'?(state[k]?'dark':'light'):state[k]?'1':'0');
    apply();
  });
  apply();
})();
