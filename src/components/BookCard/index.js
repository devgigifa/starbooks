import { FaHeart, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; // Importa o useLocation para pegar a rota atual

const CardContainer = styled.div`
  margin: 20px;
  padding: 10px;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function BookCard({ title, src, bookId, isInFavorites, onAddToFavorites, onRemoveFromFavorites }) {
  const location = useLocation(); // Obtém a rota atual

  const handleButtonClick = async () => {
    if (isInFavorites) {
      // Se estiver na página de favoritos, chama a função para remover
      await onRemoveFromFavorites(bookId);
    } else {
      // Se estiver na página de estante, chama a função para adicionar
      await onAddToFavorites(bookId);
    }
  };

  // Lógica para exibir o ícone com base na página
  const isInFavoritesPage = location.pathname === '/favoritos'; // Verifica se está na página de favoritos

  return (
    <CardContainer>
      <BookImage src={src} alt={title || "Imagem do livro"} />
      <BookTitle>{title}</BookTitle>
      <ButtonContainer>
        {/* Se for página de favoritos, exibe a lixeira, senão o coração */}
        <button onClick={handleButtonClick}>
          {isInFavoritesPage ? <FaTrash /> : <FaHeart />}
        </button>
      </ButtonContainer>
    </CardContainer>
  );
}

export default BookCard;
