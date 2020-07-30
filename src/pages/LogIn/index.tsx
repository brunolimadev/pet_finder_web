import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/PetFinder-logo.png';

const LogIn: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Pet Finder" />
        <form action="">
          <h2>Login</h2>

          <div className="group">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="mail@mail.com"
              />
            </label>
            <small>Error</small>
          </div>
          <div className="group">
            <label htmlFor="password">
              Senha:
              <input type="password" name="password" id="password" />
            </label>
            <small>Error</small>
          </div>
          <button type="submit">Entrar</button>
          <Link to="/">Voltar</Link>
        </form>
      </div>
    </Container>
  );
};

export default LogIn;
