import { useEffect, useState } from 'react';
import { getFavorites, deleteFavorite } from '../services/favorites';
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

  // Função para buscar os favoritos
  async function fetchFavorites() {
    const response = await getFavorites();
    setFavorites(response);
  }

  // Função para remover o livro dos favoritos
  const handleRemoveFromFavorites = async (id) => {
    await deleteFavorite(id); // Chama a API para deletar do banco de dados
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id)); // Atualiza a lista de favoritos localmente
  };

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
              bookId={book.id} // Passando o id do livro
              isInFavorites={true} // Sempre estará nos favoritos
              onRemoveFromFavorites={handleRemoveFromFavorites} // Passa a função para remover
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
