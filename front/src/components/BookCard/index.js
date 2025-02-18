import { FaHeart, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const CardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  width: 250px;
  border-radius: 15px;
  text-align: center;
  background-color: white; /* Cor de fundo branca */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 255, 0.2); /* Sombra para dar profundidade */
  border: 2px solid #fff; /* Borda branca */
  position: relative; /* Permite posicionar o botão de forma absoluta dentro do card */
  transition: all 0.3s ease;
  padding-bottom: 50px; /* Dá espaço extra para o botão não sobrepor o título */

  &:hover {
    transform: translateY(-1px); /* Eleva o card */
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 255, 0.3); /* Aumenta o efeito de sombra */
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  border: 4px rgba(0, 50, 255, 0.5);
  box-shadow: 0 0 15px rgba(0, 50, 255, 0.8);
  transition: all 0.3s ease;
`;

const BookTitle = styled.h3`
  font-size: 20px;
  color: #6a1b9a; 
  font-family: 'Orbitron', sans-serif;
  margin-top: 10px;
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  left: 10px; /* Alinha o botão no canto inferior esquerdo */
  background-color: transparent;
  border: 2px solid rgb(140, 113, 157); /* Borda roxa escura */
  border-radius: 50%; /* Garante o formato redondo */
  padding: 12px; /* Aumenta o tamanho do botão */
  cursor: pointer;
  color: rgb(140, 113, 157); /* Cor do ícone roxo escuro */
  font-size: 1.5em;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(140, 113, 157);
    border: 2px solid rgb(140, 113, 157);
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
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
      <BookImage src={src} alt={title || 'Imagem do livro'} />
      <BookTitle>{title}</BookTitle>
      <Button onClick={handleButtonClick}>
        {isInFavoritesPage ? <FaTrash /> : <FaHeart />}
      </Button>
    </CardContainer>
  );
}

export default BookCard;
