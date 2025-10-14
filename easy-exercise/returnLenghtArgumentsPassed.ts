// Escreva uma função  argumentsLengthque retorne a contagem de argumentos passados ​​a ela.
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

console.log(argumentsLength(5, 2, 3));
