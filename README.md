
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
## Inicialização

<h3>Pré-requisitos</h3>

Aqui estão os requisitos minimos para rodar a aplicação:

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [MySQL](https://www.mysql.com/)

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
| rota                 | descrição                                            
|----------------------|-----------------------------------------------------
| [<kbd>POST /auth/register</kbd>](#post-auth-register)      | cria um registro para o usuário
| [<kbd>POST /auth/login</kbd>](#post-auth-login)      | gera ao usuário um codigo de acesso que o permite a acessar a o conteudo da aplicação
| [<kbd>GET /categories</kbd>](#get-categories)      | busca por todas as categorias de curso
| [<kbd>GET /categories/:id</kbd>](#get-categories-id)      | busca por todos os cursos de uma categoria específica
| [<kbd>GET /courses/featured</kbd>](#get-courses-featured)      | busca por todos os cursos em destaque
| [<kbd>GET /courses/newest</kbd>](#get-courses-newest)      | busca pelos cursos mais novos
| [<kbd>GET /courses/popular</kbd>](#get-courses-popular)      | busca pelos 10 cursos mais curtidos
| [<kbd>GET /courses/search</kbd>](#get-courses-search)      | busca por cursos pelo nome
| [<kbd>GET /courses/:id</kbd>](#get-courses-id)      | busca um curso específico pelo seu id
| [<kbd>GET /episodes/stream</kbd>](#get-episodes-stream)      | busca por um episódio específico para transmitir
| [<kbd>GET /episodes/:id/watchtime</kbd>](#get-episodes-id-watchtime)      | busca pela minutagem de um episódio ja assistida pelo usuário 
| [<kbd>POST /episodes/:id/watchtime</kbd>](#post-episodes-id-watchtime)      | salva a minutagem de um episódio assistida pelo usuário
| [<kbd>GET /favorites</kbd>](#get-favorites)      | busca por todos os cursos favoritados
| [<kbd>POST /favorites</kbd>](#post-favorites)      | adiciona um curso aos favoritos
| [<kbd>DELETE /favorites/:id</kbd>](#delete-favorites-id)      | remove um curso dos favoritos
| [<kbd>POST /likes</kbd>](#post-likes)      | adiciona um like ao curso
| [<kbd>DELETE /likes/:id</kbd>](#delete-likes-id)      | remove o like do curso
| [<kbd>GET /users/current</kbd>](#get-users-current)      | busca pelos dados do usuário atual
| [<kbd>GET /users/current/watching</kbd>](#get-users-current-watching)      | busca pelos episódios que o usuário começou a assistir e não terminou
| [<kbd>PUT /users/current</kbd>](#put-users-current)      | altera os dados do usuário atual, exceto a senha
| [<kbd>PUT /users/current/password</kbd>](#put-users-current-password)      | altera a senha do usuário atual

<h3 id="post-auth-register">POST /auth/register</h3>

**REQUEST**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "999999999",
  "birth": "1995-09-02",
  "email": "john2@email.com",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "999999999",
  "birth": "1995-09-02",
  "email": "john2@email.com",
  "password": "4444444",
  "role": "user"
  "updatedAt": "2024-04-11T18:39:07.476Z"
  "createdAt": "2024-04-11T18:39:07.476Z"
}
```

<h3 id="post-auth-login">POST /auth/login</h3>

**REQUEST**
```json
{
  "email": "john2@email.com",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
  "authenticated": true,
  "id": 27,
  "firstName": "John",
  "email": "john2@email.com",
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```

<h3 id="get-categories">GET /categories/</h3>

**RESPONSE**
```json
{
  "categories": [
    {
      "id": 15,
      "name": "courseName",
      "position": 7
    }
  ],
  "page": 1,
  "perPage": 1,
  "total": 1
}
```

<h3 id="get-categories-id">GET /categories/:id</h3>

**RESPONSE**
```json
[
  {
    "id": 20,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  },
  {
    "id": 21,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  }
]
```

<h3 id="get-courses-featured">GET /courses/featured</h3>

**RESPONSE**
```json
[
  {
    "id": 33,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  },
  {
    "id": 34,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  },
  {
    "id": 35,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  }
]
```

<h3 id="get-courses-newest">GET /courses/newest</h3>

**RESPONSE**
```json
[
  {
    "id": 37,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
    "featured": null,
    "categoryId": 12,
    "updatedAt": "2024-04-11T18:39:07.476Z",
    "createdAt": "2024-04-11T18:39:07.476Z"

  },
  {
    "id": 36,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
    "featured": null,
    "categoryId": 12,
    "updatedAt": "2024-04-10T18:39:07.476Z",
    "createdAt": "2024-04-10T18:39:07.476Z"
  },
  {
    "id": 35,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
    "featured": null,
    "categoryId": 12,
    "updatedAt": "2024-04-09T18:39:07.476Z",
    "createdAt": "2024-04-09T18:39:07.476Z"
  }
]
```

<h3 id="get-courses-popular">GET /courses/popular</h3>

**RESPONSE**
```json
[
  {
    "id": 9,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
    "likes": 45
  },
  {
    "id": 28,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
    "likes": 39
  },
  {
    "id": 14,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
    "likes": 33
  }
]
```

<h3 id="get-courses-search">GET /courses/search</h3>

**REQUEST**

`/search?name={COURSE_NAME}`

**RESPONSE**
```json
[
  {
    "id": 11,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
  }
]
```

<h3 id="get-courses-id">GET /courses/:id</h3>

**REQUEST**

`/courses/5`

**RESPONSE**
```json
[
  {
    "id": 5,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl",
  }
]
```

<h3 id="get-id-watchtime">GET /episodes/:id/watchtime</h3>

**REQUEST**

`/episodes/7/watchTime`

**RESPONSE**
```json
{
  "seconds": 120
}
```

<h3 id="post-id-watchtime">POST /episodes/:id/watchtime</h3>

**REQUEST**

`/episodes/15/watchTime`

```json
{
  "seconds": 120
}
```

**RESPONSE**
```json
{
  "userId": 26,
  "episodeId": 15,
  "updatedAt": "2024-04-11T18:39:07.476Z",
  "createdAt": "2024-04-11T18:39:07.476Z"
}
```

<h3 id="get-favorites">GET /favorites</h3>

**RESPONSE**
```json
[
  {
    "id": 21,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  },
  {
    "id": 7,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  },
  {
    "id": 2,
    "name": "courseName",
    "synopsis": "courseSynopsis",
    "thumbnailUrl": "courseThumbnailUrl"
  }
]
```

<h3 id="post-favorites">POST /favorites</h3>

**REQUEST**
```json
{
  "courseId": 11
}
```

**RESPONSE**
```json
{
  "courseId": 11,
  "userId": 31,
  "updatedAt": "2024-04-11T18:39:07.476Z",
  "createdAt": "2024-04-11T18:39:07.476Z"
}
```

<h3 id="delete-favorites-id">DELETE /favorites/:id</h3>

**REQUEST**

`/favorites/19`

<h3 id="post-likes">POST /likes</h3>

**REQUEST**
```json
{
  "courseId": 6
}
```

**RESPONSE**
```json
{
  "courseId": 6,
  "userId": 28,
  "updatedAt": "2024-04-11T18:39:07.476Z",
  "createdAt": "2024-04-11T18:39:07.476Z"
}
```

<h3 id="delete-likes-id">DELETE /likes/:id</h3>

**REQUEST**

`/likes/12`

<h3 id="get-user-current">GET /user/current</h3>

**RESPONSE**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "999999999",
  "birth": "1995-09-02",
  "email": "john2@email.com",
  "password": "F41A65F416A41FDSAW6541FA8F41W41Q891WQ981QF91WQ8F5E91WQ",
  "role": "user"
  "updatedAt": "2024-04-11T18:39:07.476Z"
  "createdAt": "2024-04-11T18:39:07.476Z"
}
```
<h3 id="put-users-current">PUT /user/current</h3>

**REQUEST**
```json
{
    "phone": "911111111",
    "email": "john3@email.com"
}
```

**RESPONSE**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "911111111",
  "birth": "1995-09-02",
  "email": "john3@email.com",
  "password": "F41A65F416A41FDSAW6541FA8F41W41Q891WQ981QF91WQ8F5E91WQ",
  "role": "user"
  "updatedAt": "2024-04-11T18:39:07.476Z"
  "createdAt": "2024-04-11T18:39:07.476Z"
}
```

<h3 id="put-users-current-password">PUT /user/current/password</h3>

**REQUEST**
```json
{
    "currentPassword": "444444",
    "newPassword": "654321"
}
```
