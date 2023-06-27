import express from 'express';

import ProductsController from '../controllers/ProductsController';

const productsRouter = express.Router();

productsRouter.post('/', ProductsController.create);

export default productsRouter;
