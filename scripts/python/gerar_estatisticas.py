#!/usr/bin/env python3
"""Gera data/estatisticas/estatisticas.json a partir do catálogo de projetos."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[2]; DATA=ROOT/'data'; OUT=DATA/'estatisticas/estatisticas.json'
projetos=[]
for path in (DATA/'projetos').glob('iniciais_*/*/*.json'):
    if path.name=='index.json': continue
    projetos.append(json.loads(path.read_text(encoding='utf-8')))
categorias=sorted({p.get('classificacao',{}).get('categoria') for p in projetos if p.get('classificacao',{}).get('categoria')})
tecnologias=sorted({t for p in projetos for t in p.get('tecnologias',[])})
status={}
for p in projetos:
    s=p.get('situacao',{}).get('status','não informado'); status[s]=status.get(s,0)+1
resultado={'geradoEm':'automático','totalProjetos':len(projetos),'totalCategorias':len(categorias),'totalTecnologias':len(tecnologias),'categorias':categorias,'tecnologias':tecnologias,'porStatus':status}
OUT.write_text(json.dumps(resultado,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(f'Estatísticas geradas: {OUT}')
