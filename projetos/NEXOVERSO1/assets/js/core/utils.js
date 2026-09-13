/* UTILS — funções puras, sem acesso ao DOM */
export const escapeHtml=value=>String(value??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export const typeLabel=type=>({filme:'FILME',serie:'SÉRIE',desenho:'DESENHO',novela:'NOVELA',documentario:'DOCUMENTÁRIO',especial:'ESPECIAL'})[type]||String(type||'').toUpperCase();
export const params=()=>new URLSearchParams(location.search);
export const sortedEpisodes=item=>(item.episodios||[]).slice().sort((a,b)=>(a.temporada||1)-(b.temporada||1)||(a.numero||0)-(b.numero||0));
export const uniqueSorted=(values,locale=false)=>[...new Set(values.filter(Boolean))].sort((a,b)=>locale?String(a).localeCompare(String(b),'pt-BR'):String(a).localeCompare(String(b),'pt-BR'));
