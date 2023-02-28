import { rndNumber } from "./rnd-number.function";

export function rndNumberSet(size = 1, max = 1, min = 0): Set<number> {
    const set = new Set<number>();
    while (set.size < size) {
        const v = rndNumber(max);
        if (v >= min) {
            set.add(v);
        }
    }
    return set;
}