import styled from '@emotion/styled';

export const PageLayoutStyled = styled.div`
  margin: 30px;

  .pageRoute {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    margin-bottom: 10px;

    & > button {
      border: 1px solid lemonchiffon;
      color: #666666;
      background: #ffd16c;
      border-radius: 4px;
      padding: 3px;
    }
  }

  .pageLayoutTitle {
    font-size: 22px;
    font-weight: bold;
  }

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
