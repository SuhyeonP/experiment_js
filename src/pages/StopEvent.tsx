import React, { useEffect } from 'react';

const StopEvent = (): JSX.Element => {
  const handleClick =
    (msg: string) => (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, globalThis.MouseEvent>) => {
      console.log(msg);
    };

  const preventDefault =
    (msg: string) => (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      console.log(msg, 'grandgrand로 엮인 a태그는 작동안하지만 다른 로그들은 찍힘');
    };

  const stopPropagation =
    (msg: string) => (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, globalThis.MouseEvent>) => {
      e.stopPropagation();
      console.log(msg);
    };

  const stopImmediatePropagation = (e: Event) => {
    e.stopImmediatePropagation();
    console.log('child3');
  };
  const stopImmediatePropagation2 = (e: Event) => {
    e.stopImmediatePropagation();
    console.log('child4 last element');
  };

  const stopImmediatePropagationClick = (e: any) => {
    e.stopImmediatePropagation();
    console.log('child3-1');
  };

  const goNaver = () => {
    window.open('https://www.naver.com');
  };

  const tempEvent = e => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('this is last target?', e.target, e.currentTarget);
  };

  const consoleLog = (e) => {
    console.log('this is just log');
  }

  useEffect(() => {
    const ele = document.querySelector('.child3');
    const ele13 = document.querySelector('.child13');
    const ele2 = document.querySelector('.child4');
    const ele3 = document.querySelector('.laaaast');

    if (ele2) {
      ele2.addEventListener('click', stopImmediatePropagation2);

      ele2.addEventListener('click', () => {
        console.log('this will not working');
      });
    }

    if (ele3) {
      ele3?.addEventListener('click', tempEvent);
    }

    // 전역에 건걸 여러번 컴포넌트로 호출해서 사용해서 pdp에서 이슈가 있던것
    // addEventListener('click', tempEvent);
    if (ele) {
      ele.addEventListener('click', stopImmediatePropagation);
    }

    if (ele13) {
      ele13.addEventListener('click', consoleLog);
    }

    return () => {
      ele!.removeEventListener('click', stopImmediatePropagation);
      ele2!.removeEventListener('click', stopImmediatePropagation2);
      ele3!.removeEventListener('click', tempEvent);
      ele13!.removeEventListener('click', consoleLog);
    };
  }, []);

  return (
    <>
      <a
        href={'https://www.google.com'}
        className={'grandgrand'}
        target="_blank"
        rel="noreferrer"
        onClick={() => console.log('grand grand!!')}
      >
        <div
          style={{ width: '1000px', height: '1000px', backgroundColor: '#fffff3' }}
          className={'grandParent'}
          onClick={handleClick('grand parent element')}
        >
          <div
            className={'parent'}
            style={{ width: '400px', height: '800px', backgroundColor: 'orange' }}
            onClick={handleClick('parent element')}
          >
            <button className={'child'} onClick={handleClick('child element')}>
              모든 이벤트 다 발생할것
            </button>
            <br />
            <br />
            <button className={'child1'} onClick={preventDefault('child2')}>
              preventDefault만 - a 태그는 작동 안할듯
            </button>
            <br />
            <br />
            <a href={'https://www.naver.com'} onClick={preventDefault('hi')}>
              hi my href is not working - prevent default
            </a>
            <br />
            <br />
            <button className={'child2'} onClick={stopPropagation('child3')}>
              stopPropagation - grand grand의 a 태그의 href는 작동 (캡쳐링, 버블링이 아닌 href라서) 다른 상위에 엮인
              온클릭이벤트들은 작동안함(캡쳐링-버블링)
            </button>
            <br />
            <br />
            <button onClick={goNaver}>i am all</button>
            <br />
            <br />
            <button onClick={stopImmediatePropagationClick}>
              stopImmediatePropagation on btn - onClick으로는 가능한 타입이 아님 ▶️ eventListner에만 존재▶️ 온클릭함수
              정상작동 못함
            </button>
            <br />
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: `<a class="child3" href="https://naver.com" target="_blank">stopImmediatePropagation - naver로만 이동 + 온클릭(child3)함수랑 - 구글로는 이동 안함</a>`,
              }}
            />
            <br />
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: `<a class="child13" href="https://naver.com" target="_blank" onclick="return false;">return false 를 해서 아무것도 이동 안 함 - 상위에 구글도 이동 안함 - 캡쳐링,버블링만 발생</a>`,
              }}
            />
            <br />
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: `<div style="background:white; height:30px;" class="child4" onclick="console.log(123)">stopImmediatePropagation - 결론: href는 이벤트가 아니라 속성이라 되는거같다?</div>`,
              }}
            />
          </div>
        </div>
      </a>
      <div className={'laaaast'} style={{ width: '1000px', height: '1000px', backgroundColor: 'green' }}>
        <div className={'pp'} style={{ width: '300px', height: '300px', backgroundColor: 'yellow' }}>
          <div className={'lastTarget'} style={{ backgroundColor: 'white' }}>
            hi this is target
          </div>
        </div>
      </div>
    </>
  );
};

export default StopEvent;

// <div style={{ width: '300px', height: '300px', backgroundColor: 'skyblue' }} className={'grand2'}>
//   grand parent
//   <div style={{ width: '140px', height: '140px', backgroundColor: 'yellow' }} className={'parent2'}>
//     parent
//     <div style={{ width: '70px', height: '70px', backgroundColor: 'green' }} className={'child2'}>
//       child
//     </div>
//   </div>
// </div>
