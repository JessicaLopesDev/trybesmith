import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('Testa se é possível listar todos os produtos com sucesso', async function () {
    const mockList = [
      ProductModel.build(productMock.allProducts[0]),
      ProductModel.build(productMock.allProducts[1]),
    ];
    sinon.stub(ProductModel, 'findAll').resolves(mockList);
    const response = await chai.request(app).get('/products').send();

    expect(response.body).to.be.deep.equal(productMock.allProducts);
    expect(response.status).to.eq(200);
  });
});
