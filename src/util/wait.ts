export const wait = (time: number): Promise<void> => new Promise(resolve => setTimeout(resolve, time));

export function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1.5초가 지남');
      resolve('what?');
    }, 1500);
  });
}
export function getApple() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('apple'), 1000);
  });
}

export function getBanana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('banana'), 1000);
  });
}
