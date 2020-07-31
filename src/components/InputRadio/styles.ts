import styled from 'styled-components';

export const Container = styled.div`
  label + label {
    margin-left: 16px;
  }

  label > input {
    margin-right: 4px;
  }
`;
