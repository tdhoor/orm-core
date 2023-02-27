import { rndNumber } from "./rnd-number.function";

export function rndTuble(max = 1) {
  let num1 = rndNumber(max);
  let num2 = rndNumber(max);
  while (num2 === num1 || max < 2) {
    num2 = rndNumber(max);
  }
  return [num1, num2];
}