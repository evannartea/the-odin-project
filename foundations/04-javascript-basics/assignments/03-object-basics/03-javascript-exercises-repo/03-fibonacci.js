function fibonacci(n) {
    if (n < 0) {
        return "OOPS!";
    }
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(-1));
console.log(fibonacci(4));
console.log(fibonacci(6));