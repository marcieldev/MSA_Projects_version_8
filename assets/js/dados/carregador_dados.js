window.MSA=window.MSA||{};
window.MSA.dados=window.MSA.dados||{};

(function(){
  const configuredRoot=document.documentElement.dataset.msaRoot || './';
  const root=configuredRoot.endsWith('/')?configuredRoot:configuredRoot+'/';

  function resolver(caminho){
    if(!caminho) throw new Error('Caminho de dados não informado.');
    if(/^(https?:)?\//.test(caminho)) return caminho;
    return root+caminho.replace(/^\.\//,'');
  }

  async function carregarJson(caminho){
    const url=resolver(caminho);
    const response=await fetch(url,{headers:{'Accept':'application/json'}});
    if(!response.ok) throw new Error(`Falha ao carregar ${url} (${response.status})`);
    return response.json();
  }

  async function carregarJsons(caminhos){return Promise.all(caminhos.map(carregarJson));}
  window.MSA.dados.resolver=resolver;
  window.MSA.dados.carregarJson=carregarJson;
  window.MSA.dados.carregarJsons=carregarJsons;
})();
