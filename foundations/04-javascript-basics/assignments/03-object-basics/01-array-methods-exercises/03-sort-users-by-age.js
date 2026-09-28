let pete = {
    name: "Pete",
    age: 30
};
let john = {
    name: "John",
    age: 25
};
let mary = {
    name: "Mary",
    age: 28
};

let arr = [ pete, john, mary ];

function sortByAge(users) {
    return users.sort(function(a, b) {
        return a.age - b.age;
    });
};

console.log(sortByAge(arr));

console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

