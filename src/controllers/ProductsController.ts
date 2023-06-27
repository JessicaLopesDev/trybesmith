import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const ProductsController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const { name, price, orderId } = req.body;
    const serviceResponse = await ProductsService.create({
      name,
      price,
      orderId,
    });
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }
    return res.status(201).json(serviceResponse.data);
  },

  // findAll: async (_req: Request, res: Response): Promise<Response> => {
  //   const serviceResponse = await ProductsService.findAll();
  //   if (serviceResponse.status !== 'SUCCESSFUL') {
  //     return res
  //       .status(mapStatusHTTP(serviceResponse.status))
  //       .json(serviceResponse.data);
  //   }
  //   return res.status(200).json(serviceResponse.data);
  // },
};

export default ProductsController;
