import { ICustomer } from "../models/entities/customer.model";

export function createCustomer(i: number): ICustomer {
    return {
        email: `email-${i}@mail.com`,
        firstName: `first-name-${i}`,
        lastName: `last-name-${i}`,
        password: `password-${i}`,
        phone: `phone-${i}`,
    }
}