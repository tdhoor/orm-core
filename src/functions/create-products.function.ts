import { IProduct } from "../models/entities/product.model";
import { createProduct } from "./create-product.function";

export function createProducts(amount): IProduct[] {
    return Array.from({ length: amount }).map((_, i) => {
        return createProduct(i);
    });
}
