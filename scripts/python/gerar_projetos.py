#!/usr/bin/env python3
"""Reconstrói os índices de categorias dos projetos a partir dos arquivos de projeto."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[2]; DATA=ROOT/'data/projetos'
for idx in sorted(DATA.glob('iniciais_*/**/index.json')):
    if idx == DATA/'index.json': continue
    if idx.parent.name.startswith('iniciais_'): continue
    projetos=sorted(p.name for p in idx.parent.glob('*.json') if p.name!='index.json')
    try: d=json.loads(idx.read_text(encoding='utf-8'))
    except Exception: continue
    d['projetos']=projetos
    idx.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Índices de projetos atualizados.')
