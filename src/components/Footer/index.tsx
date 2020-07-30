import React from 'react';
import { MdPets } from 'react-icons/md';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <p>
          <MdPets />
          Developed By Bruno Lima
        </p>
      </div>
    </Container>
  );
};

export default Footer;
