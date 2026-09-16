function unique(arr) {
    return arr.filter(function(str, index, array) {
        return array.indexOf(str) === index;
    });
};

let strings = [
    "Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));


/*
solution:

function unique(arr) {
    // Create empty array
    let uniqueArr = [];

    // Loop through given array
    for (let i = 0; i < arr.length; i++) {

        // If empty array does not already include element of given array at index i, add it
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}
 */