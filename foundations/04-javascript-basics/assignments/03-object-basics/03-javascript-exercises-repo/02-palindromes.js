// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks.

function palindromes(str) {
    const normalisedString = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "");
    const midpointIndex = Math.floor(normalisedString.length / 2);

    // for (let i = 0; i < normalisedString.length; i++) {
    //     if (normalisedString[i] = normalisedString[normalisedString.length - (i + 1)]) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    
    let leftString = "";
    for (let i = 0; i < midpointIndex; i++) {
        leftString += normalisedString[i];
    }
    
    let rightString = "";
    for (let i = normalisedString.length - 1; i > midpointIndex; i--) {
        rightString += normalisedString[i];
    }
    
    // if (leftString === rightString) {
    //     console.log(true);
    // }
    // else {
    //     console.log(false);
    // }

    console.log(`${leftString} | ${rightString}`);
}

palindromes("A car, a man, a maraca.");
palindromes("Rats live on no evil star.");
palindromes("Lid off a daffodil.");
palindromes("Animal loots foliated detail of stool lamina.");
palindromes("A nut for a jar of tuna.");
palindromes("racecar");
palindromes("tacos"); // false


/*
length = 7;

r a c e c a r
0 1 2 3 4 5 6

str[0] = str[6]
str[1] = str[5]
str[2] = str[4]
        .
        .
        .
str[i] = str[str.length - (i + 1)]


const string = "racecar";
const midpointIndex =  Math.floor(string.length / 2);
console.log(string[midpointIndex]);
*/

/*
solution:

const palindromes = function (string) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    // Create a new reversed string for comparison
    const reversedString = cleanedString.split('').reverse().join('');

    // Return the outcome of the comparison which will either be true or false
    return cleanedString === reversedString;
};
*/