import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Favorites from './routes/favorites';
import AllBooks from './routes/BooksPage';
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;    
  }

  /* src/styles.css */

/* Personalizando a barra de rolagem */
::-webkit-scrollbar {
  width: 15px; /* Largura da barra de rolagem */
}

/* Personalizando o trilho da barra de rolagem */
::-webkit-scrollbar-track {
  background:rgb(197, 195, 195); /* Cor do trilho */
  border-radius: 10px;
}

/* Personalizando o polegar (parte movível) da barra de rolagem */
::-webkit-scrollbar-thumb {
  background:rgb(31, 30, 30); /* Cor preta */
  border-radius: 10px;
}

/* Opção para quando o usuário está com o mouse em cima da barra de rolagem */
::-webkit-scrollbar-thumb:hover {
  background: #555555; /* Cor do polegar quando o mouse está sobre ele */
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/estante" element={<AllBooks />} /> {/* Corrigido aqui */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();