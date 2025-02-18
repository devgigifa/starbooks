import Search from '../components/Search';
import RecommendedBooks from '../components/RecommendedBooks';
import styled, { createGlobalStyle } from 'styled-components';
import BestBook from '../components/BestBook';

// GlobalStyle para fontes e reset de CSS
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');
  
  body {
    font-family: 'Orbitron', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%; /* Ajuste para garantir que ele ocupe toda a altura da tela */
  background-image: url('https://s5.static.brasilescola.uol.com.br/be/2021/09/galaxia-do-triangulo.jpg');
  background-size: cover;
  background-position: center;
  color: #FFF;
  overflow-x: hidden; /* Desativa a rolagem horizontal */
  overflow-y: hidden; /* Desativa a rolagem vertical */
`;


function Home() {
  return (
    <AppContainer>
      <GlobalStyle />  
      <Search />
      <RecommendedBooks /> 
      <BestBook /> 
    </AppContainer>
  );
}

export default Home;
