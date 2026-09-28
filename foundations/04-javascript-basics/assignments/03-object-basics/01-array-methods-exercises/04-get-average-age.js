let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

function getAverageAge(arr) {
   return arr
   .map(user => user.age)
   .reduce((a, b) => a + b)
   /arr.length;
};

console.log(getAverageAge(users));

/*
solution:

function getAverageAge(arr) {
    return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}
*/