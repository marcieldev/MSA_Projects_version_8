(function(){
  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const arr=v=>Array.isArray(v)?v:[];
  const root=(document.documentElement.dataset.msaRoot||'./').replace(/\/?$/,'/');
  const asset=v=>root+String(v).replace(/^\.\//,'');
  const countDisc=d=>arr(d.periodos).reduce((n,p)=>n+arr(p.disciplinas).length,0);
  async function init(){
    const el=document.querySelector('#founder-detail'); if(!el)return;
    try{
      const [bio,exp,disc,study]=await MSA.dados.carregarJsons([
        'data/model_fundador/biografia_dev.json',
        'data/model_fundador/experiencia_pessoal.json',
        'data/model_fundador/disciplina_study.json',
        'data/model_fundador/study_externo.json'
      ]);
      const p=bio.perfil||{}, f=bio.formacao||{}, experiencias=arr(exp.experiencias), estudos=arr(study.estudos), disciplinas=countDisc(disc);
      const status=f.status==='em-andamento'?'Em formação':(f.status||'Em evolução');
      const interesses=arr(bio.interesses).map(x=>`<b>${esc(x)}</b>`).join('');
      const areas=arr(bio.areasDeInteresse).map(x=>`<b>${esc(x)}</b>`).join('');
      const tech=arr(bio.tecnologiasDeInteresse).map(x=>`<b>${esc(x)}</b>`).join('');
      const aprendizado=arr(bio.formaDeAprendizado).map(x=>`<li>${esc(x)}</li>`).join('');
      const trajetoria=arr(bio.trajetoria).map(x=>`<div class="founder-timeline-item"><b>${esc(x.periodo)}</b><strong>${esc(x.titulo)}</strong><p>${esc(x.descricao)}</p></div>`).join('');
      const expHtml=experiencias.map(x=>`<article class="founder-record"><strong>${esc(x.titulo)}</strong><small>${esc(x.tipo||'Experiência')}${x.periodo?.status?` · ${esc(x.periodo.status)}`:''}</small><p>${esc(x.descricao||'')}</p>${x.motivacao?`<p><b>Motivação:</b> ${esc(x.motivacao)}</p>`:''}</article>`).join('');
      const studyHtml=estudos.map(x=>`<article class="founder-record"><strong>${esc(x.titulo)}</strong><small>${esc(x.tipo||'Estudo')}${x.plataforma?` · ${esc(x.plataforma)}`:''}</small><p>${esc(x.descricao||'')}</p>${arr(x.conhecimentosAdquiridos).length?`<ul>${arr(x.conhecimentosAdquiridos).map(y=>`<li>${esc(y)}</li>`).join('')}</ul>`:''}</article>`).join('');
      const discHtml=arr(disc.periodos).map(periodo=>`<article class="founder-record"><strong>${esc(periodo.periodo||periodo.id||'Período')}</strong><ul>${arr(periodo.disciplinas).map(x=>`<li>${esc(x.titulo||'Disciplina')}${x.status?` — ${esc(x.status)}`:''}</li>`).join('')}</ul></article>`).join('');
      document.title=`${p.nome||'Fundador'} — MSA Projects`;
      el.innerHTML=`<div class="founder-detail-hero"><div><span class="section-label">POR TRÁS DOS PROJETOS</span><h1>${esc(p.nome||'Fundador')}</h1><p class="founder-detail-subtitle">${esc(p.titulo||'')}<br>${esc(p.descricao||'')}</p><div class="founder-detail-actions"><a class="button button-primary" href="../../index.html">Voltar ao início</a><a class="button button-secondary" href="../../paginas/pagina_projetos/index.html">Ver projetos</a></div></div><aside class="founder-profile-card"><img src="${asset('assets/img/foto_perfil_1/1.jpg')}" alt="Foto de ${esc(p.nome||'Marciel S. Almeida')}"><span>FUNDADOR</span><strong>${esc(p.nome||'')}</strong><small>${esc(status)}</small><small>${esc(f.curso||'')} · ${esc(f.instituicao||'')}</small></aside></div><div class="content-grid founder-detail-grid"><article class="info-card info-card-wide"><span class="project-meta">Sobre o fundador</span><p>${esc(p.descricao||'')}</p></article><article class="info-card"><span class="project-meta">Objetivo</span><p>${esc(bio.objetivo?.principal||'')}</p><p>${esc(bio.objetivo?.descricao||'')}</p></article><article class="info-card"><span class="project-meta">Formação</span><p>${esc(f.curso||'')}</p><p>${esc(f.instituicao||'')} · ${esc(f.inicio||'')} — ${esc(f.previsaoConclusao||'')}</p></article><article class="info-card"><span class="project-meta">Interesses</span><div class="founder-pills">${interesses}</div></article><article class="info-card"><span class="project-meta">Áreas de interesse</span><div class="founder-pills">${areas}</div></article><article class="info-card"><span class="project-meta">Tecnologias de interesse</span><div class="founder-pills">${tech}</div></article><article class="info-card"><span class="project-meta">Como aprendo</span><ul>${aprendizado}</ul></article><article class="info-card"><span class="project-meta">Filosofia</span><p>${esc(bio.filosofia||'')}</p></article><article class="info-card info-card-wide"><span class="project-meta">Trajetória</span><div class="founder-timeline">${trajetoria}</div></article><article class="info-card founder-note"><span class="project-meta">Um registro pessoal</span><p>${esc(bio.observacoes||'')}</p><p>${esc(bio.observacoesSobreOqueMeImpediDeEvolui||'')}</p></article><article class="info-card info-card-wide"><span class="project-meta">Experiências registradas (${experiencias.length})</span><div class="founder-records">${expHtml||'<p>Nenhuma experiência registrada.</p>'}</div></article><article class="info-card info-card-wide"><span class="project-meta">Formação acadêmica (${disciplinas} disciplinas)</span><div class="founder-records">${discHtml||'<p>Nenhuma disciplina registrada.</p>'}</div></article><article class="info-card info-card-wide"><span class="project-meta">Estudos externos (${estudos.length})</span><div class="founder-records">${studyHtml||'<p>Nenhum estudo externo registrado.</p>'}</div></article></div><div class="founder-return"><a class="button button-primary" href="../../index.html">Voltar ao MSA Projects</a></div>`;
    }catch(err){console.error('Perfil do fundador:',err);el.innerHTML='<div class="empty-state"><h1>Perfil indisponível</h1><p>Não foi possível carregar os dados do fundador.</p><a class="button button-primary" href="../../index.html">Voltar ao início</a></div>';}
  }
  document.addEventListener('DOMContentLoaded',init);
})();