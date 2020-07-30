import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPets } from 'react-icons/md';
import { FiLogIn, FiUserPlus, FiHome, FiLogOut } from 'react-icons/fi';

import logo from '../../assets/PetFinder-logo.png';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const token = localStorage.getItem('PetFinder: token');
  const user = localStorage.getItem('PetFinder: user');
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Pet Finder" />
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FiHome />
                Home
              </Link>
            </li>
            <li>
              {token && user && (
                <Link to="/pets/my">
                  <MdPets />
                  Meus Pets
                </Link>
              )}
            </li>
            <li>
              {token && user ? (
                <Link to="/login" onClick={signOut}>
                  <FiLogOut />
                  Sair
                </Link>
              ) : (
                <Link to="/login">
                  <FiLogIn />
                  Entrar
                </Link>
              )}
            </li>
            <li>
              {!token && !user && (
                <Link to="/register">
                  <FiUserPlus />
                  Cadastre-se
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
