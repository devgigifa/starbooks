const { getAllFavourites, insertFavourite, deleteFavouriteById } = require("../services/favourite");

function getFavourites(req, res) {
    try {
        const books = getAllFavourites();
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
}

function postFavourite(req, res) {
    try {
        const id = req.params.id;
        insertFavourite(id);
        res.status(201);
        res.send("Book added successfully");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavourite(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            deleteFavouriteById(id);
            res.send("Favourite deleted successfully");
        } else {
            res.status(422);
            res.send("Invalid ID");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
}

module.exports = {
    getFavourites,
    postFavourite,
    deleteFavourite
};
