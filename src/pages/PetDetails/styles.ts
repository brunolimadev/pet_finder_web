import styled from 'styled-components';
import { lighten } from 'polished';

import background from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    margin-bottom: 24px;
    height: 100%;
    background: url(${background}) no-repeat center center;
    background-size: contain;

    section {
      width: 980px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .content {
        width: 100%;
        display: flex;

        img {
          width: 100%;
          max-width: 400px;
          height: 100%;
          max-height: 400px;
          object-fit: cover;
        }

        > div {
          padding: 0 16px;
          flex: 1;

          p + h2 {
            margin-top: 16px;
          }

          p {
            padding: 8px 0;

            span {
              font-weight: bold;
              margin-right: 8px;
              color: #73523f;
            }
          }

          h2 {
            display: flex;
            align-items: center;
            color: #73523f;
            border-bottom: 1px dotted #73523f;

            svg {
              margin-right: 8px;
            }
          }
        }
      }

      > a {
        text-decoration: none;
        font-weight: bold;
        background-color: #26160c;
        width: 300px;
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin-top: 48px;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color: ${lighten(0.3, '#26160c')};
        }
      }
    }
  }
`;
