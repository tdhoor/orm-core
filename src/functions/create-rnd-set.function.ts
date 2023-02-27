import { rndNumber } from "./rnd-number.function";

export function createRndSet(size: number, max: number): Set<number> {
    const set = new Set<number>();
    while (set.size < size) {
        set.add(rndNumber(max));
    }
    return set;
}