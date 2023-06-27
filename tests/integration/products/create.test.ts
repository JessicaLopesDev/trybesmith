import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('Testa se é possível cadastrar um produto com sucesso', async function () {
    const httpRequestBody = productMock.validReq;

    const mockReturn = ProductModel.build(productMock.validRes);
    sinon.stub(ProductModel, 'create').resolves(mockReturn);
    const response = await chai
      .request(app)
      .post('/products')
      .send(httpRequestBody);

    expect(response.body).to.be.deep.equal(productMock.validRes);
    expect(response.status).to.eq(201);
  });
});
