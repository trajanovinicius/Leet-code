/* Dado um array de inteiros nums, uma função redutora fne um valor inicial init, retorne 
o resultado final obtido pela execução da fn função em cada elemento do array, sequencialmente, 
passando o valor de retorno do cálculo no elemento anterior. */

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init;
  for (const num of nums) {
    acc = fn(acc, num);
  }
  return acc;
}
