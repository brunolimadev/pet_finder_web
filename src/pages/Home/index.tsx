import React, { useState, useEffect } from 'react';
import { GiJumpingDog } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import apiPetFinder from '../../services/petFinderApi';

interface Pets {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  image: string;
}

const Home: React.FC = () => {
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

      const { data } = await apiPetFinder.get('pets/custom', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPets(data);
    }

    loadPets();
  }, [token, user]);

  return (
    <Container>
      <Header />
      <Banner />
      <main>
        <section>
          <h2>
            {user
              ? `Pets para adoção - ${JSON.parse(user).city}`
              : `Pets para adoção`}
            <GiJumpingDog size={60} />
            <FaCat size={40} />
          </h2>
          <div className="cards">
            {pets.length > 0 ? (
              pets.map(pet => (
                <Card
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
              <p>Que pena, ainda não temos nenhum pet para adoção.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
