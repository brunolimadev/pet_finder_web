import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function validationError(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(erro => {
    validationErrors[erro.path] = erro.message;
  });

  return validationErrors;
}
