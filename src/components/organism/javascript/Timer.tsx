// import { useEffect } from 'react';

import { TimerStyled } from 'components/organism/javascript/event.styled';
import { ExperimentLayout } from 'components/molecules/layout/layout.styled';
import React, { useState } from 'react';
import { Text } from 'components/atom/text/Text';
import { ControlNumberInput } from 'components/atom/input/ControlNumberInput';

type TaskType = 'Timer' | 'After_Alert';
type QueueType = 'Ani' | 'Macro' | 'Both';

export const Timer = (): JSX.Element => {
  const [processing, setProcessing] = useState<boolean>(false);

  const [mm, setMM] = useState<number>(0);
  const [ss, setSS] = useState<number>(0);

  const [aniCount, setAniCount] = useState<number>(0);
  const [macroCount, setMacroCount] = useState<number>(0);

  const countingDownAni = () => {
    //
  };

  const handleClickStart = (worker: QueueType, type: TaskType) => {
    if (worker !== 'Ani') {
      //
    }

    if (worker !== 'Macro') {
      //
    }
  };

  const handleChangeMinute = (event: React.ChangeEvent<HTMLInputElement>, isMinute?: boolean) => {
    if (isMinute) setMM(Number(event.target.value));
    else {
      setSS(Number(event.target.value));
    }
  };

  return (
    <TimerStyled>
      <ExperimentLayout>
        <div className={'experiment'}>
          <div className={'inputWrapper'}>
            <ControlNumberInput className={'timerInput'} onChange={e => handleChangeMinute(e, true)} value={mm} />
            <Text>:</Text>
            <ControlNumberInput className={'timerInput'} onChange={e => handleChangeMinute(e, true)} value={ss} />
          </div>
          <div className={'countDownWorker'}>
            <button onClick={() => handleClickStart('Ani', 'Timer')}>interval start</button>
            <button onClick={() => handleClickStart('Macro', 'Timer')}>interval start</button>
            <button onClick={() => handleClickStart('Both', 'Timer')}>interval start</button>
          </div>
          <div className={'timer'}>
            <button onClick={() => handleClickStart('Ani', 'After_Alert')}>interval start</button>
            <button onClick={() => handleClickStart('Macro', 'After_Alert')}>interval start</button>
            <button onClick={() => handleClickStart('Both', 'After_Alert')}>interval start</button>
          </div>
        </div>
        <div className={'resultWrapper'}>
          <div className={'result'}></div>
        </div>
      </ExperimentLayout>
    </TimerStyled>
  );
};
