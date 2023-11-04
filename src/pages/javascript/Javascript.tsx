import { PageLayout } from '../../components/molecules/layout/PageLayout';
import { JavascriptStyled } from 'pages/javascript/javascript.styled';
import { useState } from 'react';
import Event from 'components/organism/javascript/Event';
import StopEvent from 'components/organism/javascript/StopEvent';

const jsTypes = {
  DEFAULT: '선택 해 주세요.',
  EVENT_DELEGATION: '이벤트 위임',
  LEGACY_EVENT: '레거시 이벤트',
} as const;

type JSTypes = keyof typeof jsTypes;

const Javascript = (): JSX.Element => {
  const [type, setType] = useState<JSTypes>('EVENT_DELEGATION');

  return (
    <JavascriptStyled>
      <PageLayout title={'javascript'}>
        <div className={'buttons'}>
          <button onClick={() => setType('EVENT_DELEGATION')}>이벤트 위임</button>
          <button onClick={() => setType('LEGACY_EVENT')}>기존 이벤트 위임</button>
        </div>
        <div className={'pageChildren'}>
          {type === 'EVENT_DELEGATION' && <Event />}
          {type === 'LEGACY_EVENT' && <StopEvent />}
        </div>
      </PageLayout>
    </JavascriptStyled>
  );
};

export default Javascript;
