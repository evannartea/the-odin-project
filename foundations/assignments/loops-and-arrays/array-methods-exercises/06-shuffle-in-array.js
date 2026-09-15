function shuffle(arr) {
    const randomElement = Math.floor(Math.random() * arr.length)

    return randomElement
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

/*
solution:

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
*/