/* Escreva uma função  expectque ajude os desenvolvedores a testar seu código. Ela deve receber qualquer valor  val e retornar um objeto com as duas funções a seguir.

toBe(val) aceita outro valor e retorna  true se os dois valores  === forem iguais. Se não forem iguais, deve gerar um erro  "Not Equal".
notToBe(val) aceita outro valor e retorna  true se os dois valores  !== forem iguais. Se forem iguais, deve gerar um erro  "Equal". */

type ToBeOrNotToBe = {
  toBe: (other: any) => boolean | string;
  notToBe: (other: any) => boolean | string;
};

function expect(val: any): ToBeOrNotToBe {
  function toBe(other: any) {
    if (val === other) {
      return true;
    } else {
      throw "Not Equal";
    }
  }

  function notToBe(other: any) {
    if (val !== other) {
      return true;
    } else {
      throw "Equal";
    }
  }

  return {
    toBe,
    notToBe,
  };
}

try {
  expect(5).toBe(null);
} catch (e) {
  console.log("Capturado:", e);
}
