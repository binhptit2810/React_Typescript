type Callback = (message: string) => void;
const delayedCallback = (callback: Callback, delay: number) => {
  setTimeout(() => {
    callback("Hàm callback đã đc gọi");
  }, delay);
};
const callbackfnc: Callback = (msg: string) => {
  console.log("Thông báo:", msg);
};

delayedCallback(callbackfnc, 2000);
