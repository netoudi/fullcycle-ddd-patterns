import { Order } from '../entity/order';
import { OrderItem } from '../entity/order_item';
import { OrderService } from './order.service';

describe('OrderService unit tests', () => {
  it('should get total of all orders', () => {
    const item1 = new OrderItem('i1', 'Item 1', 'p1', 100, 1);
    const item2 = new OrderItem('i2', 'Item 2', 'p2', 200, 2);

    const order1 = new Order('o1', 'c1', [item1]);
    const order2 = new Order('o2', 'c2', [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });
});