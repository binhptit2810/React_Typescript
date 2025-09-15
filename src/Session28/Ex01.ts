type callback = (number: number) => void;
const caculate = (a: number, b: number, callback: callback) => {
  const sum = a + b;
  callback(sum);
};
const callbackfnc = (number: number) => {
  console.log("ket qua ", number);
};
caculate(3, 4, callbackfnc);
