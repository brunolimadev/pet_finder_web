import React, { useState, useEffect } from 'react';
import { GiJumpingDog } from 'react-icons/gi';
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

  useEffect(() => {
    async function loadPets(): Promise<void> {
      const { data } = await apiPetFinder.get('pets');
      setPets(data);
      console.log(data);
    }

    loadPets();
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <main>
        <section>
          <h2>
            Pets para adoção
            <GiJumpingDog size={60} />
          </h2>
          <div className="cards">
            {pets.map(pet => (
              <Card
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                weight={pet.weight}
                image={`http://localhost:3333/files/${pet.image}`}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
