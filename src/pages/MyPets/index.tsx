import React, { useState, useEffect } from 'react';
import { GiJumpingDog } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardHorizontal from '../../components/CardHorizontal';
import apiPetFinder from '../../services/petFinderApi';

interface Pets {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  image: string;
}

const MyPets: React.FC = () => {
  const [pets, setPets] = useState<Pets[]>([]);
  const token = localStorage.getItem('PetFinder: token');
  const user = localStorage.getItem('PetFinder: user');

  useEffect(() => {
    async function loadPets(): Promise<void> {
      if (!token && !user) {
        const { data } = await apiPetFinder.get('pets');
        setPets(data);
        return;
      }

      const { data } = await apiPetFinder.get('pets/mypets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPets(data[0].pets);
    }

    loadPets();
  }, [token, user]);

  return (
    <Container>
      <Header />
      <main>
        <section>
          <h2>
            Meus Pets para Doação
            <GiJumpingDog size={60} />
            <FaCat size={40} />
          </h2>
          <div className="cards">
            {pets.length > 0 ? (
              pets.map(pet => (
                <CardHorizontal
                  key={pet.id}
                  id={pet.id}
                  name={pet.name}
                  breed={pet.breed}
                  age={pet.age}
                  weight={pet.weight}
                  image={`http://localhost:3333/files/${pet.image}`}
                />
              ))
            ) : (
              <p>Que pena, você ainda não possuí pet para adoção.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default MyPets;
