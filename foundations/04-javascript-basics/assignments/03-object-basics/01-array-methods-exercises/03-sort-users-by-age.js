let pete = { name: "Pete", age: 30 };
let john = { name: "John", age: 25 };
let mary = { name: "Mary", age: 28 };

let users = [ pete, john, mary ];

function sortByAge(arr) {
    return arr.sort(function(a, b) {
        return a.age - b.age;
    });
};

console.log(sortByAge(users));

console.log(users[0].name); // John
console.log(users[1].name); // Mary
console.log(users[2].name); // Pete

