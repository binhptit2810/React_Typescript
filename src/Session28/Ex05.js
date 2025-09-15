function checkCondition(condition, callback) {
    setTimeout(function () {
        callback(condition);
    }, 1000);
}
function display(result) {
    console.log("Điều kiện trả về: " + result);
}
checkCondition(true, display);
checkCondition(false, display);
