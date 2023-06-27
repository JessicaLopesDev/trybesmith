import { Router } from 'express';

import productsRouter from './products';
import ordersRouter from './orders';
// import userRouter from './user';
// import categoriesRouter from './categories';
// import postRouter from './post';

const appRoutes = Router();

appRoutes.use('/products', productsRouter);
appRoutes.use('/orders', ordersRouter);

export default appRoutes;
