import { useState } from 'react';
import { PageStyled } from 'pages/style/page.styled';
import { PageLayout } from '../../components/molecules/layout/PageLayout';
import { HookTiming } from 'components/organism/react/HookTiming';

const reactTypes = {
  DEFAULT: 'Reset',
  HOOK_TIMING: '훅 타이밍',
} as const;

type ReactTypes = keyof typeof reactTypes;

const ReactPage = (): JSX.Element => {
  const [type, setType] = useState<ReactTypes>('HOOK_TIMING');

  return (
    <PageStyled>
      <PageLayout title={'react'}>
        <button className={'resetBtn'} onClick={() => setType('DEFAULT')}>
          {reactTypes.DEFAULT}
        </button>
        <div className={'buttons'}>
          <button onClick={() => setType('HOOK_TIMING')}>{reactTypes.HOOK_TIMING}</button>
        </div>
        <div className={'pageChildren'}>{type === 'HOOK_TIMING' && <HookTiming />}</div>
      </PageLayout>
    </PageStyled>
  );
};

export default ReactPage;
