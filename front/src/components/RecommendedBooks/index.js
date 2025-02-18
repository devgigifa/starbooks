import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const RecommendedBooksSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const RecommendedBookDiv = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`;

const BookImage = styled.img`
    width: 150px;
`;

const ArrowButton = styled.button`
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
`;

const fetchBooks = async () => {
    // Alterei a URL aqui para a correta
    const response = await fetch('http://localhost:8000/books'); 
    const data = await response.json();
    return data;
};

const RecommendedBooks = () => {
    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchBooks()
            .then((data) => {
                console.log('Livros recebidos:', data);  // Verifique os livros retornados pela API
                const selectedBooks = data.filter(book =>
                    [12, 13, 16, 17, 18, 20].includes(Number(book.id)) // Converte o id do livro para número
                );
                console.log('Livros selecionados:', selectedBooks);  // Verifique os livros filtrados
                setBooks(selectedBooks); // Armazenar os livros selecionados
            })
            .catch(error => {
                console.error("Erro ao carregar os livros:", error);
            });
    }, []);
    

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % books.length; // Avançar e voltar ao primeiro livro
            return nextIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexSafe = (prevIndex - 1 + books.length) % books.length; // Voltar ao último livro se estiver no primeiro
            return prevIndexSafe;
        });
    };

    // Verifique se há livros no estado antes de tentar renderizar
    if (books.length === 0) {
        return <p>Loading...</p>; // Exibe um "Loading..." se não houver livros ainda
    }

    return (
        <RecommendedBooksSection>
            <Title>Recomendados</Title>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowButton onClick={handlePrev}>←</ArrowButton>
                {books[currentIndex] && (
                    <RecommendedBookDiv key={books[currentIndex].id}>
                        <BookImage src={books[currentIndex].src} alt={books[currentIndex].name || "Imagem do livro"} />
                        <p>{books[currentIndex].name}</p>
                    </RecommendedBookDiv>
                )}
                <ArrowButton onClick={handleNext}>→</ArrowButton>
            </div>
        </RecommendedBooksSection>
    );
};

export default RecommendedBooks;
