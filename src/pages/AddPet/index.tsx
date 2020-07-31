import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import apiPetFinder from '../../services/petFinderApi';

import validationErrors from '../../utils/validations';

import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import InputRadio from '../../components/InputRadio';
import logo from '../../assets/PetFinder-logo.png';

interface RegisterFormData {
  name: string;
  breed: string;
  age: number;
  weight: number;
  image: File;
  user_id: string;
  type: 'cachorro' | 'gato';
}

interface MsgError {
  message?: string;
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const AddPet: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [msgError, setMsgError] = useState<MsgError>({} as MsgError);
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  const token = localStorage.getItem('PetFinder: token');
  const user = localStorage.getItem('PetFinder: user');
  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      formRef.current?.setErrors({});
      try {
        setRegisterStatus(false);
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do pet é obrigatório'),
          breed: Yup.string().required('Raça do pet é obrigatória'),
          age: Yup.string().required('Idade é obrigatória'),
          weight: Yup.string().required('Peso é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newData = new FormData();

        newData.append('name', data.name);
        newData.append('breed', data.breed);
        newData.append('age', String(data.age));
        newData.append('weight', String(data.weight));
        newData.append('type', data.type[0]);
        newData.append('image', data.image);

        await apiPetFinder.post('/pets', newData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
            body: newData,
          },
        });

        formRef.current?.reset();

        // setRegisterStatus(true);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = validationErrors(error);
          formRef.current?.setErrors(errors);
        } else if (error.response.status === 400) {
          setMsgError({
            message: 'Cadastro não efetuado, verifique suas informações.',
          });
        }
      }
    },
    [token],
  );

  const checkboxOptions: CheckboxOption[] = [
    { id: 'cachorro', value: 'cachorro', label: 'Cachorro' },
    { id: 'gato', value: 'gato', label: 'Gato' },
  ];

  return (
    <Container>
      <Header />
      {!registerStatus ? (
        <div>
          <img src={logo} alt="Logo Pet Finder" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Cadastrar Novo Pet</h2>

            <Input type="text" name="name" id="name" label="Nome do Pet:" />
            <Input type="text" name="breed" id="breed" label="Raça:" />
            <Input type="number" name="age" id="age" label="Idade:" />
            <Input type="number" name="weight" id="weight" label="Peso:" />
            <div className="radioButtons">
              <InputRadio name="type" options={checkboxOptions} />
            </div>
            <InputFile name="image" id="image" />
            <Input
              type="hidden"
              name="user_id"
              id="user_id"
              value={user && JSON.parse(user).id}
            />

            {msgError.message && <p className="msgError">{msgError.message}</p>}

            <button type="submit">Cadastrar</button>
            <Link to="/">Voltar</Link>
          </Form>
        </div>
      ) : (
        <div className="msgSuccess">
          <h2>Obrigado por se juntar a nós!</h2>
          <Link to="/login">Entrar</Link>
        </div>
      )}
      <Footer />
    </Container>
  );
};

export default AddPet;
