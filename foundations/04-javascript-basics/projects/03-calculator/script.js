// Function to apply operator to two numbers
function operate(firstOperand, operator, secondOperand) {
    const x = Number(firstOperand);
    const y = Number(secondOperand);

    switch(operator) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "x":
            return x * y;
        case "÷":
            if (y === 0) {
                // FIXME: Clear "Unacceptable!" message once user types again
                return "Unacceptable!";
            }
            else {
                return x / y;
            }
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

function calculate() {
    let firstNumber = "";
    let secondNumber = "";
    let currentOperator = "";
    let operators = ["+", "-", "x", "÷"];

    const screen = document.querySelector("#screen");
    const display = document.querySelector("#display");
    const numberKey = document.querySelectorAll(".number-key");
    const operatorKey = document.querySelectorAll(".operator-key");
    const decimalKey = document.querySelector("#decimal-key");
    const clearBtn = document.querySelector("#clear-btn");
    const equalsBtn = document.querySelector("#equals-btn");

    // numberKey EventListener
    numberKey.forEach((button) => {
        button.addEventListener("click", () => {
            const number = button.textContent;
            screen.innerHTML = "";
            screen.appendChild(display);

            // If operator not present
            if (currentOperator === "") {
                firstNumber += number;
                display.textContent += number;
                console.log({ firstNumber });
            }
            else {
                secondNumber += number;
                display.textContent += number;
                console.log({ secondNumber });
            }
        });
    });

    decimalKey.addEventListener("click", (e) => {
        screen.innerHTML = "";
        screen.appendChild(display);
        const decimal = e.target.textContent;

        if (currentOperator === "") {
            // If firstNumber is empty, default it to 0
            if (firstNumber === "") {
                firstNumber = 0;
                display.textContent += firstNumber;
                console.log({ firstNumber });
            }

            // Only add the decimal if it doesn't already exist
            if (!String(firstNumber).includes(".")) {
                firstNumber += decimal;
                display.textContent += decimal;
                console.log({ firstNumber });
            }
        }
        else {
            // If secondNumber is empty, default it to 0
            if (secondNumber === "") {
                secondNumber = 0;
                display.textContent += secondNumber;
                console.log({ secondNumber });
            }

            // Only add the decimal if it doesn't already exist
            if (!String(secondNumber).includes(".")) {
                secondNumber += decimal;
                display.textContent += decimal;
                console.log({ secondNumber });
            }
        }
    });
    
    // operatorKey EventListener
    operatorKey.forEach((button) => {
        button.addEventListener("click", () => {
            screen.innerHTML = "";
            screen.appendChild(display);
            
            // Perform operate() if firstNumber and secondNumber are already present
            if (firstNumber && secondNumber) {
                const currentAnswer = operate(firstNumber, currentOperator, secondNumber);
                firstNumber = currentAnswer;
                secondNumber = "";
                console.log({ currentAnswer });
            }

            // Set default firstNumber = 0 so calculation performed if operator key pressed first
            if (firstNumber === "") {
                firstNumber = 0;
                display.textContent += firstNumber;
                console.log({ firstNumber });
            }
            
            const operator = button.textContent;
            const displayText = display.textContent;
            const lastChar = displayText.slice(-1);
            const hasOperator = operators.includes(lastChar);

            // Disbale multiple operators to appear on display
            if (hasOperator) {
                display.textContent = displayText.slice(0, -1) + operator;
            }
            else {
                display.textContent += operator;
            }
            
            currentOperator = operator;
            console.log({ currentOperator });
        });
    });

    // TODO: Add backspace button
    // TODO: Add keyboard support

    // clearBtn EventListener
    clearBtn.addEventListener("click", () => {
        // Clear display and all vars
        display.textContent = "";
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";

        console.log({ firstNumber });
        console.log({ secondNumber });
        console.log({ currentOperator });
    });

    // equalsBtn EventListener
    equalsBtn.addEventListener("click", () => {
        const finalAnswer = operate(firstNumber, currentOperator, secondNumber);
        display.textContent = finalAnswer;
        console.log({ finalAnswer });
    });
}

calculate();