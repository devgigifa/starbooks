import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const RecommendedBooksSection = styled.section`
    background-color: #EBECEE;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    width: 100%;
    padding: 20px;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    text-align: center;
    margin: 0 0 20px 0;
`;

const BookList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    @media (max-width: 708px) {
        gap: 15px; /* Menor espaço entre os livros */
    }
    @media (max-width: 480px) {
        gap: 10px; /* Ainda menos espaço entre os livros */
    }
`;

const BookImage = styled.img`
    width: 280px;
    height: 380px;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: 1024px) {
        width: 210px;
        height: 310px;
    }

    @media (max-width: 768px) {
        width: 120px;
        height: 180px;
    }

    @media (max-width: 512px) {
        width: 70px;
        height: 100px;
    }
`;

const ArrowButton = styled.button`
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
    padding: 0 20px;
    &:hover {
        color: #555;
    }
`;

const fetchBooks = async () => {
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
                const selectedBooks = data.filter(book =>
                    [15, 9, 16, 17, 18, 20].includes(Number(book.id))
                );
                setBooks(selectedBooks);
            })
            .catch(error => {
                console.error("Erro ao carregar os livros:", error);
            });
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % books.length; // Avança de 1 em 1 livro, e volta para o primeiro livro após o último
            return nextIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexSafe = (prevIndex - 1 + books.length) % books.length; // Retrocede de 1 em 1 livro
            return prevIndexSafe;
        });
    };

    // Verifique se há livros no estado antes de tentar renderizar
    if (books.length === 0) {
        return <p>Loading...</p>;
    }

    // Exibe 3 livros ao mesmo tempo a partir do índice atual
    const visibleBooks = [
        books[currentIndex], 
        books[(currentIndex + 1) % books.length], 
        books[(currentIndex + 2) % books.length]
    ];

    return (
        <RecommendedBooksSection>
            <Title>Livros Recomendados</Title>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <ArrowButton onClick={handlePrev}>←</ArrowButton>
                <BookList>
                    {visibleBooks.map((book) => (
                        <div key={book.id}>
                            <BookImage src={book.src} alt={book.name || "Imagem do livro"} />
                        </div>
                    ))}
                </BookList>
                <ArrowButton onClick={handleNext}>→</ArrowButton>
            </div>
        </RecommendedBooksSection>
    );
};

export default RecommendedBooks;
