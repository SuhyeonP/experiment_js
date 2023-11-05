import { PageLayout } from 'components/molecules/layout/PageLayout';
import { useState } from 'react';
import Event from 'components/organism/javascript/Event';
import StopEvent from 'components/organism/javascript/StopEvent';
import { PageStyled } from 'pages/style/page.styled';
import { EventLoop } from 'components/organism/javascript/EventLoop';

const jsTypes = {
  DEFAULT: '선택 해 주세요.',
  EVENT_DELEGATION: '이벤트 위임',
  LEGACY_EVENT: '레거시 이벤트',
  EVENT_LOOP: '이벤트 루프',
} as const;

type JSTypes = keyof typeof jsTypes;

const Javascript = (): JSX.Element => {
  const [type, setType] = useState<JSTypes>('EVENT_LOOP');

  return (
    <PageStyled>
      <PageLayout title={'javascript'}>
        <div className={'buttons'}>
          <button onClick={() => setType('EVENT_DELEGATION')}>이벤트 위임</button>
          <button onClick={() => setType('LEGACY_EVENT')}>기존 이벤트 위임</button>
          <button onClick={() => setType('EVENT_LOOP')}>{jsTypes.EVENT_LOOP}</button>
        </div>
        <div className={'pageChildren'}>
          {type === 'EVENT_DELEGATION' && <Event />}
          {type === 'LEGACY_EVENT' && <StopEvent />}
          {type === 'EVENT_LOOP' && <EventLoop />}
        </div>
      </PageLayout>
    </PageStyled>
  );
};

export default Javascript;
