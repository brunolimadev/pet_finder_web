import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { MdPets } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';
import apiPetFinder from '../../services/petFinderApi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';

interface PetParams {
  id: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  postal_code: string;
  address: string;
  number: string;
  city: string;
  state: string;
}

interface PetData {
  name: string;
  breed: string;
  age: number;
  weight: number;
  image: string;
  user: User;
}

const PetDetails: React.FC = () => {
  const { params } = useRouteMatch<PetParams>();
  const [pet, setPet] = useState<PetData | null>(null);

  useEffect(() => {
    async function loadPet() {
      const { data } = await apiPetFinder.get(`pets/search/${params.id}`);
      setPet(data);
    }

    loadPet();
  }, [params.id]);

  return (
    pet && (
      <Container>
        <Header />
        <main>
          <section>
            <div className="content">
              <img
                src={`http://localhost:3333/files/${pet.image}`}
                alt="Imagem do Pet"
              />
              <div>
                <h2>
                  <MdPets size={24} />
                  Dados do Pet
                </h2>
                <p>
                  <span>Nome:</span>
                  {pet.name}
                </p>
                <p>
                  <span>Raça:</span>
                  {pet.breed}
                </p>
                <p>
                  <span>Idade:</span>
                  {pet.age > 1 ? `${pet.age} anos` : `${pet.age} ano`}
                </p>
                <p>
                  <span>Peso:</span>
                  {`${pet.weight}Kg`}
                </p>
                <h2>
                  <RiUserHeartLine size={24} />
                  Dados do Doador
                </h2>
                <p>
                  <span>Nome:</span>
                  {pet.user.name}
                </p>
                <p>
                  <span>Localidade:</span>
                  {`${pet.user.city} - ${pet.user.state}`}
                </p>
              </div>
            </div>

            <a href={`mailto:${pet.user.email}`}>Quero Adotar</a>
          </section>
        </main>
        <Footer />
      </Container>
    )
  );
};

export default PetDetails;
