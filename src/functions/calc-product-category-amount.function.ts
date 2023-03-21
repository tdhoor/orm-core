export function calcProductCategoryAmount(amount: number): number {
    return (amount / 1000) < 100 ? 100 : (amount / 1000);
}