/* UTILS — funções puras, sem acesso ao DOM */
export const escapeHtml=value=>String(value??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export const categoryLabel=type=>({filme:'FILMES',serie:'SÉRIES',desenho:'DESENHOS ANIMADOS',documentario:'DOCUMENTÁRIOS',programa_televisao:'PROGRAMAS DE TELEVISÃO',jogos:'JOGOS'})[type]||String(type||'').toUpperCase();
export const subcategoryLabel=type=>({episodio:'EPISÓDIO',compilado:'COMPILADO',especial:'ESPECIAL',gameplay:'GAMEPLAY',busologia:'BUSOLOGIA',analise:'ANÁLISE',review:'REVIEW',tutorial:'TUTORIAL',trailer:'TRAILER',teaser:'TEASER',clipe:'CLIPE',entrevista:'ENTREVISTA',live:'LIVE',curta:'CURTA',cena:'CENA',short:'SHORT'})[type]||String(type||'').toUpperCase();
export const contentTypeLabel=subcategoryLabel;
export const typeLabel=categoryLabel;
export const params=()=>new URLSearchParams(location.search);
export const sortedEpisodes=item=>(item.episodios||[]).slice().sort((a,b)=>(a.temporada||1)-(b.temporada||1)||(a.numero||0)-(b.numero||0));
export const uniqueSorted=(values,locale=false)=>[...new Set(values.filter(Boolean))].sort((a,b)=>locale?String(a).localeCompare(String(b),'pt-BR'):String(a).localeCompare(String(b),'pt-BR'));
