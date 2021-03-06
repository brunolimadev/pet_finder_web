import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

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
        color: #26160c;

        > svg {
          margin-left: 16px;
        }
      }

      .cards {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 80px;
      }
    }
  }
`;
