import React from 'react';
import { FiLogIn, FiUserPlus, FiHome } from 'react-icons/fi';

import logo from '../../assets/PetFinder-logo.png';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Pet Finder" />
        <nav>
          <ul>
            <li>
              <a href="/">
                <FiHome />
                Home
              </a>
            </li>
            <li>
              <a href="/login">
                <FiLogIn />
                Entrar
              </a>
            </li>
            <li>
              <a href="/logout">
                <FiUserPlus />
                Cadastre-se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
