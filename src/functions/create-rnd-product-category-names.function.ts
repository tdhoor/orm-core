import { createProductCategoryName } from './create-product-category-name.function';
import { rndNumber } from './rnd-number.function';

export function createRndProductCategoryNames(amount: number, maxId: number): string[] {
    return Array.from({ length: amount }).map(() => {
        return createProductCategoryName(rndNumber(maxId) + 1);
    })
}