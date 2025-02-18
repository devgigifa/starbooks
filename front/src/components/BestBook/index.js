import styled from "styled-components";
import React from 'react';

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    margin: 30px auto;

    /* Para telas menores que 778px */
    @media (max-width: 778px) {
        padding: 15px 10px; 
        max-width: 500px;  
    }

    /* Para telas menores que 668px */
    @media (max-width: 668px) {
        padding: 10px 8px;  
        max-width: 400px;  
    }

    /* Para telas menores que 480px */
    @media (max-width: 512px) {
        padding: 8px 6px;  
        max-width: 350px;  
    }

    /* Para telas menores que 344px (para celulares bem pequenos) */
    @media (max-width: 360px) {
        padding: 6px 4px;  
        max-width: 300px;  
    }
`;

const Button = styled.button`
    background-color: rgb(13, 5, 48);
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

    &:hover {
        cursor: pointer;
    }

    /* Ajustar botão para telas menores */
    @media (max-width: 668px) {
        width: 120px;
        font-size: 14px;
    }

    @media (max-width: 500px) {
        width: 100px;
        font-size: 12px;
    }
    @media (max-width: 350px) {
        width: 82px;
        font-size: 11px;
    }
`;

const Description = styled.p`
    max-width: 300px;
    color: black;

    @media (max-width: 668px) {
        font-size: 14px;
        max-width: 250px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        max-width: 220px;
    }

    @media (max-width: 344px) {
        font-size: 11px;
        max-width: 180px;
    }
`;

const Subtitle = styled.h4`
    color: rgb(13, 5, 48);
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;

    @media (max-width: 668px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const ImgBook = styled.img`
    width: 150px;

    @media (max-width: 668px) {
        width: 120px;
    }

    @media (max-width: 480px) {
        width: 100px;
    }

    @media (max-width: 344px) {
        width: 80px;
    }
`;

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.fontsize || '18px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;

    @media (max-width: 668px) {
        font-size: 16px;
        padding: 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 12px 0;
    }

    @media (max-width: 344px) {
        font-size: 12px;
        padding: 10px 0;
    }
`;

function BestBook() {
    // Informações fixas para o BestBook
    const imgSrc = "http://localhost:8000/images/cosmos.png"; // Caminho da imagem do livro Cosmos
    const title = "Cosmos";
    const subtitle = "Uma Jornada pelo Universo";
    const description = "Cosmos, de Carl Sagan, é uma obra-prima que explora o universo e nosso lugar nele. Um livro clássico de divulgação científica que aborda desde o Big Bang até as maravilhas do espaço profundo.";

    return (
        <Card>
            <div>
                <Title fontsize="16px" cor="#EB9000" align="left">{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <ImgBook src={imgSrc} alt={title} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    );
}

export default BestBook;
