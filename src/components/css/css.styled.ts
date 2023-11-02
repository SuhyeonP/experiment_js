import styled from '@emotion/styled';

export const TypeAndChildStyled = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 2fr 2fr;

  height: 100%;

  & > div {
    height: 100%;

    border: 1px dashed blue;
  }

  .div1 {
    grid-area: 1/1/2/2;
  }
  .div2 {
    grid-area: 1/2/2/3;
  }
  .div3,
  .div4 {
    display: grid;
    grid-template-rows: 1fr 3fr;
    .parent1,
    .parent2 {
      display: flex;
      gap: 10px;
      & > * {
        width: 50px;
        height: 50px;

        border: 1px solid;

        text-align: center;
      }
    }
  }

  .div3 {
    grid-area: 2/1/3/3;
  }
  .div4 {
    grid-area: 3/1/4/3;
  }

  .div1 {
    .type {
      p:first-child {
        color: red;
      }

      p:nth-child(2) {
        color: orange;
      }

      :nth-child(3) {
        color: yellow;
      }

      p:nth-child(4n) {
        color: green;
      }

      &:nth-child(5) {
        color: blue;
      }

      p:nth-child(4n + 2) {
        color: navy;
      }
      p:last-child {
        color: blueviolet;
      }
    }
  }

  .div2 {
    .child {
      p:first-of-type {
        color: red;
      }

      p:nth-of-type(2) {
        color: orange;
      }

      :nth-of-type(3) {
        color: yellow;
      }

      p:nth-of-type(4n) {
        color: green;
      }

      &:nth-of-type(5) {
        color: blue;
      }

      p:nth-of-type(4n) {
        color: navy;
      }
      p:last-of-type {
        color: blueviolet;
      }
    }
  }

  .div3 {
    .parent1 {
      p:first-child {
        background: lightgreen;
      }
      span {
        :first-of-type {
          background: lightgreen;
        }
        :nth-last-child(2) {
          background: lightblue;
        }
        :last-of-type {
          background: lavender;
        }
      }
    }
  }
  .div4 {
    .parent2 {
      p {
        :first-of-type {
          background: lightgreen;
        }
        :nth-last-child(2) {
          background: lightblue;
        }
        :last-of-type {
          background: lavender;
        }
      }
    }
  }
`;
