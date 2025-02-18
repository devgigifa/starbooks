// src/components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: rgb(0, 0, 0);
  color: white;
  text-align: center;
  position: relative; /* Garante que o footer fique dentro do contêiner */
  box-sizing: border-box; /* Garantir que o padding não ultrapasse o limite do contêiner */
`;

function Footer() {
  return (
    <FooterContainer>
      <p>@ 2025 Desenvolvido por Giovanna Alves</p>
    </FooterContainer>
  );
}

export default Footer;
