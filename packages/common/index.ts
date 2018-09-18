export const addAll = (...numbers: number[]) =>
  numbers.reduce((c, p) => c + p, 0);

export const reverse = (str: string) =>
  str
    .split('')
    .reverse()
    .join('');
