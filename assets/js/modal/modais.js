window.MSA=window.MSA||{}; MSA.modal={
 open(id){const el=document.getElementById(id); if(!el)return; el.hidden=false; document.body.classList.add('modal-open'); const close=el.querySelector('.modal-close'); close?.focus();},
 close(id){const el=document.getElementById(id); if(!el)return; el.hidden=true; document.body.classList.remove('modal-open');}
};
document.addEventListener('click',e=>{const open=e.target.closest('[data-modal-open]'); if(open) MSA.modal.open(open.dataset.modalOpen); const close=e.target.closest('[data-modal-close]'); if(close) MSA.modal.close(close.dataset.modalClose||close.closest('.modal-backdrop')?.id); if(e.target.classList.contains('modal-backdrop')) MSA.modal.close(e.target.id)});
document.addEventListener('keydown',e=>{if(e.key==='Escape') document.querySelectorAll('.modal-backdrop:not([hidden])').forEach(m=>MSA.modal.close(m.id))});
