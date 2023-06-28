import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

export type OrderProps = {
  id: number;
  userId: number;
  productIds?: number[];
};

const OrdersService = {
  findAll: async (): Promise<ServiceResponse<OrderProps[]>> => {
    const orders = await OrderModel.findAll({
      attributes: ['id', 'userId'],
      include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
    });
    const ordersResponse = orders.map(({ dataValues }) => ({
      id: dataValues.id,
      userId: dataValues.userId,
      productIds: dataValues.productIds?.map((item) => item.id),
    }));
    const response: ServiceResponse<OrderProps[]> = {
      status: 'SUCCESSFUL',
      data: ordersResponse,
    };
    return response;
  },
};

export default OrdersService;
