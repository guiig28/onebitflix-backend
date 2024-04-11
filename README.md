
# OneBitFlix - Back-End

OneBitFlix é um projeto fullstack feito para o trabalho de conclusão do curso Deselvolvedor Fullstack da OneBitCode, onde simulamos uma plataforma de cursos onlines inspirado no Netflix. Essa parte do projeto consiste no back-end da plataforma, criado em Node.js, Sequelize e utilizando o MySQL como banco de dados.


## Principais Funcionalidades

- Painel admnistrativo para acessar as tabelas do banco de dados, estilizado utilizando o adminJS
- Utilização de migrations e seeders para a criação automática de tabelas e dados de exemplo
- Encriptamento na criação de senhas para mandar ao banco de dados
- Criação de token de acesso do usuário ao conteúdo exclusivo da plataforma através do JSON Web Tokens

## Tecnologias utilizadas
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
- 
## Inicialização

<h3>Pré-requisitos</h3>

Aqui estão os requisitos minimos para rodar a aplicação:

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)

<h3>Clonando o projeto</h3>

Para clonar esse projeto, basta colar o seguinte comando:

```bash
git clone https://github.com/guiig28/onebitflix-backend.git
```

<h3>Configurações de variáveis .env</h3>

Use o arquivo `.env.example` como referência para criar seu arquivo de configuração `.env` com suas próprias credenciais.

```yaml
DATABASE_URL=mysql://{YOUR_USERNAME}:{YOUR_PASSWORD}@{HOST}:{PORT}/{DATABASE_NAME}
ADMINJS_COOKIE_PASSWORD={YOUR_ADMINJS_COOKIE_PASSWORD}
JWT_KEY={YOUR_JWT_KEY}
```

<h3>Instalando Dependências</h3>

Para instalar todas as dependências necessárias para o funcionamento da aplicação e para o seu desenvolvimento:

```bash
npm install
```

<h3>Criando a database</h3>

Será necessário criar a database pelo mysql:

```mysql
CREATE DATABASE {DATABASE_NAME};
```
<h3>Testando a aplicação</h3>

Para testar em modo de desenvolvimento:

```bash
npm run dev
```

Para testar em modo de distribuição, será necessário primeiro converter a aplicação, para assim testá-la:

```bash
npm run build
```

```bash
npm run start
```

<h2 id="routes">API Endpoints</h2>

Descrição de todos os endpoints da api:
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| [<kbd>POST /auth/register</kbd>](#post-auth-register)     | cria um registro para o usuário
| [<kbd>POST /auth/login</kbd>](#post-auth-login)     | gera ao usuário um codigo de acesso que o permite a acessar a o conteudo da aplicação

<h3 id="post-auth-register">POST /auth/register</h3>

**REQUEST**
```json
{
  "username": "fernandakipper",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
  "name": "Fernanda Kipper",
  "age": 20,
  "email": "her-email@gmail.com"
}
```

<h3 id="post-auth-login">POST /auth/login</h3>

**REQUEST**
```json
{
  "username": "fernandakipper",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```
