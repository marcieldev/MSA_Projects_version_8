#!/usr/bin/env python3
"""Valida e resume os dados JSON do MSA Projects.
Uso: python scripts/python/processar_dados.py
"""
from pathlib import Path
import json, sys

ROOT=Path(__file__).resolve().parents[2]
DATA=ROOT/'data'
errors=[]; files=0
for path in sorted(DATA.rglob('*.json')):
    files += 1
    try:
        json.loads(path.read_text(encoding='utf-8'))
    except Exception as exc:
        errors.append(f'{path.relative_to(ROOT)}: {exc}')
print(f'JSON analisados: {files}')
if errors:
    print('ERROS:')
    print('\n'.join(errors)); sys.exit(1)
print('Todos os JSON são válidos.')
