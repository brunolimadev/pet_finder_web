import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { MdPets } from 'react-icons/md';
import { Container, Header, Main, Footer } from './styles';

import apiPetFinder from '../../services/petFinderApi';

export interface Pets {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  image: string;
}

const CardHorizontal: React.FC<Pets> = ({
  id,
  name,
  breed,
  age,
  weight,
  image,
}) => {
  const token = localStorage.getItem('PetFinder: token');

  const handleOnClickDeletePet = useCallback(
    async petId => {
      await apiPetFinder.delete(`/pets/${petId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [token],
  );
  return (
    <Container>
      <button type="button" onClick={() => handleOnClickDeletePet(id)}>
        <FiTrash2 size={20} />
      </button>
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
        <Link to={`update/${id}`}>Editar</Link>
      </Footer>
    </Container>
  );
};

export default CardHorizontal;
