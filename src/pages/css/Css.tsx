import { useState } from 'react';
import { PageLayout } from 'components/molecules/layout/PageLayout';
import { NthSelector } from 'components/organism/css/NthSelector';
import { PageStyled } from 'pages/style/page.styled';

const cssTypes = {
  DEFAULT: 'DEFAULT',
  NthSelector: 'nth-of-type, nth-child',
} as const;

type CssType = keyof typeof cssTypes;

const CSS = (): JSX.Element => {
  const [cssType, setCssType] = useState<CssType>('NthSelector');

  return (
    <PageStyled>
      <PageLayout title={'css'}>
        <button className={'resetBtn'} onClick={() => setCssType('DEFAULT')}>
          {cssTypes.DEFAULT}
        </button>
        <div className={'buttons'}>
          <button onClick={() => setCssType('NthSelector')}>{cssTypes.NthSelector}</button>
        </div>
        <div className={'pageChildren'}>{cssType === 'NthSelector' && <NthSelector />}</div>
      </PageLayout>
    </PageStyled>
  );
};

export default CSS;
