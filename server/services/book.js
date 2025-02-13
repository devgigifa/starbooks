const fs = require("fs")

function getAllBooks() {
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBookID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filterBook = books.filter( book => book.id === id )[0]
    return filterBook
}

function insertBook(bookNovo) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newListBooks = [ ...books, bookNovo ]

    fs.writeFileSync("books.json", JSON.stringify(newListBooks))
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))
    const modifiedIndex = currentBooks.findIndex(book => book.id === id)

    const contentChanged = { ...currentBooks[modifiedIndex], ...modifications }

    currentBooks[modifiedIndex] = contentChanged

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

function deleteBook(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filterBooks = books.filter( book => book.id !== id )
    fs.writeFileSync("books.json", JSON.stringify(filterBooks))
}

module.exports = {
    getAllBooks,
    getBookID,
    insertBook,
    modifyBook,
    deleteBook
}