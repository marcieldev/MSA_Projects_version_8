window.MSA=window.MSA||{};
window.MSA.projetos=window.MSA.projetos||{};

(function(){
  async function carregarDoJson(){
    const index=await MSA.dados.carregarJson('data/projetos/index.json');
    const iniciais=await Promise.all((index.iniciais||[]).map(async i=>({meta:i,data:await MSA.dados.carregarJson(i.caminho)})));
    const categorias=[];
    for(const item of iniciais){
      for(const categoria of (item.data.categorias||[])) categorias.push({inicial:item.meta.inicial,...categoria});
    }
    const projetos=[];
    for(const categoria of categorias){
      const indice=await MSA.dados.carregarJson(categoria.caminho);
      for(const arquivo of (indice.projetos||[])){
        try{
          const base=categoria.caminho.replace(/index\.json$/,'');
          projetos.push(await MSA.dados.carregarJson(base+arquivo));
        }catch(error){console.warn('Projeto ignorado:',arquivo,error);}
      }
    }
    return projetos;
  }

  async function iniciar(){
    try{
      const projetos=await carregarDoJson();
      MSA.projetos.lista=projetos;
      MSA.projetos.fonte='json';
      MSA.dados.receberDados('projetos.lista',projetos);
      document.dispatchEvent(new CustomEvent('msa:projetos-prontos',{detail:{projetos,fonte:'json'}}));
    }catch(error){
      console.error('MSA Projects: erro no catálogo.',error);
      MSA.projetos.lista=[];
      MSA.projetos.fonte='json';
      document.dispatchEvent(new CustomEvent('msa:projetos-prontos',{detail:{projetos:[],fonte:'json',erro:error}}));
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar,{once:true}); else iniciar();
})();
