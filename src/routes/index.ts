import { Router } from 'express';

import productsRouter from './products';
import ordersRouter from './orders';

const appRoutes = Router();

appRoutes.use('/products', productsRouter);
appRoutes.use('/orders', ordersRouter);

export default appRoutes;
