let arr = [5, 2, 1, -10, 8];

const sortedArr = arr.sort().reverse();

console.log(sortedArr);
/*
solution:

arr.sort((a, b) => b - a);
*/