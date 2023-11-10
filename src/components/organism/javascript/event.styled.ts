import styled from '@emotion/styled';

export const EventStyled = styled.div`
  height: 100%;

  .experiment {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .basic {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;

      width: 80%;
      height: 200px;

      background-color: #ff8c9e;

      .parent {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 70%;
        height: 120px;

        background-color: #ffb59f;

        .child {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 70%;
          height: 50%;

          border: 1px solid brown;
          background-color: #ffd6a0;
        }
      }
    }

    .delegation {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      flex: 1;

      width: 100%;

      .parentATag {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;

        width: 90%;
        height: 80%;

        background-color: #8dc0b3;

        .eventsWrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          gap: 20px;

          width: 80%;
          height: 80%;
          background-color: #bde5a7;
        }
      }
    }
  }

  .resultWrapper {
    display: flex;
    flex-direction: column;

    .resultTitle {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      border: 1px solid green;

      & > p {
        line-height: 17px;
        font-size: 15px;
      }

      .target,
      .parentTarget {
        min-height: 17px;
      }
    }

    .resultContent {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const EventLoopStyled = styled.div`
  height: 100%;

  .experiment {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .resultWrapper {
    display: grid;
    grid-template-rows: 3fr 2fr;
    background: #ecf5ff;
    row-gap: 10px;

    .console,
    .resultContent {
      background: white;
    }
  }

  .resultContent {
  }
`;

export const TimerStyled = styled.div`
  .inputWrapper {
    display: flex;
  }

  .timerInput {
    & > input {
      width: 60px;
      text-align: right;
    }
  }
`;
