const convertToCelsius = function(temp) {
    // °F -> °C = (x − 32) * ⁠5/9
    const convertedTemp = (temp - 32) * 5 / 9;

    return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
    // °C -> °F: (x * 9/5) + 32
    const convertedTemp = (temp * 9 / 5) + 32;

    return Math.round(convertedTemp * 10) / 10;;
};

console.log(convertToCelsius(100));
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

/*
solution:

const convertToCelsius = function (fahrenheit) {
    return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
    return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};
*/