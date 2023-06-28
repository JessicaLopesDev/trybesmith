import express from 'express';

import ProductsController from '../controllers/ProductsController';
import ProductNameValidation from '../middlewares/ProductNameValidation';
import ProductPriceValidation from '../middlewares/ProductPriceValidation';

const productsRouter = express.Router();

productsRouter.post(
  '/',
  ProductNameValidation,
  ProductPriceValidation,
  ProductsController.create,
);
productsRouter.get('/', ProductsController.findAll);

export default productsRouter;
