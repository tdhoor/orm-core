import { ICustomer } from "./customer.model"

export interface IAddress {
    id?: number
    street: string
    city: string
    zipCode: string
    country: string
    customer?: ICustomer
}