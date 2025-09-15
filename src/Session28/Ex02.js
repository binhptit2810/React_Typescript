var delayedCallback = function (callback, delay) {
    setTimeout(function () {
        callback("Hàm callback đã đc gọi");
    }, delay);
};
var callbackfnc = function (msg) {
    console.log("Thông báo:", msg);
};
delayedCallback(callbackfnc, 2000);
