import { useState } from 'react';
import { PageStyled } from 'pages/style/page.styled';
import { PageLayout } from 'components/molecules/layout/PageLayout';
import { HookTiming } from 'components/organism/react/HookTiming';
import { Portal } from 'components/organism/react/Portal';

const reactTypes = {
  DEFAULT: 'Reset',
  HOOK_TIMING: '훅 타이밍',
  PORTAL: '리엑트 포탈',
} as const;

type ReactTypes = keyof typeof reactTypes;

const ReactPage = (): JSX.Element => {
  const [type, setType] = useState<ReactTypes>('PORTAL');

  return (
    <PageStyled>
      <PageLayout title={'react'}>
        <button className={'resetBtn'} onClick={() => setType('DEFAULT')}>
          {reactTypes.DEFAULT}
        </button>
        <div className={'buttons'}>
          <button onClick={() => setType('HOOK_TIMING')}>{reactTypes.HOOK_TIMING}</button>
          <button onClick={() => setType('PORTAL')}>{reactTypes.PORTAL}</button>
        </div>
        <div className={'pageChildren'}>
          {type === 'HOOK_TIMING' && <HookTiming />}
          {type === 'PORTAL' && <Portal />}
        </div>
      </PageLayout>
    </PageStyled>
  );
};

export default ReactPage;
