var caculate = function (a, b, callback) {
    var sum = a + b;
    callback(sum);
};
var callbackfnc = function (number) {
    console.log("ket qua ", number);
};
caculate(3, 4, callbackfnc);
