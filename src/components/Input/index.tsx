import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  label: string;
  maskPlaceholder?: string;
}

const Input: React.FC<InputProps> = ({ name, id, label, ...props }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={id}>
        {label}
        <input defaultValue={defaultValue} {...props} ref={inputRef} />
      </label>
      <small>{error && error}</small>
    </Container>
  );
};

export default Input;
