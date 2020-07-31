import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, id, label, ...props }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
      },
      setValue(_: HTMLInputElement, value: string) {
        // setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={id}>
        {label}
        <input
          type="file"
          defaultValue={defaultValue}
          {...props}
          ref={inputRef}
          name={name}
        />
      </label>
      <small>{error && error}</small>
    </Container>
  );
};

export default Input;
