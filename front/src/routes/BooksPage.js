import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard';
import { getFavorites, postFavorite, deleteFavorite } from '../services/favorites';

const AllBooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

function AllBooks() {
  const [books, setBooks] = useState([]); // Armazenar todos os livros
  const [favorites, setFavorites] = useState([]); // Armazenar os livros favoritos
  const [loading, setLoading] = useState(true); // Para exibir carregando

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch('http://localhost:8000/books'); // URL da sua API
        const data = await response.json();
        setBooks(data); // Atualiza o estado com os livros recebidos
        setLoading(false); // Finaliza o estado de carregamento
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
        setLoading(false);
      }
    }

    async function fetchFavorites() {
      const response = await getFavorites(); // Obtém os favoritos da API
      setFavorites(response);
    }

    fetchBooks(); // Busca todos os livros
    fetchFavorites(); // Busca os favoritos

  }, []);

  // Função para adicionar o livro aos favoritos
  const handleAddToFavorites = async (id) => {
    await postFavorite(id); // Faz o post para adicionar aos favoritos
    setFavorites((prevFavorites) => [...prevFavorites, { id }]); // Atualiza a lista local de favoritos
  };

  // Função para remover o livro dos favoritos
  const handleRemoveFromFavorites = async (id) => {
    await deleteFavorite(id); // Faz o delete para remover dos favoritos
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id)); // Atualiza a lista local de favoritos
  };

  // Função para verificar se o livro está nos favoritos
  const isInFavorites = (id) => {
    return favorites.some((book) => book.id === id); // Verifica se o livro está nos favoritos
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Todos os Livros</h2>
      <AllBooksContainer>
        {books.map((book) => (
          <BookCard
            key={book.id}
            bookId={book.id} // Passa o id do livro
            title={book.name}
            src={book.src} // Passa a URL da imagem
            isInFavorites={isInFavorites(book.id)} // Verifica se o livro está nos favoritos
            onAddToFavorites={handleAddToFavorites} // Função para adicionar aos favoritos
          />
        ))}
      </AllBooksContainer>
    </div>
  );
}

export default AllBooks;
