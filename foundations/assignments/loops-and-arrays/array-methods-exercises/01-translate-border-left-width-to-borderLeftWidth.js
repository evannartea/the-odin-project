function camelise(str) {
    // Split into separate words
    const strArray = str.split("-");

    // Capitalise elements excluding first
    const capitalised = strArray.slice(1).map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    })

    // Combine first element with capitalised elements
    const camelCase = strArray[0] + capitalised.join("");

    return camelCase;
}

console.log(camelise("background-colour"));
console.log(camelise("list-style-image"));
console.log(camelise("-webkit-transition"));

/*
solution:

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
*/
