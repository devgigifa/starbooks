import axios from "axios";

const favoritesAPI = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/favorites` });

async function getFavorites() {
    const response = await favoritesAPI.get('/');

    return response.data;
}

async function postFavorite(id) {
    await favoritesAPI.post(`/${id}`);
}

async function deleteFavorite(id) {
    await favoritesAPI.delete(`/${id}`);
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
};
