/**
 * Produces a copy of an array with the positions of two items in that array swapped.
 * @param arr The array which contains the elements to swap
 * @param indexA The index of the first item
 * @param indexB The index of the other item
 * @returns A new array with the items at indexA and indexB swapped
 */
export function swapArrayElements(arr: any[], indexA: number, indexB: number) {
  const newArray = [...arr];
  const a = newArray[indexA];
  const b = newArray[indexB];
  newArray[indexA] = b;
  newArray[indexB] = a;
  return newArray;
}
