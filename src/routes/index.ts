import { Router } from 'express';

import productsRouter from './products';
// import userRouter from './user';
// import categoriesRouter from './categories';
// import postRouter from './post';

const appRoutes = Router();

appRoutes.use('/products', productsRouter);
// appRoutes.use('/user', userRouter);
// appRoutes.use('/categories', categoriesRouter);
// appRoutes.use('/post', postRouter);

export default appRoutes;
