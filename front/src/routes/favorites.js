import { useEffect, useState } from 'react';
import { getFavorites } from '../services/favorites';
import BookCard from '../components/BookCard';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

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

    <FavoritesContainer>
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
    </FavoritesContainer>
    </div>
  );
}

export default Favorites;
