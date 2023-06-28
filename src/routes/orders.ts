import express from 'express';

import OrdersController from '../controllers/OrdersController';

const ordersRouter = express.Router();

ordersRouter.get('/', OrdersController.findAll);

export default ordersRouter;
