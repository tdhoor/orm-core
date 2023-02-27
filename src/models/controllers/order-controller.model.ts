import { IOrder } from "../entities/order.model";
import { ICrudController } from "./crud-controller.mock";

export interface IOrderController extends ICrudController<IOrder> {
}