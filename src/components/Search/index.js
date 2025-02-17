import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import backgroundImage from '../../img/background.png';  // Substitua pelo caminho da sua imagem


const SearchContainer = styled.section`
  background-image: url(${backgroundImage});
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;


const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

// Estilizando o input e botão de pesquisa
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const InputField = styled.input`
  border: 1px solid #fff;
  background: transparent;
  padding: 12px 20px;
  border-radius: 50px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`;

const SearchButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffd700;
    transition: 0.3s;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #002f52;
  }
`;

function Search() {
  const [booksSearch, setBooksSearch] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  // Função para buscar livros da API
  async function fetchBooks() {
    try {
      const response = await fetch("http://localhost:8000/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  }

  const handleSearch = () => {
    const resultSearch = books.filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBooksSearch(resultSearch);
  };

  console.log(searchQuery);


  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro.</Subtitle>

      {/* Input com botão de pesquisa */}
      <SearchBar>
        <InputField
          placeholder="Escreva sua próxima leitura"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado conforme o usuário digita
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch />
        </SearchButton>
      </SearchBar>

      {/* Exibe os resultados da pesquisa */}
      {booksSearch.map((book, index) => (
        <Result key={index}>
          <img src={book.src} alt={book.name} />
          <p>{book.name}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}

export default Search;
