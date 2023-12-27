import { useState } from 'react';
import { PageStyled } from 'pages/style/page.styled';
import { PageLayout } from 'components/molecules/layout/PageLayout';
import { HookTiming } from 'components/organism/react/HookTiming';
import { Portal } from 'components/organism/react/Portal';
import { CreditCard } from 'components/organism/javascript/CreditCard';

const reactTypes = {
  DEFAULT: 'Reset',
  HOOK_TIMING: '훅 타이밍',
  PORTAL: '리엑트 포탈',
  CREDIT_CARD: '카드',
} as const;

type ReactTypes = keyof typeof reactTypes;

const ReactPage = (): JSX.Element => {
  const [type, setType] = useState<ReactTypes>('CREDIT_CARD');

  return (
    <PageStyled>
      <PageLayout title={'react'}>
        <button className={'resetBtn'} onClick={() => setType('DEFAULT')}>
          {reactTypes.DEFAULT}
        </button>
        <div className={'buttons'}>
          <button onClick={() => setType('HOOK_TIMING')}>{reactTypes.HOOK_TIMING}</button>
          <button onClick={() => setType('PORTAL')}>{reactTypes.PORTAL}</button>
          <button onClick={() => setType('CREDIT_CARD')}>{reactTypes.CREDIT_CARD}</button>
        </div>
        <div className={'pageChildren'}>
          {type === 'HOOK_TIMING' && <HookTiming />}
          {type === 'PORTAL' && <Portal />}
          {type === 'CREDIT_CARD' && <CreditCard />}
        </div>
      </PageLayout>
    </PageStyled>
  );
};

export default ReactPage;
