//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');

//Mock
const transferService = require('../../service/transferService')

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

        it('Usando Mocks: Quando uso dados inválidos o retorno será 400', async () =>{
        
        //Mockar apenas a função Transfer do Service 
        const transferServiceMock = sinon.stub(transferService, 'transfer');    
        transferServiceMock.throws(new Error('Transferência acima de R$ 5.000,00 só para favorecidos'));

        const resposta = await request(app)
            .post('/transfer')
            .send({
                from: "julio",
                to: "priscila",
                amount: 1000000.00
            });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Transferência acima de R$ 5.000,00 só para favorecidos');
            
            sinon.restore();
        });

        it('Quando uso dados válidos o retorno será 201', async () => {
            await request(app)
                .post('/register')
                .send({ username: "julio", password: "123", favorecido: true });
            await request(app)
                .post('/register')
                .send({ username: "priscila", password: "456", favorecido: true });

            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "julio",
                    to: "priscila",
                    amount: 1000.00
                });
            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'julio');
            expect(resposta.body).to.have.property('to', 'priscila');
            expect(resposta.body).to.have.property('amount', 1000.00);
        });
    });
    
    describe('GET /transfers', () => {
        //TODO its
    });
});
