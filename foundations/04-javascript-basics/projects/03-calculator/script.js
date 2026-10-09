const firstNumber = [];
const secondNumber = [];
const operator = [];
const numberKey = document.querySelectorAll(".number-key");
const operatorKey = document.querySelectorAll(".operator-key");
const display = document.querySelector("#display");
const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const divideBtn = document.querySelector("#divide-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const equalsBtn = document.querySelector("#equals-btn");

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
/*
testArr = [1, 2, 3];

(1 * 100) + (2 * 10) + (3 * 1)

(arr[0] * 10^2) + (arr[1] * 10^1) + (arr[2] * 10^0) + ... + (arr[i] * 10^(arr.length - i - 1))
*/
function convertArrayToNumber(arr) {
    return arr.reduce((acc, currentValue, index) => {
        return acc + currentValue * 10**(arr.length - index - 1);
    }, 0);
}

// Function to update number vars
function updateNumber(arr) {
    numberKey.forEach((button) => {
        button.addEventListener("click", () => {
            const value = parseInt(button.textContent);
            arr.push(value);
            number = convertArrayToNumber(arr);
            console.log(number)
        });
    });
}

// Function to update operator var
function updateOperator(arr) {
    operatorKey.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            arr.push(value);
            console.log(operator);
        });
    });
}

// Function to calculate one line
function calculate() {
    if (operator.length === 0) {
        updateNumber(firstNumber);
    }
    if (operator.length > 0) {
        updateNumber(secondNumber);
    }
    updateOperator(operator);
}

calculate();