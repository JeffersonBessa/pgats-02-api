# API de Transferências

Esta API permite login, registro de usuários, consulta de usuários e transferência de valores, com regras básicas para aprendizado de testes e automação.

## Instalação

1. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

2. Inicie o servidor:
   ```bash
   node server.js
   ```

## Endpoints

- `POST /register`: Registra um novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `favorecido` (boolean).
- `POST /login`: Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users`: Lista todos os usuários registrados.
- `POST /transfer`: Realiza transferência. Campos obrigatórios: `from`, `to`, `amount`.
- `GET /transfers`: Lista todas as transferências realizadas.
- `GET /api-docs`: Documentação Swagger da API.

## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.

## Testes

Para testar a API com Supertest, importe o `app.js` diretamente em seus testes.

## Estrutura de Diretórios

- `controller/`: Lógica dos endpoints
- `service/`: Regras de negócio
- `model/`: Banco de dados em memória
- `app.js`: Configuração da aplicação Express
- `server.js`: Inicialização do servidor
- `swagger.json`: Documentação Swagger

## Observações

- O banco de dados é em memória, todos os dados são perdidos ao reiniciar o servidor.
- A API foi criada para fins educacionais e não deve ser usada em produção.
