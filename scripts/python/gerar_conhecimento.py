#!/usr/bin/env python3
"""Valida os arquivos de conhecimento e gera um pequeno índice."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[2]; DATA=ROOT/'data/conhecimento'; OUT=DATA/'_indice.json'
itens=[]
for path in sorted(DATA.glob('*.json')):
    if path.name.startswith('_'): continue
    d=json.loads(path.read_text(encoding='utf-8')); itens.append({'id':d.get('id',path.stem),'titulo':d.get('titulo',path.stem),'arquivo':str(path.relative_to(ROOT))})
OUT.write_text(json.dumps({'total':len(itens),'itens':itens},ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(f'Índice de conhecimento gerado: {OUT}')
