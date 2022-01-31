# Teste-para-vagas
Teste para vaga Genera

Cenários:

Foram identificados três cenários críticos na página; compra do pacote Genera Básico, compra do pacote Genera Standard 
e compra do pacote Genera Completo. Destes cenários, dois foram separados para teste.

Cenario 01 - Compra de pacote Genera básico com cartão de crédito.

Cenario 02 - Compra do pacote Genera completo via PIX.

Os cenários automatizados são constituidos pelo cadastro na página principal, compra de pacote e finalização da compra.


Como rodar:

Visual Studio Code instalado - https://visualstudio.microsoft.com/pt-br/

Node.js instalado - https://nodejs.org/pt-br/


Passo 01 -  Crie uma nova pasta na unidade C do seu computador, em seguida transfira pra ela todos os 
arquivos copiados do projeto de testes no Github: pasta cypress, cypress.jason, package-lock.json, package.json.


Passo 02 - Abra o Visual Studio Code e clique em arquivo, abrir pasta e selecione a pasta que criou, com os arquivos do passo 01,
clique em selecionar pasta. Agora os arquivos do teste e os arquivos de apoio irão aparecer no lado esquerdo da tela do Visual Studio Code.


Passo 03 - Através do terminal do Visual Studio Code, faça a instalação do Cypress utilizando o comando npm install.Aguarde a instalação.


Passo 04 - Para executar o teste digite o comando npx cypress run --heade --no-exit, no terminal do VS Code. 
Pode demorar alguns minutos até a execução, aguarde.

Nota: Os dois testes devem ser executados em sequencia até a etapa de finalização.
