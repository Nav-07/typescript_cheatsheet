"use strict";
exports.__esModule = true;
// Functions
function get_sum(num1, num2) {
    return num1 + num2;
} // Define the Return Type and the Parameter Type of Numbers
console.log(get_sum(2, 3));
var my_sum_any = function (num1, num2) {
    if (typeof (num1) == 'string') {
        num1 = parseInt(num1); // string to int
    }
    if (typeof (num2) == 'string') {
        num2 = parseInt(num2); // string to int
    }
    return num1 + num2;
};
