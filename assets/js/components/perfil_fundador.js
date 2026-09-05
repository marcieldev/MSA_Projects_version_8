/* ============================================================
   MSA PROJECTS — PERFIL DO FUNDADOR
   ------------------------------------------------------------
   Lê os arquivos JSON do fundador e alimenta:
   1. a sidebar da Home;
   2. o modal completo do perfil.
   ============================================================ */
window.MSA = window.MSA || {};
(function () {
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
  const arr = (v) => Array.isArray(v) ? v : [];
  const root = (document.documentElement.dataset.msaRoot || './').replace(/\/?$/, '/');
  const asset = (v) => root + String(v).replace(/^\.\//, '');
  const countDisc = (disc) => arr(disc.periodos).reduce((total, periodo) => total + arr(periodo.disciplinas).length, 0);

  async function carregar() {
    try {
      const [bio, exp, disc, study] = await MSA.dados.carregarJsons([
        'data/model_fundador/biografia_dev.json',
        'data/model_fundador/experiencia_pessoal.json',
        'data/model_fundador/disciplina_study.json',
        'data/model_fundador/study_externo.json'
      ]);

      MSA.dados.receberDados('fundador.biografia', bio);
      MSA.dados.receberDados('fundador.experiencias', exp);
      MSA.dados.receberDados('fundador.disciplinas', disc);
      MSA.dados.receberDados('fundador.estudos', study);
      render(bio, exp, disc, study);
    } catch (e) {
      console.error('Perfil do fundador:', e);
    }
  }

  function render(bio, exp, disc, study) {
    const p = bio.perfil || {};
    const f = bio.formacao || {};
    const experiencias = arr(exp.experiencias);
    const disciplinas = countDisc(disc);
    const estudos = arr(study.estudos);

    document.querySelectorAll('[data-founder-name]').forEach((el) => el.textContent = p.nome || 'Fundador');
    document.querySelectorAll('[data-founder-title]').forEach((el) => el.textContent = p.titulo || '');
    document.querySelectorAll('[data-founder-description]').forEach((el) => el.textContent = p.descricao || '');
    document.querySelectorAll('[data-founder-photo]').forEach((el) => el.src = asset('assets/img/foto_perfil_1/1.jpg'));
    document.querySelectorAll('[data-founder-formation]').forEach((el) => el.textContent = f.curso || '');
    document.querySelectorAll('[data-founder-status]').forEach((el) => el.textContent = f.status === 'em-andamento' ? 'Em formação' : (f.status || 'Em evolução'));

    const set = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
    set('#sidebar-experience-count', experiencias.length);
    set('#sidebar-discipline-count', disciplinas);
    set('#sidebar-study-count', estudos.length);

    const modal = document.querySelector('#founder-profile-modal');
    if (!modal) return;

    const periodosAcademicos = arr(disc.periodos).map(periodo => `
      <article class="study-period">
        <h4>${esc(periodo.periodo || periodo.id || 'Período')}</h4>
        <ul>${arr(periodo.disciplinas).map(item => `<li><strong>${esc(item.titulo)}</strong><small>${esc(item.status || '')}${item.progresso != null ? ` · ${esc(item.progresso)}%` : ''}</small></li>`).join('')}</ul>
      </article>`).join('');

    const estudosExternos = estudos.map(item => `
      <article class="study-item">
        <strong>${esc(item.titulo)}</strong>
        <small>${esc(item.tipo || 'estudo')}${item.plataforma ? ` · ${esc(item.plataforma)}` : ''}</small>
        <p>${esc(item.descricao || '')}</p>
        ${arr(item.conhecimentosAdquiridos).length ? `<ul>${arr(item.conhecimentosAdquiridos).slice(0, 4).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      </article>`).join('');

    const experienciasHtml = experiencias.map(item => `
      <article class="study-item">
        <strong>${esc(item.titulo)}</strong>
        <small>${esc(item.tipo || 'experiência')} · ${esc(item.periodo?.status || '')}</small>
        <p>${esc(item.descricao || '')}</p>
        ${item.motivacao ? `<p><b>Motivação:</b> ${esc(item.motivacao)}</p>` : ''}
      </article>`).join('');

    modal.innerHTML = `<div class="modal-header">
      <div><span class="profile-kicker">PERFIL DO FUNDADOR</span><h2 id="founder-profile-title">${esc(p.nome || 'Fundador')}</h2></div>
      <button class="modal-close" type="button" data-modal-close="founder-profile-modal" aria-label="Fechar">×</button>
    </div>
    <div class="founder-modal-body">
      <div class="founder-modal-intro">
        <img src="${asset('assets/img/foto_perfil_1/1.jpg')}" alt="Foto do fundador">
        <div><strong>${esc(p.titulo || '')}</strong><p>${esc(p.descricao || '')}</p></div>
      </div>
      <div class="founder-modal-grid">
        <article><span>Objetivo</span><p>${esc(bio.objetivo?.principal || '')}</p><small>${esc(bio.objetivo?.descricao || '')}</small></article>
        <article><span>Formação</span><p>${esc(f.curso || '')}</p><small>${esc(f.instituicao || '')} · ${esc(f.inicio || '')} — ${esc(f.previsaoConclusao || '')}</small></article>
        <article><span>Filosofia</span><p>${esc(bio.filosofia || '')}</p></article>
        <article><span>Interesses</span><div class="profile-pills">${arr(bio.interesses).map(x => `<b>${esc(x)}</b>`).join('')}</div></article>
        <article><span>Áreas de interesse</span><div class="profile-pills">${arr(bio.areasDeInteresse).map(x => `<b>${esc(x)}</b>`).join('')}</div></article>
        <article><span>Tecnologias de interesse</span><div class="profile-pills">${arr(bio.tecnologiasDeInteresse).map(x => `<b>${esc(x)}</b>`).join('')}</div></article>
        <article><span>Como aprendo</span><ul>${arr(bio.formaDeAprendizado).map(x => `<li>${esc(x)}</li>`).join('')}</ul></article>
        <article><span>Trajetória</span><div class="profile-timeline">${arr(bio.trajetoria).map(x => `<div><b>${esc(x.periodo)}</b><strong>${esc(x.titulo)}</strong><p>${esc(x.descricao)}</p></div>`).join('')}</div></article>
        <article class="founder-note"><span>Um registro pessoal</span><p>${esc(bio.observacoes || '')}</p><p>${esc(bio.observacoesSobreOqueMeImpediDeEvolui || '')}</p></article>
        <article class="founder-wide"><span>Experiências registradas (${experiencias.length})</span><div class="study-list">${experienciasHtml || '<p>Nenhuma experiência registrada.</p>'}</div></article>
        <article class="founder-wide"><span>Formação acadêmica (${disciplinas} disciplinas)</span><div class="study-list">${periodosAcademicos || '<p>Nenhuma disciplina registrada.</p>'}</div></article>
        <article class="founder-wide"><span>Estudos externos (${estudos.length})</span><div class="study-list">${estudosExternos || '<p>Nenhum estudo externo registrado.</p>'}</div></article>
      </div>
    </div>`;
  }

  document.addEventListener('DOMContentLoaded', carregar);
})();
