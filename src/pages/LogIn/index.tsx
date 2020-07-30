import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import validationErrors from '../../utils/validations';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import Input from '../../components/Input';
import logo from '../../assets/PetFinder-logo.png';

interface LogInFormData {
  email: string;
  password: string;
}

interface MsgError {
  message?: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();
  const [msgError, setMsgError] = useState<MsgError>({} as MsgError);
  const handleSubmit = useCallback(
    async (data: LogInFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email é obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = validationErrors(error);
          formRef.current?.setErrors(errors);
        } else if (error.response.status === 400) {
          setMsgError({
            message: 'Login ou senha inválido.',
          });
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Pet Finder" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input
            type="email"
            name="email"
            id="email"
            label="Email"
            placeholder="mail@mail.com"
          />

          <Input type="password" name="password" id="password" label="Senha" />

          {msgError.message && <p className="msgError">{msgError.message}</p>}

          <button type="submit">Entrar</button>
          <Link to="/">Voltar</Link>
        </Form>
      </div>
    </Container>
  );
};

export default LogIn;
