const books = [
    { title: 'Book1', author: 'Name1' },
    { title: 'Book2', author: 'Name2' }
]

function getTheTiles(arr) {
    return arr.map(book => book.title);
}

console.log(getTheTiles(books));