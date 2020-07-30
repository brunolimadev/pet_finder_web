import styled from 'styled-components';

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    section {
      width: 980px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      h2 {
        display: flex;
        align-items: center;
        padding: 24px 0;

        > svg {
          margin-left: 16px;
        }
      }

      .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
      }
    }
  }
`;
