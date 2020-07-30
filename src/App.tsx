import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
