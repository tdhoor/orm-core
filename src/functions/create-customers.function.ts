import { ICustomer } from "../models/entities/customer.model";
import { createCustomer } from "./create-customer.function";

export function createCustomers(amount: number): ICustomer[] {
    return Array.from({ length: amount }).map((_, i) => {
        return createCustomer(i);
    });
}