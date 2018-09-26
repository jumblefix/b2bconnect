export const addAll = (...numbers: number[]) =>
  numbers.reduce((c, p) => c + p, 0);

export const reverse = (str: string) =>
  str
    .split('')
    .reverse()
    .join('');

export const factorial = (num: number): number =>
  num === 0 ? 1 : num * factorial(num - 1);
