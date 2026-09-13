/* DATA — única camada responsável por ler JSON e localizar dados. */
import {DATA_FILES,CATALOG_FILES} from './config.js';
const cache=new Map();
function rootUrl(path){return new URL(`../../../../${path}`,import.meta.url)}
export async function json(path,{force=false}={}){const absolute=rootUrl(path).href;if(!force&&cache.has(absolute))return cache.get(absolute);const promise=fetch(absolute,{cache:'no-cache',headers:{Accept:'application/json'}}).then(async r=>{let body=null;try{body=await r.json()}catch{}if(!r.ok)throw new Error(body?.error||`Não foi possível carregar ${path} (${r.status}).`);return body}).catch(e=>{cache.delete(absolute);throw e});cache.set(absolute,promise);return promise}
export async function catalogo(){const sources=await Promise.all(CATALOG_FILES.map(path=>json(path)));return sources.flatMap(source=>(source.itens||[]).map(item=>({...item,categoria:item.categoria||source.categoria||'especial',tipo_conteudo:item.tipo_conteudo||'especial'})))}
export const taxonomia=()=>json('data/taxonomia.json');
export async function findById(id){const item=(await catalogo()).find(x=>String(x.id)===String(id));if(!item)throw new Error(`Conteúdo "${id}" não encontrado no catálogo.`);return item}
export const config=()=>json(DATA_FILES.config);export const alerts=()=>json(DATA_FILES.alerts);export const highlights=()=>json(DATA_FILES.highlights);export const community=()=>json(DATA_FILES.community);
