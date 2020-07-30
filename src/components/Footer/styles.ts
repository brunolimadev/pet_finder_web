import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 60px;
  background-color: #bfb39b;

  div {
    width: 100%;
    height: 100%;
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      font-size: 14px;

      svg {
        margin-right: 8px;
      }
    }
  }
`;
