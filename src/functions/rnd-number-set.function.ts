import { rndNumber } from "./rnd-number.function";

export function rndNumberSet(size = 1, max = 1): Set<number> {
    const set = new Set<number>();
    while (set.size < size) {
        set.add(rndNumber(max));
    }
    return set;
}