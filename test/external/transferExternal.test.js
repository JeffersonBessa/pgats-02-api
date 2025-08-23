//Bibliotecas
const request = require('supertest');
const { expect } = require('chai');

//Testes
describe('Transfer Controller', () => {
    
    describe('POST /transfer', () => {

        it('Quando uso dados inválidos o retorno será 400 HTTP', async () =>{
            const resposta = await request('http://localhost:3000')
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
});