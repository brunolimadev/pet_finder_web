import styled from 'styled-components';

import { lighten } from 'polished';
import background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    border: 1px solid #ccc;
    align-items: center;
    padding: 16px;
    background-color: rgba(255, 255, 255, 0.7);
    img {
      width: 250px;
    }

    form {
      margin-top: 16px;
      width: 70%;
      display: flex;
      flex-direction: column;

      h2 {
        text-align: center;
        margin-bottom: 24px;
      }

      .group {
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

        & + .group {
          margin-top: 8px;
        }
      }

      > button {
        text-decoration: none;
        font-weight: bold;
        background-color: #26160c;
        width: 300px;
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin-top: 24px;
        border: none;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color: ${lighten(0.3, '#26160c')};
        }
      }

      > a {
        color: #26160c;
        margin-top: 24px;
        text-decoration: none;
        text-align: center;
      }

      .msgError {
        color: red;
        font-size: 14px;
        text-align: center;
        margin-top: 16px;
      }
    }
  }
`;
