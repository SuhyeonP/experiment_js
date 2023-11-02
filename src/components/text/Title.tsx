import { css } from '@emotion/react';

export const Title = ({ children }: { children: string }) => {
  return (
    <h1
      css={css`
        font-size: 1.6rem;
        font-weight: bold;
      `}
    >
      {children}
    </h1>
  );
};

export default Title;
