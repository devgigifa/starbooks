import { useEffect, useState } from 'react';
import { getFavorites } from '../services/favorites'; // Remover deleteFavorite se não for usar
import BookCard from '../components/BookCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function fetchFavorites() {
    const response = await getFavorites();
    setFavorites(response);
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <BookCard
            key={book.id}
            title={book.name} // Passando o nome do livro
            src={book.src} // Passando a URL da imagem
          />
        ))
      ) : (
        <p>No favorite books yet!</p>
      )}
    </div>
  );
}

export default Favorites;
