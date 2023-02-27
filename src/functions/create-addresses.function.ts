import { IAddress } from "../models/entities/address.model";
import { createAddress } from "./create-address.function";

export function createAddresses(amount: number): IAddress[] {
    return Array.from({ length: amount }).map((_, i) => {
        return createAddress(i);
    })
}