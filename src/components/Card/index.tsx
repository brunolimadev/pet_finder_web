import React from 'react';
import { MdPets } from 'react-icons/md';
import { Container, Header, Main, Footer } from './styles';

export interface Pets {
  name: string;
  breed: string;
  age: number;
  weight: number;
  image: string;
}

const Card: React.FC<Pets> = ({ name, breed, age, weight, image }) => {
  return (
    <Container>
      <Header>
        <img src={image} alt="Pet 1" />
        <h3>{name}</h3>
      </Header>
      <Main>
        <ul>
          <li>
            <span>
              <MdPets />
              Raça:
            </span>
            {breed}
          </li>
          <li>
            <span>
              <MdPets />
              Idade:
            </span>
            {age > 1 ? `${age} anos` : `${age} ano`}
          </li>
          <li>
            <span>
              <MdPets />
              Peso:
            </span>
            {`${weight}Kg`}
          </li>
        </ul>
      </Main>
      <Footer>
        <a href="sdsd">Adotar</a>
      </Footer>
    </Container>
  );
};

export default Card;
