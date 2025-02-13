const express = require("express")
const routerBook = require("./routes/book")
const routerFavourite = require("./routes/favourite")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/books', routerBook)
app.use('/favourites', routerFavourite)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})