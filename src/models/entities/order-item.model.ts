import { IOrder } from "./order.model"
import { IProduct } from "./product.model"

export interface IOrderItem {
    id?: number
    quantity: number
    orderId?: number
    order?: IOrder
    productId?: number
    product?: IProduct
} 