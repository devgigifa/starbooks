import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

// Header Container
const HeaderContainer = styled.header`
    background-image: url('/path/to/your/starry-image.jpg'); /* Aqui você pode adicionar a imagem de fundo */
    background-size: cover; /* Faz a imagem cobrir todo o header */
    background-position: center center;
    background-color: black; /* Fundo preto por enquanto */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

// Logo
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    @media (max-width: 1024px) {
        font-size: 24px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

const LogoImage = styled.img`
    margin-right: 10px;
    width: 80px;
    @media (max-width: 480px) {
        width: 50px;
    }
`;


function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="logo" />
            <p><strong>Star</strong>Books</p>
        </LogoContainer>
    );
}

// Menu Hambúrguer
const MenuIcon = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }

    div {
        width: 30px;
        height: 4px;
        background-color: white;
        border-radius: 2px;
    }
`;

// Menu de Navegação
const Menu = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 40px; // Adiciona espaço entre os links
    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        width: 50%; /* Limita o menu a metade da largura da tela */
        background-color: #1a2a6c;
        text-align: center;
        padding: 20px 0;
        border-top: 2px solid white;
        box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }

    &.open {
        display: flex;
        transform: translateY(0);
    }
`;

const Option = styled.li`
    font-size: 16px;
    margin: 10px 0;
    color: white;
    cursor: pointer;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
    @media (max-width: 768px) {
        font-size: 14px;
    }
    &:hover {
        color:rgb(231, 159, 233);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

// Header com Menu Hambúrguer
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            {/* Menu hambúrguer */}
            <MenuIcon onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
            {/* Menu de Navegação */}
            <Menu className={menuOpen ? 'open' : ''}>
                <StyledLink to="/estante"><Option>ESTANTE</Option></StyledLink>
                <StyledLink to="/favoritos"><Option>FAVORITOS</Option></StyledLink>
            </Menu>
        </HeaderContainer>
    );
}

export default Header;