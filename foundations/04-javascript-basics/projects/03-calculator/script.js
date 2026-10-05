const firstNumber = [];
const secondNumber = [];

// Operators
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// Function to apply operator to two numbers
function operate(operator, num1, num2) {
    return operator(num1, num2);   
}

// Function to turn array of numbers into whole number
function convertArrayToNumber(arr) {
    return arr.reduce((acc, currentValue, index) => {
        return acc + currentValue * 10**(arr.length - index - 1);
    }, 0);
}

/*
testArr = [1, 2, 3];

(1 * 100) + (2 * 10) + (3 * 1)

(arr[0] * 10^2) + (arr[1] * 10^1) + (arr[2] * 10^0) + ... + (arr[i] * 10^(arr.length - i - 1))
*/