import { rndNumber } from "./rnd-number.function";
import { IProductCategory } from "../models/entities/product-category.model";
import { rndTuble } from "./rnd-tuble.function";

export function createRndProductCategories(amount: number, maxId: number): IProductCategory[] {
    return Array.from({ length: amount }).map((_, i) => {
        const [id1, id2] = rndTuble(maxId);
        return {
            id: rndNumber(id1) + 1,
            name: `Category ${id2}${i}`,
        }
    })
}