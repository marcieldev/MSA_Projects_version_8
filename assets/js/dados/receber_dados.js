window.MSA=window.MSA||{};
window.MSA.dados=window.MSA.dados||{};
const dadosMSA=window.MSA.dados.estado||{configuracoes:{},navegacao:{},conhecimento:{},evolucao:{},estatisticas:{},projetos:{}};
function receberDados(chave,dados){if(!chave)return;const partes=chave.split('.');let atual=dadosMSA;partes.forEach((parte,i)=>{if(i===partes.length-1)atual[parte]=dados;else{atual[parte]??={};atual=atual[parte];}});}
function obterDados(chave){if(!chave)return null;return chave.split('.').reduce((atual,parte)=>atual?.[parte],dadosMSA)??null;}
function possuiDados(chave){const d=obterDados(chave);return Array.isArray(d)?d.length>0:!!d&&(typeof d!=='object'||Object.keys(d).length>0);}
function limparDados(){Object.keys(dadosMSA).forEach(k=>dadosMSA[k]={});}
window.MSA.dados.receberDados=receberDados;window.MSA.dados.obterDados=obterDados;window.MSA.dados.possuiDados=possuiDados;window.MSA.dados.limparDados=limparDados;window.MSA.dados.estado=dadosMSA;
