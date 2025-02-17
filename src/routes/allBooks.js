import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard'; // Suponho que você tenha esse componente que vai exibir cada livro

const AllBooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

function AllBooks() {
  const [books, setBooks] = useState([]); // Armazenar os livros
  const [loading, setLoading] = useState(true); // Para exibir carregando

  useEffect(() => {
    // Função para buscar os livros na API
    async function fetchBooks() {
      try {
        const response = await fetch('http://localhost:8000/books'); // Altere se necessário para a URL da sua API
        const data = await response.json();
        setBooks(data); // Atualiza o estado com os livros recebidos
        setLoading(false); // Finaliza o estado de carregamento
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
        setLoading(false);
      }
    }

    fetchBooks(); // Chama a função de fetch assim que o componente for montado
  }, []);

  // Se estiver carregando, exibe uma mensagem de carregamento
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
            title={book.name}
            src={book.src} // Passa a imagem do livro
          />
        ))}
      </AllBooksContainer>
    </div>
  );
}

export default AllBooks;
