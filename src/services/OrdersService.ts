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
    const ordersResponse = orders.map(
      ({ id, userId, productIds }: OrderProps) => ({
        id: id,
        userId: userId,
        productIds: productIds?.map((item) => item),
      }),
    );
    const response: ServiceResponse<OrderProps[]> = {
      status: 'SUCCESSFUL',
      data: ordersResponse,
    };
    return response;
  },
};

export default OrdersService;
