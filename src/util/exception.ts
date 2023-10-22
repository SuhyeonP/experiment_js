import { wait } from './wait';

export const exception = async (isError: boolean, type?: 'any' | 'error') => {
  try {
    await wait(100);
    if (isError) {
      // throw 에서 warning이 뜨는데
      //try-catch의 catch 블록에서 exception 핸들링은 개발자가 "미처 예상하지 못한 에러"를 위한 것
      //즉 해당 코드는 에러가 확신시 되는 코드이기에 잘못된거지만
      // throw에 error생성자가 아닌 아무거나 넣어도됨을 보이기위해
      throw type === 'any' ? 'any of string' : new Error();
    }
    return 'success';
  } catch (err) {
    return err;
  }
};
