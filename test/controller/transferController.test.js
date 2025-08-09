//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');

//Testes
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando uso dados inválidos o retorno será 400', async () =>{
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "julio",
                    to: "priscila",
                    amount: 1000000.00
                });
                expect(resposta.status).to.equal(400);
                expect(resposta.body).to.have.property('error', 'Usuário não encontrado');
            });
        });

     describe('GET /transfers', () => {
        //TODO its
    });
});
