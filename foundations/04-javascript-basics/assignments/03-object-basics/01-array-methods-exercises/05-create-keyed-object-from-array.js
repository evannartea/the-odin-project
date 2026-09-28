let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
    return arr.reduce((groupedUsers, person) => {
        const id = person.id;
        groupedUsers[id] = person;
        return groupedUsers;
    }, {});
}

let usersById = groupById(users);

/*
usersById = {
    john: { id: 'john', name: "John Smith", age: 20 },
    ann: { id: 'ann', name: "Ann Smith", age: 24 },
    pete: { id: 'pete', name: "Pete Peterson", age: 31 },
}*/

console.log(usersById);

/*
solution:

function groupById(array) {
    return array.reduce((groupedUsers, person) => {
        groupedUsers[person.id] = person;
        return groupedUsers;
    }, {})
}
*/