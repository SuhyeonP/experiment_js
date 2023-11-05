import styled from '@emotion/styled';

export const PageLayoutStyled = styled.div`
  margin: 30px;

  .resetBtn {
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    align-content: flex-start;
    gap: 10px;
  }

  .pageLayoutChildren {
    margin-top: 20px;

    width: 90%;
    height: 80vh;
  }
`;

export const ExperimentLayout = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  column-gap: 10px;

  height: 100%;

  background: #ecf5ff;

  .experiment,
  .resultWrapper {
    grid-column: span 1;
    background: white;
  }

  .resultWrapper {
    height: 100%;

    .resultContent {
    }
  }
`;
