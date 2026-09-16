const removeFromArray = function(arr, targetArg) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetArg) {
           arr.splice(i, 1);
        }
    }
    return arr;
}

let arr = [1, 2, 3, 4];

console.log(removeFromArray(arr, 3));

/*
solutions:

const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];

    // use forEach to go through the array
    array.forEach((item) => {
    
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
        newArray.push(item);
    }
    });
    
    // and return that array
    return newArray;
};

const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
};
*/