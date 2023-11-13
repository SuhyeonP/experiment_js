// import { useEffect } from 'react';

import { TimerStyled } from 'components/organism/javascript/event.styled';
import { ExperimentLayout } from 'components/molecules/layout/layout.styled';
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'components/atom/text/Text';
import { RefNumberInput } from 'components/atom/input/RefINumberInput';

type QueueType = 'Ani' | 'Macro' | 'Both';

export const Timer = (): JSX.Element => {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  const aniRef = useRef<number>(0);
  const macroRef = useRef<number>(0);

  const [macroMM, setMacroMM] = useState<number>(0);
  const [macroSS, setMacroSS] = useState<number>(0);
  const [aniMM, setAniMM] = useState<number>(0);
  const [aniSS, setAniSS] = useState<number>(0);

  const handleCountDownRequestAnimation = () => {
    const totalTime = 1000 * 60 * Number(minuteRef.current?.value) + 1000 * Number(secondRef.current?.value);

    aniRef.current = requestAnimationFrame(handleCountDownRequestAnimation);
  };

  const handleClickStart = (worker: QueueType) => {
    if (worker !== 'Ani') {
      requestAnimationFrame(handleCountDownRequestAnimation);
    }

    if (worker !== 'Macro') {
      //
    }
  };

  useEffect(
    () => () => {
      cancelAnimationFrame(aniRef.current);
      clearInterval(macroRef.current);
    },
    []
  );

  return (
    <TimerStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div className={'inputWrapper'}>
            <RefNumberInput className={'timerInput'} ref={minuteRef} />
            <Text>:</Text>
            <RefNumberInput className={'timerInput'} ref={secondRef} />
          </div>
          <div className={'countDownWorker'}>
            <button onClick={() => handleClickStart('Ani')}>interval start</button>
            <button onClick={() => handleClickStart('Macro')}>interval start</button>
            <button onClick={() => handleClickStart('Both')}>interval start</button>
          </div>
        </div>
        <div className={'resultWrapper'}>
          <div className={'result'}>
            <div>
              <Text>Macro</Text>
              <div>
                <Text>{macroMM}</Text>
                <Text>:</Text>
                <Text>{macroSS}</Text>
              </div>
            </div>
            <div>
              <Text>Request Animation</Text>
              <div>
                <Text>{aniMM}</Text>
                <Text>:</Text>
                <Text>{aniSS}</Text>
              </div>
            </div>
          </div>
        </div>
      </ExperimentLayout>
    </TimerStyled>
  );
};
