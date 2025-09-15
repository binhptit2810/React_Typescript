type Callback = (value: number) => void;
function processArray(arr: number[], callback: Callback): void {
  arr.forEach((value, index) => {
    setTimeout(() => {
      callback(value);
    }, (index + 1) * 1000);
  });
}
const numbers: number[] = [1, 2, 3, 4, 5];
processArray(numbers, (value: number) => {
  console.log("Phần tử thứ " + value);
});
