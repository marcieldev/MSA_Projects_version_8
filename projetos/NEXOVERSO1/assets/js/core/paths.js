/* PATHS — resolve URLs do projeto; não conhece DOM nem componentes */
const root=new URL('../../../',new URL(import.meta.url));
export const pageUrl=path=>new URL(String(path||'').replace(/^\//,''),root).href;
export const assetUrl=path=>pageUrl(path);
