/* FILTROS — regras puras de pesquisa, filtros, ordenação e paginação. Não acessa DOM. */
export function normalize(value=''){
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
}

export function matchesSearch(item, query){
  const q=normalize(query);
  if(!q) return true;
  return normalize([item.titulo,item.sinopse,item.tipo,item.ano,...(item.generos||[])].join(' ')).includes(q);
}

export function matchesFilters(item, filters){
  const genres=item.generos||[];
  return (!filters.type || item.tipo===filters.type)
    && (!filters.year || String(item.ano)===String(filters.year))
    && (!filters.genres?.length || filters.genres.every(g=>genres.includes(g)))
    && matchesSearch(item,filters.query);
}

export function sortItems(items,sort='relevancia'){
  const result=[...items];
  const text=v=>normalize(v);
  if(sort==='recentes') return result.sort((a,b)=>(Number(b.ano)||0)-(Number(a.ano)||0)||text(a.titulo).localeCompare(text(b.titulo),'pt-BR'));
  if(sort==='antigos') return result.sort((a,b)=>(Number(a.ano)||0)-(Number(b.ano)||0)||text(a.titulo).localeCompare(text(b.titulo),'pt-BR'));
  if(sort==='az') return result.sort((a,b)=>text(a.titulo).localeCompare(text(b.titulo),'pt-BR'));
  if(sort==='za') return result.sort((a,b)=>text(b.titulo).localeCompare(text(a.titulo),'pt-BR'));
  if(sort==='episodios') return result.sort((a,b)=>(b.episodios?.length||0)-(a.episodios?.length||0)||text(a.titulo).localeCompare(text(b.titulo),'pt-BR'));
  return result;
}

export function filterItems(items,filters){
  return sortItems(items.filter(item=>matchesFilters(item,filters)),filters.sort);
}

export function paginate(items,page=1,perPage=12){
  const totalPages=Math.max(1,Math.ceil(items.length/perPage));
  const safePage=Math.min(Math.max(1,page),totalPages);
  const start=(safePage-1)*perPage;
  return {items:items.slice(start,start+perPage),page:safePage,perPage,total:items.length,totalPages};
}

export function uniqueValues(items,key){
  return [...new Set(items.flatMap(item=>Array.isArray(item[key])?item[key]:item[key]!=null&&item[key]!==''?[item[key]]:[]))];
}
