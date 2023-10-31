//const EventLoop.tsx = (): JSX.Element => {
import { useEffect } from 'react';
import { delay, getApple, getBanana } from '../util/wait';

export const EventLoop = (): JSX.Element => {
  async function realPromise() {
    return 1;
  }

  async function main() {
    console.log('hoho first');
    await delay();

    const result = await Promise.resolve('끝');
    console.log(result, 'result');
    console.log('when!');
  }

  async function testFruit() {
    const apple = getApple();
    const banana = getBanana();

    console.time();

    const a = await apple;
    const b = await banana;

    console.log(a, b);
    console.timeEnd();
  }

  useEffect(() => {
    // main();
    testFruit();
    // console.log(realPromise());
  }, []);

  return (
    <>
      <p>EventLoop.tsx</p>
    </>
  );
};

// export default EventLoop.tsx;
