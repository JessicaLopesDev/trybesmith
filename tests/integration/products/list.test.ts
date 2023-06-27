import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () {
    sinon.restore();
  });
  // it('Testa se é possível listar todos os produtos com sucesso', async function () {
  //   sinon.stub(ProductModel, 'findAll').resolves();
  //   const response = await chai.request(app).get('/products').send();

  //   expect(response.body).to.be.equal([
  //     {
  //       id: 1,
  //       name: 'Excalibur',
  //       price: '10 peças de ouro',
  //       orderId: 1,
  //     },
  //     {
  //       id: 2,
  //       name: 'Espada Justiceira',
  //       price: '20 peças de ouro',
  //       orderId: 1,
  //     },
  //     {
  //       id: 3,
  //       name: 'Lira de Orfeu',
  //       price: '1 peça de ouro',
  //       orderId: 2,
  //     },
  //     {
  //       id: 4,
  //       name: 'Armadura de Aquiles',
  //       price: '1 peça de ouro',
  //       orderId: 2,
  //     },
  //     {
  //       id: 5,
  //       name: 'Harpa de Dagda',
  //       price: '15 peças de ouro',
  //       orderId: 3,
  //     },
  //   ]);
  //   // expect(response.status).to.eq(200);
  // });
});
