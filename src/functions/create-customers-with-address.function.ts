import { ICustomer } from "../models/entities/customer.model";
import { createAddresses } from "./create-addresses.function";
import { createCustomers } from "./create-customers.function";
import { rndNumber } from "./rnd-number.function";

export function createCustomersWithAddress(amount: number): ICustomer[] {
    const addresses = createAddresses(amount);
    const customers = createCustomers(amount);

    customers.forEach((customer, i) => {
        const address = addresses.splice(rndNumber(addresses.length), 1)[0];
        customer.address = address;
    });
    return customers;
}