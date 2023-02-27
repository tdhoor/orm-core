import { IOrderItem } from "../entities/order-item.model";
import { ICrudController } from "./crud-controller.mock";

export interface IOrderItemController extends ICrudController<IOrderItem> {
}