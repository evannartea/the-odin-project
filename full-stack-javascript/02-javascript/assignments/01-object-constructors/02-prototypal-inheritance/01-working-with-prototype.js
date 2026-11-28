let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // jumps, taken from rabbit

delete rabbit.jumps;

console.log(rabbit.jumps); // null, taken from animal

delete animal.jumps;

console.log(rabbit.jumps); // undefined, no such property anymore