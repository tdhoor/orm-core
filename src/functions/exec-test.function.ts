import { DB } from "src/db";
import { TestResultResponse } from "../models/test-result-response.model";
import { ProductCategory } from "src/entity/product-category.entity";
import { Address } from "src/entity/address.entity";
import { Customer } from "src/entity/customer.entity";
import { Order } from "src/entity/order.entity";
import { OrderItem } from "src/entity/order-item.entity";
import { Product } from "src/entity/product.entity";

export async function execTest<T>(fn: () => Promise<T>): Promise<TestResultResponse<T>> {
    const start = performance.now();
    const data = await fn();
    const end = performance.now();

    const size = {
        address: await DB.manager.count(Address),
        customer: await DB.manager.count(Customer),
        order: await DB.manager.count(Order),
        orderItem: await DB.manager.count(OrderItem),
        product: await DB.manager.count(Product),
        productCategory: await DB.manager.count(ProductCategory)
    }

    return {
        time: Math.round((end - start) * 100) / 100,
        size,
        data
    };
}