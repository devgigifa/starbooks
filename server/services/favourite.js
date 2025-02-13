const fs = require("fs");

function getAllFavourites() {
    return JSON.parse(fs.readFileSync("favourites.json"));
}

function deleteFavouriteById(id) {
    const books = JSON.parse(fs.readFileSync("favourites.json"));
    
    const filteredBooks = books.filter(book => book.id !== id);
    fs.writeFileSync("favourites.json", JSON.stringify(filteredBooks));
}

function insertFavourite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const favourites = JSON.parse(fs.readFileSync("favourites.json"));

    const insertedBook = books.find(book => book.id === id);
    const newFavouritesList = [...favourites, insertedBook];
    fs.writeFileSync("favourites.json", JSON.stringify(newFavouritesList));
}

module.exports = {
    getAllFavourites,
    deleteFavouriteById,
    insertFavourite
};
