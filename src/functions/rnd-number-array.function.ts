import { rndNumber } from "./rnd-number.function";

export function rndNumberArray(size = 1, max = 1, min = 0): number[] {
    const arr = []
    while (arr.length < size) {
        arr.push(rndNumber(max, min));
    }
    return arr;
}