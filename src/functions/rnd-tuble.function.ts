import { rndNumber } from "./rnd-number.function";

export function rndTuble(max = 1, min = 0) {
  let num1 = rndNumber(max, min);
  let num2 = rndNumber(max, min);
  while (num2 === num1) {
    num2 = rndNumber(max);
  }
  return [num1, num2];
}