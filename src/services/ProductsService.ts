import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const ProductsService = {
  create: async (product: Product): Promise<ServiceResponse<Product>> => {
    // const error = validateParams(product);
    // if (error) {
    //   responseService = { status: 'INVALID_DATA', data: { message: error } };
    //   return responseService;
    // }
    const newProduct = await ProductModel.create(product);
    const responseService: ServiceResponse<Product> = {
      status: 'SUCCESSFUL',
      data: newProduct.dataValues,
    };
    return responseService;
  },
};

export default ProductsService;
