function filterRangeInPlace(arr, a, b) {
    return arr.filter(function(element) {
        return (a <= element && element <= b);
    })
}

let arr = [5, 3, 8, 1];

let filtered = filterRangeInPlace(arr, 1, 4);

console.log(filtered);

/*
solution:

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}
*/