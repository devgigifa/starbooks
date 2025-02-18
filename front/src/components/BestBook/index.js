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
`;

const Description = styled.p`
    max-width: 300px;
    color: black;
`;

const Subtitle = styled.h4`
    color: rgb(13, 5, 48);
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`;

const ImgBook = styled.img`
    width: 150px;
`;

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.fontsize || '18px;'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
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
