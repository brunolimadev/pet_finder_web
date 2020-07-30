import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

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
              <a href="sade">
                <FiLogIn />
                Entrar
              </a>
            </li>
            <li>
              <a href="sdsd">
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
