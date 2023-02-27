import { IProductCategory } from "../models/entities/product-category.model";

export function createProductCategory(i: number): IProductCategory {
    return {
        name: `category ${i}`
    }
}