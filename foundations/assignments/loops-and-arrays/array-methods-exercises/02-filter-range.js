function filterRange(arr, a, b) {
    // Create empty array
    let filteredArr = [];

    // Loop through arr
    for (let i = 0; i < arr.length; i++) {
        // Return if element <= a and >= b
        if (a <= arr[i] && arr[i] <= b) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);