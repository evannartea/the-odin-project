function filterRangeInPlace(arr, a, b) {
    return arr.filter(function(element) {
        return (a <= element && element <= b);
    })
}

let arr = [5, 3, 8, 1];

let filtered = filterRangeInPlace(arr, 1, 4);

console.log(filtered);

