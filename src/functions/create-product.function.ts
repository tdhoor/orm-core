import { IProduct } from "../models/entities/product.model";
import { rndNumber } from "./rnd-number.function";

export function createProduct(i: number): IProduct {
    return {
        name: `name-${i}`,
        price: rndNumber(10000) / 100,
        description: `description-${i}`
    };
}