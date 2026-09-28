const sumAll = function(startNum, endNum) {
    if (
        (startNum < 1 || endNum < 1) ||
        (!Number.isInteger(startNum) || !Number.isInteger(endNum))
    ) {
        return "ERROR";
    }

    let sum = 0;

    for (let i = 0; i < endNum; i++) {
        sum += (startNum + i);
    }
    return sum;
};

console.log(sumAll(1, 4));

/*
1 + (1 + 1) + (1 + 2) ... (startNum + i)
*/


/*
solutions:

const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    if (min > max) {
    const temp = min;
    min = max;
    max = temp;
}

const sumAll = function (min, max) {
    let sum = 0;

    for (let i = min; i <= max; i++) {
    sum += i;
    }
    return sum;
};
*/