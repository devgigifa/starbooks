import axios from "axios";

const booksAPI = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/books` });

async function getBooks(){
    const response = await booksAPI.get('/')

    return response.data
}

export {
    getBooks
}
