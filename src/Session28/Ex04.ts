type Callback = (value: number) => void;
function displayNumbers(callback: Callback, delay: number): void {
  let count: number = 1;
  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}
displayNumbers((value: number) => {
  console.log("số thứ tự: " + value);
}, 1000);
