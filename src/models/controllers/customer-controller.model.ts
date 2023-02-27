import { ICustomer } from "../entities/customer.model";
import { ICrudController } from "./crud-controller.mock";
import { IOrder } from "../entities/order.model";
import { IProduct } from "../entities/product.model";
import { TestResultResponse } from "../test-result-response.model";

export interface ICustomerController extends ICrudController<ICustomer> {
    /**
     * POST /customers
     * @param customer 
     */
    createMany(customer: ICustomer[]): Promise<TestResultResponse<ICustomer[]>>;
    /**
     * GET /customers/:id/orders
     * @param id 
     */
    getCustomerOrders(id: number): Promise<TestResultResponse<IOrder[]>>;
    /**
     * GET /customers/:id/products
     * @param id 
     */
    getCustomerProducts(id: number): Promise<TestResultResponse<IProduct[]>>;
}
