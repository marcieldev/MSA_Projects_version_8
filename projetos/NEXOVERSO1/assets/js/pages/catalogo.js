/* CATÁLOGO — orquestra DOM, estado e eventos; as regras ficam em core/filtros.js. */
import {catalogo} from '../core/data.js';
import {escapeHtml,typeLabel} from '../core/utils.js';
import {filterItems,paginate,uniqueValues} from '../core/filtros.js';
import {initHeader} from '../components/header.js';
import {renderCards} from '../components/cards.js';
import {setupGenreFilter,renderActiveFilters,renderPagination} from '../components/filtros.js';

initHeader();
const grid=document.querySelector('#catalog');
const search=document.querySelector('#search');
const types=document.querySelector('#typeFilter');
const years=document.querySelector('#yearFilter');
const genreBox=document.querySelector('#genreFilter');
const sort=document.querySelector('#sortFilter');
const count=document.querySelector('#catalogCount');
const active=document.querySelector('#activeFilters');
const pagination=document.querySelector('#pagination');
const pageSize=12;
let all=[];
let state={query:'',type:'',year:'',genres:[],sort:'relevancia',page:1};
let genreControl;

const fill=(select,values,first)=>select.innerHTML=`<option value="">${first}</option>`+values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');

function render(){
  const filtered=filterItems(all,state);
  const page=paginate(filtered,state.page,pageSize);state.page=page.page;
  count.textContent=`${page.total} ${page.total===1?'título encontrado':'títulos encontrados'}`;
  renderCards(grid,page.items);
  renderPagination(pagination,page,p=>{state.page=p;render();window.scrollTo({top:0,behavior:'smooth'});});
  renderActiveFilters(active,state,{type:typeLabel(state.type)},(kind,value)=>{
    if(kind==='type')state.type='';
    if(kind==='year')state.year='';
    if(kind==='genre')state.genres=state.genres.filter(g=>g!==value);
    if(kind==='genre')genreControl.setSelected(state.genres);
    state.page=1;render();
  },()=>{state.type='';state.year='';state.genres=[];types.value='';years.value='';genreControl.setSelected([]);state.page=1;render();});
}

(async()=>{
  try{
    all=await catalogo();
    const typeValues=uniqueValues(all,'tipo').filter(Boolean).sort((a,b)=>typeLabel(a).localeCompare(typeLabel(b),'pt-BR'));
    const yearValues=uniqueValues(all,'ano').filter(Boolean).sort((a,b)=>Number(b)-Number(a));
    const genreValues=uniqueValues(all,'generos').filter(Boolean).sort((a,b)=>String(a).localeCompare(String(b),'pt-BR'));
    fill(types,typeValues,'Todos os tipos');
    fill(years,yearValues,'Todos os anos');
    genreControl=setupGenreFilter(genreBox,genreValues,g=>{state.genres=g;state.page=1;render();});
    const p=new URLSearchParams(location.search);
    state.query=p.get('q')||'';search.value=state.query;
    if(p.get('tipo')){state.type=p.get('tipo');types.value=state.type;}
    search.addEventListener('input',()=>{state.query=search.value;state.page=1;render();});
    types.addEventListener('change',()=>{state.type=types.value;state.page=1;render();});
    years.addEventListener('change',()=>{state.year=years.value;state.page=1;render();});
    sort.addEventListener('change',()=>{state.sort=sort.value;state.page=1;render();});
    render();
  }catch(e){grid.innerHTML=`<div class="error">${escapeHtml(e.message)}</div>`;count.textContent='Não foi possível carregar o catálogo.';}
})();
