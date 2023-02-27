import { IAddress } from "../models/entities/address.model";

export function createAddress(i: number): IAddress {
    return {
        city: `city-${i}`,
        country: `country-${i}`,
        street: `street-${i}`,
        zipCode: `zipCode-${i}`,
    }
}