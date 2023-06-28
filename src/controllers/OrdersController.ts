import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';

const OrdersController = {
  findAll: async (_req: Request, res: Response): Promise<Response> => {
    const serviceResponse = await OrdersService.findAll();
    console.log(serviceResponse);
    return res.status(200).json(serviceResponse.data);
  },
};

export default OrdersController;
