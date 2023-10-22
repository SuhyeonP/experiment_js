import { useState } from 'react';
import { exception, exceptionRemoveError } from '../util/exception';
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

  const handleClickError2 = () => {
    const e = exceptionRemoveError();
    setMessage(e as string);
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
        <button onClick={handleClickError2}>
          catch절에는 무엇이 되었건 throw문이 던진 단 한개의 인자만 받을 수 잇다.
        </button>
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
