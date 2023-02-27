import { ICustomer } from "./customer.model"
import { IOrderItem } from "./order-item.model"

export interface IOrder {
    id?: number
    totalPrice: number
    createdAt?: Date
    updatedAt?: Date
    customerId?: number
    customer?: ICustomer
    orderItems?: IOrderItem[]
}