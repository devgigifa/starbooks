import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard';
import { getBooks } from '../services/books';
import { getFavorites, postFavorite, deleteFavorite } from '../services/favorites';

const AllBooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const PageTitle = styled.h2`
  padding: 16px 20px 0;
  @media (max-width: 480px) {
    font-size: 20px;
    padding: 12px 12px 0;
  }
`;

function AllBooks() {
  const [books, setBooks] = useState([]); // Armazenar todos os livros
  const [favorites, setFavorites] = useState([]); // Armazenar os livros favoritos
  const [loading, setLoading] = useState(true); // Para exibir carregando

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    }

    async function fetchFavorites() {
      const response = await getFavorites();
      setFavorites(response);
    }

    fetchBooks();
    fetchFavorites();

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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PageTitle>Todos os livros</PageTitle>
      <AllBooksContainer>
        {books.map((book) => (
          <BookCard
            key={book.id}
            bookId={book.id}
            title={book.name}
            src={book.src}
            isInFavorites={isInFavorites(book.id)}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        ))}
      </AllBooksContainer>
    </div>
  );
}

export default AllBooks;
