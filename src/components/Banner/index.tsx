import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Eles precisam de você...</h1>
        <p>
          <span>Doe amor, adote um pet</span>
          <FiHeart />
        </p>
      </div>
    </Container>
  );
};

export default Header;
