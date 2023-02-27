import { IProduct } from "./product.model"

export interface IProductCategory {
    id?: number
    name: string
    products?: IProduct[]
}