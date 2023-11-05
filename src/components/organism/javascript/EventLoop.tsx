import { EventLoopStyled } from 'components/organism/javascript/event.styled';
import { useCallback, useEffect, useState } from 'react';
import { ExperimentLayout } from 'components/molecules/layout/layout.styled';
import { uuid } from '../../../util/common';

export const EventLoop = () => {
  const [events, setEvents] = useState<string[]>([]);

  const [timer, setTimer] = useState<number>(2);
  const [fetchTimer, setFetchTimer] = useState<number>(2);
  const [logString, setLogString] = useState<string>('log!');

  const addEventStack = useCallback(
    (eventName: string, callback: () => void) => {
      console.time(eventName);
      setEvents(prev => {
        prev.push(eventName);
        return prev;
      });
      callback();
      // todo 한스코프에서 바로 실행되어서 로그같이 바로 작업되는건 알아차리지 못함
      removeEventStack(eventName);
    },
    [events]
  );

  const removeEventStack = useCallback(
    (eventName: string) => {
      setEvents(prev => prev.filter(event => event !== eventName));
      console.timeEnd(eventName);
    },
    [events]
  );

  const handleClickAddLog = () => {
    const logId = 'log' + uuid();
    const printLog = function () {
      console.log(logString);
    };
    addEventStack(logId, printLog);
  };

  const handleClickAddTimer = () => {
    const timerId = 'timer' + uuid();
    const timerEvent = function () {
      setTimeout(function () {
        console.log('timer is end');
      }, timer * 1000);
    };

    addEventStack(timerId, timerEvent);
  };

  return (
    <EventLoopStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div>
            <p>초 단위</p>
            <input value={timer} onChange={e => setTimer(Number(e.target.value))} />
            <button onClick={handleClickAddTimer}>타이머 이벤트 등록</button>
          </div>
          <div>
            <input value={fetchTimer} onChange={e => setFetchTimer(Number(e.target.value))} />
            <button>Promise 이벤트 등록</button>
            <button>async/await 이벤트 등록</button>
          </div>
          <div>
            <input value={logString} onChange={e => setLogString(e.target.value)} />
            <button onClick={handleClickAddLog}>일반 로그 이벤트 추가!</button>
          </div>
          <button>requestAnimationFrame 이벤트 등록</button>
        </div>
        <div className={'resultWrapper'}>
          {/*todo 콘솔처럼 구현*/}
          <div className={'console'}>
            <p>console</p>
          </div>
          <div className={'resultContent'}>
            {events.map((event, index) => (
              <div key={event + index}>
                <p>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </ExperimentLayout>
    </EventLoopStyled>
  );
};
