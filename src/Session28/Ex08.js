function myFilter(arr, value, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], value, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
var numbers = [1, 2, 2, 3, 4, 5, 6];
var found1 = myFilter(numbers, 2, function (element, value) { return element === value; });
console.log(found1);
var found2 = myFilter(numbers, 10, function (element, value) { return element === value; });
console.log(found2);
