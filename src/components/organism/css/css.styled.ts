import styled from '@emotion/styled';

export const NthSelectorStyled = styled.div`
  height: 100%;

  .experiment {
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    row-gap: 10px;
    background-color: #eeeeee;

    .exp1,
    .exp2 {
      grid-row: span 1;

      background-color: white;

      & > div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        gap: 5px;

        & > p,
        & > span {
          width: 100px;
          height: 30px;

          border: 1px solid #666666;

          text-align: center;
        }
      }

      // div > p:**-of-type: div 하위 p 요소중 n번째
      // div > span **-child: div 하위의 **번째 자식이 span인 요소위의
      .type {
        & > p:first-of-type {
          background-color: darkseagreen;
        }

        & > span:first-of-type {
          background-color: lavender;
        }

        & > p:nth-of-type(3) {
          background-color: lightblue;
        }

        & > span:last-of-type {
          background-color: lightcoral;
        }

        & > p:last-of-type {
          background-color: lightpink;
        }
      }
      .child {
        & > p:first-child {
          background-color: darkseagreen;
        }

        & > span:first-child {
          background-color: lavender;
        }

        & > p:nth-child(3) {
          background-color: lightblue;
        }

        & > span:last-child {
          background-color: lightcoral;
        }

        & > p:last-child {
          background-color: lightpink;
        }
      }
    }
  }

  .resultWrapper {
    overflow: auto;
  }

  .resultTitle {
    padding-bottom: 20px;

    font-size: 20px;
    font-weight: bold;
  }
`;

export const TypeAndChildStyled = styled.div``;
