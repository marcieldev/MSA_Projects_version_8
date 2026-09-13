/* CATÁLOGO — orquestra DOM, estado e eventos; regras ficam em core/filtros.js. */
import {catalogo,taxonomia} from '../core/data.js';
import {escapeHtml,categoryLabel,subcategoryLabel} from '../core/utils.js';
import {filterItems,paginate,uniqueValues} from '../core/filtros.js';
import {initHeader} from '../components/header.js';
import {renderCards} from '../components/cards.js';
import {setupGenreFilter,renderActiveFilters,renderPagination} from '../components/filtros.js';

initHeader();
const grid=document.querySelector('#catalog');
const search=document.querySelector('#search');
const categories=document.querySelector('#categoryFilter');
const subcategories=document.querySelector('#subcategoryFilter');
const games=document.querySelector('#gameFilter');
const years=document.querySelector('#yearFilter');
const genreBox=document.querySelector('#genreFilter');
const sort=document.querySelector('#sortFilter');
const count=document.querySelector('#catalogCount');
const active=document.querySelector('#activeFilters');
const pagination=document.querySelector('#pagination');
const pageSize=12;
let all=[];
let taxonomy={categorias:[],subcategorias:[],generos_sugeridos:[]};
let state={query:'',category:'',subcategory:'',game:'',year:'',genres:[],sort:'relevancia',page:1};
let genreControl;

const fill=(select,values,first,labels=new Map())=>select.innerHTML=`<option value="">${first}</option>`+values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(labels.get(v)||v)}</option>`).join('');
const categoryOptions=()=>taxonomy.categorias.map(x=>x.id);
const subcategoryOptions=()=>taxonomy.subcategorias.map(x=>x.id);
const categoryNames=new Map();
const subcategoryNames=new Map();

function syncGameFilter(){
  const enabled=state.subcategory==='gameplay';
  const relevant=all.filter(item=>item.subcategoria==='gameplay' && (!state.category || item.categoria===state.category));
  const gameValues=uniqueValues(relevant,'jogo').filter(Boolean).sort((a,b)=>String(a).localeCompare(String(b),'pt-BR'));
  games.disabled=!enabled;
  games.hidden=!enabled;
  if(!enabled){games.value='';state.game='';return;}
  fill(games,gameValues,'Todos os jogos');
  games.value=gameValues.includes(state.game)?state.game:'';
  if(state.game && !gameValues.includes(state.game)) state.game='';
}

function render(){
  syncGameFilter();
  const filtered=filterItems(all,state);
  const page=paginate(filtered,state.page,pageSize);state.page=page.page;
  count.textContent=`${page.total} ${page.total===1?'título encontrado':'títulos encontrados'}`;
  renderCards(grid,page.items);
  renderPagination(pagination,page,p=>{state.page=p;render();window.scrollTo({top:0,behavior:'smooth'});});
  renderActiveFilters(active,state,{category:categoryLabel(state.category),subcategory:subcategoryLabel(state.subcategory),game:state.game},(kind,value)=>{
    if(kind==='category'){state.category='';categories.value='';}
    if(kind==='subcategory'){state.subcategory='';subcategories.value='';}
    if(kind==='game'){state.game='';games.value='';}
    if(kind==='year'){state.year='';years.value='';}
    if(kind==='genre')state.genres=state.genres.filter(g=>g!==value);
    if(kind==='genre')genreControl.setSelected(state.genres);
    state.page=1;render();
  },()=>{state.category='';state.subcategory='';state.game='';state.year='';state.genres=[];categories.value='';subcategories.value='';games.value='';years.value='';genreControl.setSelected([]);state.page=1;render();});
}

(async()=>{
  try{
    [all,taxonomy]=await Promise.all([catalogo(),taxonomia()]);
    taxonomy.categorias.forEach(x=>categoryNames.set(x.id,x.nome));
    taxonomy.subcategorias.forEach(x=>subcategoryNames.set(x.id,x.nome));
    fill(categories,categoryOptions(),'Todas as categorias',categoryNames);
    fill(subcategories,subcategoryOptions(),'Todas as subcategorias',subcategoryNames);
    const yearValues=uniqueValues(all,'ano').filter(Boolean).sort((a,b)=>Number(b)-Number(a));
    const genreValues=uniqueValues(all,'generos').filter(Boolean).sort((a,b)=>String(a).localeCompare(String(b),'pt-BR'));
    genreControl=setupGenreFilter(genreBox,genreValues,g=>{state.genres=g;state.page=1;render();});
    const p=new URLSearchParams(location.search);
    state.query=p.get('q')||'';search.value=state.query;
    if(p.get('categoria')){state.category=p.get('categoria');categories.value=state.category;}
    if(p.get('subcategoria')){state.subcategory=p.get('subcategoria');subcategories.value=state.subcategory;}
    else if(p.get('tipo_conteudo')){state.subcategory=p.get('tipo_conteudo');subcategories.value=state.subcategory;}
    if(p.get('jogo')) state.game=p.get('jogo');
    if(p.get('ano')){state.year=p.get('ano');}
    fill(years,yearValues,'Todos os anos');years.value=state.year;
    search.addEventListener('input',()=>{state.query=search.value;state.page=1;render();});
    categories.addEventListener('change',()=>{state.category=categories.value;state.page=1;render();});
    subcategories.addEventListener('change',()=>{state.subcategory=subcategories.value;state.game='';state.page=1;render();});
    games.addEventListener('change',()=>{state.game=games.value;state.page=1;render();});
    years.addEventListener('change',()=>{state.year=years.value;state.page=1;render();});
    sort.addEventListener('change',()=>{state.sort=sort.value;state.page=1;render();});
    render();
  }catch(e){grid.innerHTML=`<div class="error">${escapeHtml(e.message)}</div>`;count.textContent='Não foi possível carregar o catálogo.';}
})();
