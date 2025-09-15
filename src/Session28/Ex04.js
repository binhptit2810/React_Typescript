function displayNumbers(callback, delay) {
    var count = 1;
    setInterval(function () {
        callback(count);
        count++;
    }, delay);
}
displayNumbers(function (value) {
    console.log("số thứ tự: " + value);
}, 1000);
