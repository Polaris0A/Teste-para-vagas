# Teste-para-vagas
Teste para vagas - Genera

Cenários:

Foram identificados três cenários críticos na página; compra do pacote Genera Básico, compra do pacote Genera Standard 
e compra do pacote Genera Completo. Destes cenários, dois foram separados para teste.

Cenario 01 - Compra de pacote Genera básico com cartão de crédito.

Cenario 02 - Compra do pacote Genera completo via PIX.

Os cenários automatizados são constituidos pelo cadastro na página principal, compra de pacote e finalização da compra.


Como rodar:

Visual Studio Code instalado - https://visualstudio.microsoft.com/pt-br/

Node.js instalado - https://nodejs.org/pt-br/

Após abrir o projeto, digitar no terminal:

npm install (se for no linux: sudo npm install) e aguardar a instalação.

rodar testes E2E: "npm run test:E2E-chrome" no linux ou npm run cypress no windows.
