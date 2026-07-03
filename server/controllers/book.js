const { getAllBooks, getBooksID, insertBook, modifyBooks, deleteBookID } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const book = getBooksID(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Invalid ID")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postBook(req, res) {
    try {
        const newBook = req.body
        if(req.body.name) {
            insertBook(newBook)
            res.status(201)
            res.send("Book added successfully")
        } else {
            res.status(422)
            res.send("Name field is required")
        }
        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modifyBooks(body, id)
            res.send("Book updated successfully")
        } else {
            res.status(422)
            res.send("Invalid ID")
        }
       
    } catch(error) {
        res.status(500)
        res.send(error.message) 
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteBookID(id)
            res.send("Book deleted successfully")
        } else {
            res.status(422)
            res.send("Invalid ID")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}