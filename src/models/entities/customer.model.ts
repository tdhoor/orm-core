import { IAddress } from "./address.model"
import { IOrder } from "./order.model"

export interface ICustomer {
    id?: number
    email: string
    phone: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date
    updatedAt?: Date
    addressId?: number
    address?: IAddress
    orders?: IOrder[]
}