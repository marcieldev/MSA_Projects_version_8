@echo off
cd /d "%~dp0"
echo Iniciando MSA Projects em http://localhost:8000
python -m http.server 8000
