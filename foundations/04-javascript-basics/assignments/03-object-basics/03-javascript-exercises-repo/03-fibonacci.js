function fibonacci(n) {
    if (n < 0) {
        return "OOPS!";
    }
    else if (n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(-1));
console.log(fibonacci(4));
console.log(fibonacci(6));

/*
solution:

const fibonacci = function(count) {
    // checks argument's type and makes sure we use
    // a number throughout rest of function.
    if (typeof count !== 'number' || count < 0 || Number.isNaN(count)) {
        return "OOPS";
    }

    if (count === 0) {
        return 0;
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};
*/