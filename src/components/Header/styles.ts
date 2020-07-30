import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: solid 3px #bfb39b;

  > div {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background: #ccc; */

    img {
      width: 200px;
    }

    nav ul {
      display: flex;
      list-style: none;

      li a {
        text-decoration: none;
        color: #26160c;
        transition: color 200ms;
        display: flex;
        align-items: center;

        > svg {
          margin-right: 4px;
        }

        &:hover {
          color: ${lighten(0.3, '#26160c')};
        }
      }

      li + li {
        margin-left: 16px;
      }
    }
  }
`;
