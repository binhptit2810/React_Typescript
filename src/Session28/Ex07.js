function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
var numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, function (element, index, array) {
    console.log("V\u1ECB tr\u00ED: ".concat(index, " | Ph\u1EA7n t\u1EED: ").concat(element, " | M\u1EA3ng:"), array);
});
