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
  height: 100%;
  color: #FFF;
  overflow-x: hidden;
  overflow-y: hidden;
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