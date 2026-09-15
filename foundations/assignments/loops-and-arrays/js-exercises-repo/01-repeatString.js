const repeatString = function(string, num) {
    let repeatedString = "";

    if (num < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < num; i++) {
            repeatedString += string;
        }
    }

    return repeatedString;
};

console.log(repeatString("hey", 3));

/*
solution:

const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";

    for (let i = 0; i < times; i++) {
        string += word;
    }

    return string;
};
*/