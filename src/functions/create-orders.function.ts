import { IOrderItem } from "../models/entities/order-item.model";
import { IOrder } from "../models/entities/order.model";
import { IProduct } from "../models/entities/product.model";
import { rndNumber } from "./rnd-number.function";
import { rndTuble } from "./rnd-tuble.function";

export function createOrders(amount: number, amountOfCustomer: number, products: IProduct[]): IOrder[] {
    return Array.from({ length: amount }).map((_) => {
        const [rnd1, rnd2] = rndTuble(products.length);

        const product1 = products[rnd1];
        const product2 = products[rnd2];

        const orderItem1: IOrderItem = { quantity: rndNumber(5), productId: rnd1 + 1 }
        const orderItem2: IOrderItem = { quantity: rndNumber(5), productId: rnd2 + 1 }

        const order: IOrder = {
            totalPrice: (orderItem1.quantity * product1.price) + (orderItem2.quantity * product2.price),
            customerId: rndNumber(amountOfCustomer),
            orderItems: [orderItem1, orderItem2]
        }
        return order;
    });
}