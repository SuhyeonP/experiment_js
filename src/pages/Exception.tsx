import { useState } from 'react';
import { exception } from '../util/exception';
import { css } from '@emotion/react';

const Exception = (): JSX.Element => {
  const [message, setMessage] = useState<string | null>(null);

  const handleClickError = async (isError: boolean, type?: 'any' | 'error') => {
    const response = await exception(isError, type);
    if (typeof response === 'object') {
      setMessage('error object');
    } else {
      setMessage(response as string);
    }
  };

  const clear = () => {
    setMessage(null);
  };

  return (
    <div>
      <h1>Exception</h1>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <button onClick={() => handleClickError(false)}>make success</button>
        <button onClick={() => handleClickError(true, 'any')}>make error - any</button>
        <button onClick={() => handleClickError(true, 'error')}>make error - error</button>
      </div>
      <div>
        <p>{message == null ? 'nothing' : message}</p>
      </div>
      <div>
        <button onClick={clear}>clear</button>
      </div>
    </div>
  );
};

export default Exception;
