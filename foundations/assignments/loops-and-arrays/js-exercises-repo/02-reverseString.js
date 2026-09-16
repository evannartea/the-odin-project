const reverseString = function(str) {
    let reversed = "";

    for (let i = 0; i < str.length; i++) {
        reversed += str[str.length - (i + 1)];
    }
    return reversed;
};

console.log(reverseString("hello there"));

/*
h e l l o _ t h e r e
0 1 2 3 4 5 6 7 8 9 10

str[0] -> str[str.length - 1]
str[1] -> str[str.length - 2]
            .
            .
            .
str[i] -> str[str.length - (i + 1)]
*/

/*
solutions:

const reverseString = function (string) {
    return string.split("").reverse().join("");
};

const reverseString = function (string) {
    let reversedString = "";

    for (let i = string.length -1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

*/