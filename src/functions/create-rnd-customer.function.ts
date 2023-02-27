import { createCustomer } from "./create-customer.function";
import { createRndSet } from "./create-rnd-set.function";
import { ICustomer } from "../models/entities/customer.model";

export function createRndCustomers(amount: number, maxId: number): ICustomer[] {
    const ids = createRndSet(amount, maxId);

    return Array.from(ids.values()).map((id, i) => {
        const customer = createCustomer(id);
        customer.phone = customer.phone + i;
        return customer;
    })
}