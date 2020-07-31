import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import apiViaCep from '../../services/viacep';
import apiPetFinder from '../../services/petFinderApi';

import validationErrors from '../../utils/validations';

import { Container } from './styles';
import Input from '../../components/Input';
import logo from '../../assets/PetFinder-logo.png';

interface RegisterFormData {
  name: string;
  email: string;
  postal_code: string;
  address: string;
  number: string;
  city: string;
  state: string;
  password: string;
  passwordConfirm: string;
}

interface MsgError {
  message?: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [msgError, setMsgError] = useState<MsgError>({} as MsgError);
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  const handleSubmit = useCallback(async (data: RegisterFormData) => {
    formRef.current?.setErrors({});
    try {
      setRegisterStatus(false);
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        postal_code: Yup.string().required('CEP é obrigatório'),
        number: Yup.string().required('Número é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
          .required('A confirmação da senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await apiPetFinder.post('/users', {
        name: data.name,
        email: data.email,
        address: data.address,
        postal_code: data.postal_code,
        number: data.number,
        city: data.city,
        state: data.state,
        password: data.passwordConfirm,
      });

      setRegisterStatus(true);
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
  }, []);

  const handleInputCep = useCallback(async cep => {
    const response = await apiViaCep.get(`${cep}/json`);

    const { localidade, logradouro, uf } = response.data;

    formRef.current?.setData({
      city: localidade,
      address: logradouro,
      state: uf,
    });
  }, []);

  return (
    <Container>
      {!registerStatus ? (
        <div>
          <img src={logo} alt="Logo Pet Finder" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Cadastro</h2>

            <Input
              type="text"
              name="name"
              id="name"
              label="Nome Completo:"
              placeholder="João"
            />

            <Input
              type="email"
              name="email"
              id="email"
              label="Email:"
              placeholder="mail@mail.com"
            />

            <Input
              type="text"
              name="postal_code"
              id="postal_code"
              label="CEP:"
              onBlur={e => handleInputCep(e.target.value)}
            />

            <Input type="text" name="address" id="address" label="Endereço:" />
            <Input type="text" name="number" id="number" label="Número:" />
            <Input type="text" name="city" id="city" label="Cidade:" />
            <Input type="text" name="state" id="state" label="Estado:" />
            <Input
              type="password"
              name="password"
              id="password"
              label="Senha:"
            />
            <Input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              label="Confirme a Senha:"
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
    </Container>
  );
};

export default LogIn;
