import { IOrderItem } from "./order-item.model"
import { IProductCategory } from "./product-category.model"

export interface IProduct {
    id?: number
    name: string
    description: string
    price: number
    createdAt?: Date
    updatedAt?: Date
    productCategoryId?: number
    productCategory?: IProductCategory
    orderItems?: IOrderItem[]
}