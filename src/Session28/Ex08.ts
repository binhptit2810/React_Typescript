type Callback<T> = (element: T, value: T, array: T[]) => boolean;
function myFilter<T>(arr: T[], value: T, callback: Callback<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], value, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
const found1 = myFilter(numbers, 2, (element, value) => element === value);
console.log(found1);
const found2 = myFilter(numbers, 10, (element, value) => element === value);
console.log(found2);
