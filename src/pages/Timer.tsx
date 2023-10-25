// import { useEffect } from 'react';

const Timer = (): JSX.Element => {
  function timer() {
    setTimeout(() => {
      console.log(new Array(1000000000));
    }, 100);
  }

  // useEffect(() => {
  //   timer();
  // }, []);

  return (
    <>
      <button onClick={timer}>click</button>
    </>
  );
};

export default Timer;
