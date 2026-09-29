const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(base, exponent) {
    return base ** exponent
};

const factorial = function(n) {
    let count = 1;
    for (let i = 0; i < n; i++) {
        count *= n - i;
    }
    return count;
};

/*
1: 1 * 1
2: 2 * 1
3: 3 * 2 * 1
.
.
.
n: n * (n - 1) * (n - 2) * ... * 1
*/

console.log(add(9, 10));
console.log(subtract(9, 10));
console.log(sum([1, 2, 3, 4, 5]));
console.log(multiply([1, 2, 3, 4, 5]));
console.log(power(2, 3));
console.log(factorial(0));