import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #bfb39b; */
  box-shadow: 1px 6px 6px #bfb39b;
  padding: 16px;
  margin: 12px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    padding: 16px 0;
  }
`;

export const Main = styled.div`
  display: flex;

  ul {
    list-style: none;

    li {
      display: flex;
      padding: 4px 0;

      span {
        display: flex;
        align-items: center;
        font-weight: bold;
        margin-right: 8px;
        color: #73523f;

        > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  a {
    width: 160px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    background-color: #26160c;
    color: #fff;
    padding: 16px;
    transition: background-color 300ms;

    &:hover {
      background-color: ${lighten(0.3, '#26160c')};
    }
  }
`;
