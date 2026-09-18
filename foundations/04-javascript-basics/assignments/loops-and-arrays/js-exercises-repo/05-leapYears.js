const leapYears = function(year) {
    if (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0)
    ) {
        return true;
    }
    else {
        return false;
    }
};

console.log(leapYears(2000)); // returns true
console.log(leapYears(1985)); // returns false

console.log(leapYears(1984)); // returns true
console.log(leapYears(2004)); // returns true

console.log(leapYears(1800)); // returns false
console.log(leapYears(1800)); // returns false

console.log(leapYears(1600)); // returns true

/*
solution:

const leapYears = function (year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
    ) {
    return true;
    } else {
    return false;
    }
};
*/