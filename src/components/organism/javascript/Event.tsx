import { EventStyled } from './event.styled';
import { ExperimentLayout } from '../../molecules/layout/layout.styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text } from 'components/atom/text/Text';

// export const EventExplain: IExplainProps = {
//   title: '이벤트 위임과 캡쳐링, 버블링',
//   subTitle:
//     '이벤트 위임 - addEventListner - 캡쳐링, 버블링' + 'preventDefault, stopPropagation, stopImmediatePropagation',
//   tmi: [
//     'addEventListner 와 onClick의 차이',
//     'addEventListner로 사용시 캡쳐링, 버블링에 대해 옵션값으로 바로 사용 가능, 여러 이벤트 한번에 등록 가능 - 자세한 구현은 기존 stop 참조',
//   ],
// };

const Event = (): JSX.Element => {
  const aRef = useRef<HTMLAnchorElement>(null);
  const [results, setResults] = useState<Set<string>>(new Set());
  const [target, setTarget] = useState<string>('');
  const [parentTarget, setParentTarget] = useState<string>('');

  // result 가 계속해서 이벤트가 버블링되면서 타고가기 때문에 여러번 재할당 되기에 usecallback 하면 메모리만 차지
  // 만약 results의 0번째가 첨부터 필요하다면 모르겟다...?
  const stackAndLog = (elementName: string, targetElement: string) => {
    setResults(prev => {
      if ([...prev].length > 0 && [...prev][0] === targetElement) {
        return new Set([...prev, elementName]);
      } else {
        return new Set([elementName]);
      }
    });
  };

  // results, target이 지속적으로 업데이트 할 예정
  // 함수 내부에 외부에서 사용중인 값이 없으므로 useCallback을 사용해 함수가 계속해서 재선언 되는것을 막음
  const handleClickElement = useCallback((e: React.MouseEvent | MouseEvent, isStop?: boolean) => {
    const parentElement = e.currentTarget as HTMLElement;
    const nowElement = e.target as HTMLElement;

    setTarget(nowElement.getAttribute('data-name') as string);
    setParentTarget(parentElement.getAttribute('data-name') as string);

    if (!isStop) {
      stackAndLog(parentElement.getAttribute('data-event') as string, nowElement.getAttribute('data-event') as string);
    } else {
      setResults(new Set([nowElement.getAttribute('data-event') as string]));
    }
  }, []);

  const preventDefault = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClickElement(e);
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClickElement(e, true);
  };

  useEffect(() => {
    if (aRef.current) {
      aRef.current.addEventListener('click', handleClickElement);
    }
  }, []);

  const handleClickLink = (e: React.MouseEvent) => {
    window.open('https://www.naver.com');
    handleClickElement(e);
  };

  return (
    <EventStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div
            className={'basic'}
            data-name={'basicGrandParent'}
            data-event={'grandParent'}
            onClick={handleClickElement}
          >
            <div className={'parent'} data-name={'basicParent'} data-event={'parent'} onClick={handleClickElement}>
              <div className={'child'} data-name={'basicChild'} data-event={'child'} onClick={handleClickElement}>
                hi this is target
              </div>
            </div>
          </div>
          <div className={'delegation'}>
            <a
              className={'parentATag'}
              href={'https://google.com'}
              target={'_blank'}
              rel="noreferrer"
              data-name={'delegationGrandParent'}
              data-event={'grandParent'}
              onClick={handleClickElement}
            >
              <div
                data-event={'parent'}
                data-name={'delegationParent'}
                className={'eventsWrapper'}
                onClick={handleClickElement}
              >
                <button data-event={'child'} data-name={'childPureLink'} onClick={handleClickLink}>
                  버블링 모두 발생 - pure - 링크 추가 <br /> 링크는 왜 하나만 되냐고
                </button>
                <button data-event={'child'} data-name={'childPure'} onClick={handleClickElement}>
                  버블링 모두 발생 - pure
                </button>
                <button data-event={'child'} data-name={'childPreventDefault'} onClick={preventDefault}>
                  상위 a태그(구글) 이동 안함 - preventDefault
                </button>
                <button data-event={'child'} data-name={'childStopDefault'} onClick={stopPropagation}>
                  stopPropagation
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className={'resultWrapper'}>
          <div className={'resultContent'}>
            <div className={'resultTitle'}>
              <Text className={'pressedChild'}>누른 자식은 -</Text>
              <Text className={'target'}>{target}</Text>
              <Text className={'parent'}>의 부모는 - </Text>
              <Text className={'parentTarget'}>{parentTarget}</Text>
            </div>
            <div className={'results'}>
              {[...results].map((result, idx) => (
                <Text key={result + idx}>{result}</Text>
              ))}
            </div>
          </div>
        </div>
      </ExperimentLayout>
    </EventStyled>
  );
};

export default Event;
