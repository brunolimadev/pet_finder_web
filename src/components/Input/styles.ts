import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    input {
      height: 32px;
      border-radius: 4px;
      border: 1px solid #ccc;
      padding: 0 8px;
      font-size: 14px;
    }
  }

  small {
    color: red;
  }

  & + div {
    margin-top: 8px;
  }
`;
