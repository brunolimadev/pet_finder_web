import styled from 'styled-components';
import banner from '../../assets/banner.jpg';

export const Container = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: #ccc;
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;

    h1 {
      font-size: 40px;
    }

    p {
      display: flex;
      align-items: center;
      font-size: 24px;

      > svg {
        margin-left: 8px;
      }
    }
  }
`;
