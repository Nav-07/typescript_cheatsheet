import { parse } from "semver";

// Functions
function get_sum(num1: number, num2: number): number {
    return num1 + num2;
} // Define the Return Type and the Parameter Type of Numbers

console.log(get_sum(2, 3));

let my_sum_any = function(num1: any, num2: any): number {
    if (typeof(num1) == 'string') {
        num1 = parseInt(num1); // string to int
    }
    if (typeof(num2) == 'string') {
        num2 = parseInt(num2); // string to int
    }
    return num1+num2;   
}
