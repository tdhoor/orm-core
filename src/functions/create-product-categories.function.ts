import { IProductCategory } from "../models/entities/product-category.model";
import { createProductCategory } from "./create-product-category.function";

export function createProductCategories(amount): IProductCategory[] {
    return Array.from({ length: amount }).map((_, i) => {
        return createProductCategory(i);
    });
}