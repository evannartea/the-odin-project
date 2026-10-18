// Operators
function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    return Number(x) / Number(y);
}

// Function to apply operator to two numbers
function operate(num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "÷":
            return divide(num1, num2);
        case "x":
            return multiply(num1, num2);
    }
}

// // Function to turn array of numbers into whole number
// /*
// testArr = [1, 2, 3];

// (1 * 100) + (2 * 10) + (3 * 1)

// (arr[0] * 10^2) + (arr[1] * 10^1) + (arr[2] * 10^0) + ... + (arr[i] * 10^(arr.length - i - 1))
// */
// function convertArrayToNumber(arr) {
//     return arr.reduce((acc, currentValue, index) => {
//         return acc + currentValue * 10**(arr.length - index - 1);
//     }, 0);
// }

function caluclate() {
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    const screen = document.querySelector("#screen");
    const display = document.querySelector("#display");
    const numberKey = document.querySelectorAll(".number-key");
    const operatorKey = document.querySelectorAll(".operator-key");
    const clearBtn = document.querySelector("#clear-btn");
    const equalsBtn = document.querySelector("#equals-btn");

    // numberKey EventListener
    numberKey.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            screen.innerHTML = "";
            screen.appendChild(display);

            if (operator.length === 0) {
                firstNumber += value;
                display.textContent += value;
                console.log(`First Number: ${firstNumber}`);
            }
            else {
                secondNumber += value;
                display.textContent += value;
                console.log(`Second Number: ${secondNumber}`);
            }
        });
    });

    // operatorKey EventListener
    operatorKey.forEach((button) => {
        button.addEventListener("click", () => {
            if (firstNumber && secondNumber) {
                const answer = operate(firstNumber, operator, secondNumber);

                firstNumber = answer;
                secondNumber = "";

                console.log(`Current answer: ${answer}`);
            }

            const value = button.textContent;
            operator = value;
            display.textContent += value;
            console.log(`Current operator: ${operator}`);
        });
    });

    // clearBtn EventListener
    clearBtn.addEventListener("click", () => {
        display.textContent = "";
        firstNumber = "";
        secondNumber = "";
        operator = "";

        console.log(`First Number: ${firstNumber}`);
        console.log(`Second Number: ${secondNumber}`);
        console.log(`Current operator: ${operator}`);
    });

    // equalsBtn EventListener
    equalsBtn.addEventListener("click", () => {
        const answer = operate(firstNumber, operator, secondNumber);

        display.textContent = answer;

        console.log(`Final answer: ${answer}`);
    });
}

caluclate();
